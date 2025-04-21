import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from '../../assets/Login.json';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Lottie from "lottie-react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const refCaptcha = useRef(null);

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const loc = useLocation();
    const setRoute = loc?.state || "/";

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User successfully Logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(setRoute);
            })
            .catch(error => {
                // console.log(error)
            })

    }

    const handleCaptcha = (e) => {
        e.preventDefault();

        const userValue = refCaptcha.current.value;

        if (validateCaptcha(userValue)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <div className="hero bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <p>
                        <Lottie animationData={loginAnimation} loop={true}></Lottie>
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" required className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" required className="input" placeholder="Password" />

                            <label className="fieldset-label"> <LoadCanvasTemplate reloadColor='white' /></label>
                            <input ref={refCaptcha} type="text" name="captcha" placeholder="Write the exact captcha" className="input input-bordered" />
                            <button onClick={handleCaptcha} className="btn btn-sm btn-outline">Validate</button>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            {/* use disabled for captcha */}
                            <button disabled={disabled} className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="pb-4 text-center font-medium">New to the website? <Link to="/signup" className="text-red-600">Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;