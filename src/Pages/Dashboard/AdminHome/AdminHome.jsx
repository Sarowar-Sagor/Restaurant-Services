import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaDollarSign, FaList, FaUsers } from "react-icons/fa";

const AdminHome = () => {

    const { user } = useContext(AuthContext);
    const axiosInstance = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const res = await axiosInstance.get('/adminStats')
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-2xl">Hi, Welcome
                {
                    user?.displayName ? <span className="text-orange-500"> {user.displayName} </span> : "Back"
                }
            </h2>

            <div className="stats shadow mt-3">
                <div className="stat bg-slate-300">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-2xl mt-5"></FaDollarSign>
                    </div>
                    <div className="stat-title text-base">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat bg-lime-300">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-2xl mt-5"></FaUsers>
                    </div>
                    <div className="stat-title text-base">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat bg-red-300">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-2xl mt-5"></FaBook>
                    </div>
                    <div className="stat-title text-base">Orders</div>
                    <div className="stat-value">{stats.payments}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

                <div className="stat bg-amber-300">
                    <div className="stat-figure text-secondary">
                        <FaList className="text-2xl mt-5"></FaList>
                    </div>
                    <div className="stat-title text-base">Menu Items</div>
                    <div className="stat-value">{stats.menus}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;