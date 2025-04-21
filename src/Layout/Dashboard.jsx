import { FaAd, FaEnvelope, FaHistory, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // console.log('isAdmin', isAdmin);
    return (
        <div className="max-w-screen-lg mx-auto mt-4">
            <div className="flex">
                <aside className="w-52 bg-orange-300">
                    <ul className="menu p-4 text-base">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to={"/dashboard/adminHome"}> <FaHome></FaHome> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/addItems"}> <FaUtensils></FaUtensils> Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageItems"}> <FaList></FaList> Manage Items
                                    </NavLink>
                                </li>
                                {/* <li className="disabled">
                                    <NavLink to={"/dashboard/bookings"}> <FaAd></FaAd> Manage Bookings
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={"/dashboard/users"}> <FaUsers></FaUsers> All Users
                                    </NavLink>
                                </li>
                            </> : <>
                                <li>
                                    <NavLink to={"/dashboard/userHome"}> <FaHome></FaHome> User Home
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={"/dashboard/reservation"}> <FaUtensils></FaUtensils> Reservation
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={"/dashboard/cart"}> <FaList></FaList> My Cart
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={"/dashboard/review"}> <FaAd></FaAd> Add a review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/myBooking"}> <FaUsers></FaUsers> My Bookings
                                    </NavLink>
                                </li> */}
                            </>
                        }
                        <div className="divider"></div>
                        {/* shared user information */}
                        <li>
                            <NavLink to={"/"}> <FaHome></FaHome> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"}> <BiMenu></BiMenu> Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/order/salad"}> <MdEmojiFoodBeverage></MdEmojiFoodBeverage> Order food
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard/paymentHistory"}> <FaHistory></FaHistory> Payment History
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={"/contact"}> <FaEnvelope></FaEnvelope> Contact
                            </NavLink>
                        </li> */}
                    </ul>
                </aside>
                <div className="flex-1 ml-5 p-4">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;