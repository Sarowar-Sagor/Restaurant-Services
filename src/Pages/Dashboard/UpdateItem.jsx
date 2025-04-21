import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, price, category, recipe, _id } = useLoaderData();

    const axiosPublic = useAxiosPublic();
    const axiosInstance = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {

            const menuItem = {
                name: data.name,
                image: res.data.data.display_url,
                recipe: data.recipe,
                price: parseFloat(data.price),
                category: data.category
            }

            const menuRes = await axiosInstance.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount) {
                // reset();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${name} has been updated to the cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        // console.log(res.data);
    }

        return (
            <div>
                <SectionTitle heading={"Hurry Up"} subHeading={"Update Item"}></SectionTitle>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-4">
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>

                        <input required defaultValue={name} type="text" placeholder="Recipe Name" className="input w-full" {...register("name")} />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue={category} required {...register("category")} className="select w-full">
                                {/* <option disabled value={"default"}>Select a category</option> */}
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>

                            <input required defaultValue={price} type="number" placeholder="Price" className="input w-full" {...register("price")} />
                        </div>

                    </div>

                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe")} className="textarea w-full" placeholder="Details"></textarea>
                    </div>

                    <div className="form-control mb-3">
                        <input {...register("image")} type="file" className="file-input" />
                    </div>

                    <button className="btn btn-info">Update Item </button>
                </form>
            </div>
        );
    };

    export default UpdateItem;