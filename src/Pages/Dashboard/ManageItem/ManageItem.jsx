import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../API/AxiosPublic/AxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageItem = () => {

    const { refetch, data: menu = [] } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    
    const handleDelete = (id) => {
        console.log(id)
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
                axiosPublic.delete(`/menu/${id}`)
                    .then(result => {
                        if (result.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }
    return (
        <div>
            <div className="flex justify-between text-2xl border-b-2 pb-2">
                <h2 >All Items</h2>
                <h2>Total Items:{menu.length}</h2>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th >Category</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td> {item?.name} </td>
                                <td> {item.category}   </td>
                                <td> ${item.price} </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-warning btn-xs">Delete</button>
                                    <Link to={`/dashboard/updateItem/${item._id}`} state={item}><button className=" btn btn-success btn-xs ml-2 ">Update</button></Link>
                                    
                                </td>
                            </tr>
                            )

                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageItem;