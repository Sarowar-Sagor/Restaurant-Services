import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleSignOut = () => {
        logOut()
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    const navlinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/menu"}>Our Menu</NavLink></li>
        <li><NavLink to={"/order/salad"}>Order Food</NavLink></li>
        {
            user && isAdmin && <li><NavLink to={"/dashboard/adminHome"}>Dashboard</NavLink></li>
        }

        {
            user && !isAdmin && <li><NavLink to={"/dashboard/userHome"}>Dashboard</NavLink></li>
        }
        
        <li><NavLink to={"/dashboard/cart"}>
            <TiShoppingCart className="text-xl" /> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </NavLink></li>
    </>

    return (
        <div className="navbar font-bold max-w-screen-lg fixed opacity-90 text-white z-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> Organic Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <Link to={"/login"}>
                    <button className='ml-2 btn btn-ghost'>Sign in</button>
                </Link> */}

                {
                    user ? <button className="btn btn-ghost" onClick={handleSignOut}>Sign Out</button> : <>
                        <Link to={"/login"}>
                            <button className='ml-2 btn btn-ghost'>Sign in</button>
                        </Link>
                    </>
                }

            </div>
        </div>
    );

};

export default Navbar;