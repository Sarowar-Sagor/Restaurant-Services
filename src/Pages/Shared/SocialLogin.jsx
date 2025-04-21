import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const loc = useLocation();
    const setRoute = loc?.state || "/";

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                const user = result.user;
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email
                };
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
                        else {
                            Swal.fire({
                                position: "top",
                                icon: "error",
                                title: "User already exists in the database",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                navigate(setRoute);
            })
            .catch(error => {
                // console.log(error.message);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button className="btn mb-4 w-[86%] ml-8" onClick={handleGoogle}> <FaGoogle className="mr-2"></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;