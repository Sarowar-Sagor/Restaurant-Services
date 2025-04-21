import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/Register.json"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";


const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;

const SignUp = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { createUser, userProfileUpdate } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, email, password });

        if (regex.test(password)) {
            alert('Password is strong');
        }
        else {
            alert('Password is weak');
            return;
        }

        createUser(email, password)
            .then(result => {
                const userInfo = { name, email };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "User added to the database",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                // console.log(result.user);
                userProfileUpdate({ displayName: name })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(error => {
                        alert(error);
                    })

            })
            .catch(error => {
                // console.log(error);
            })

    }

    return (
        <div className="hero bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <p>
                        <Lottie animationData={registerAnimation} loop={true}></Lottie>
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" required className="input" placeholder="Name" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" required className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input minLength={6} type="password" name="password" required className="input" placeholder="Password" />

                            {/* <label className="fieldset-label"> <LoadCanvasTemplate reloadColor='white' /></label>
                            <input ref={refCaptcha} type="text" name="captcha" placeholder="Write the exact captcha" className="input input-bordered" required />
                            <button onClick={handleCaptcha} className="btn btn-sm btn-outline">Validate</button> */}

                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </form>
                    <p className="pb-4 text-center font-medium">Already have an account? <Link to="/login" className="text-red-600">Sign in</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;