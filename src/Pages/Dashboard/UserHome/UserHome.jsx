import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-2xl">Hi, Welcome
                {
                    user?.displayName ? <span className="text-orange-500"> {user.displayName} </span> : "Back"
                }
            </h2>
        </div>
    );
};

export default UserHome;