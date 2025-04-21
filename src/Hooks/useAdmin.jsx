import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosInstance = useAxiosSecure();
    const {refetch, isPending, data: isAdmin = false} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/admin/${user?.email}`)
            return res.data?.isAdmin;
        }
    })
    return [isAdmin, refetch, isPending];
};

export default useAdmin;