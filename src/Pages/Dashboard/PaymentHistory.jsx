import { useContext } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosInstance.get(`/payments/${user.email}`)
            // console.log(res.data);
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle heading={"At a glance"} subHeading={"Payment history"}></SectionTitle>
            <h2 className="text-2xl">Total payment: {payments.length} </h2>

            <div className="overflow-x-auto shadow-2xl rounded-b-2xl">
                <table className="table table-zebra mt-3">
                    {/* head */}
                    <thead className="bg-orange-300">
                        <tr>
                            <th className="rounded-tl-2xl">
                                #
                            </th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th className="rounded-tr-2xl">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    $ {payment.price}
                                </td>
                                <td>{payment.transactionId}</td>
                                <td>
                                    {payment.status}
                                </td>
                                
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;