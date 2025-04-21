import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosInstance = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await axiosInstance.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        axiosInstance.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Hurrah!!",
                        text: `${user.name} is the Admin now`,
                        icon: "success"
                    });
                    refetch();
                }
            })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }


    return (
        <div>
            <h2>Total user: {users.length}</h2>
            <div className="overflow-x-auto shadow-2xl rounded-b-2xl">
                <table className="table table-zebra mt-3">
                    {/* head */}
                    <thead className="bg-orange-300">
                        <tr>
                            <th className="rounded-tl-2xl">
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="rounded-tr-2xl">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role === "Admin" ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-lg bg-orange-400 text-white"><FaUsers></FaUsers></button>
                                    }

                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-lg bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;