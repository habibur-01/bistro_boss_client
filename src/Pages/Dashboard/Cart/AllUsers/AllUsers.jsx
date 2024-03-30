import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../API/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";


const AllUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin = (item) => {
        axiosSecure.patch(`/users/admin/${item._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} is now admin.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
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
                axiosSecure.delete(`/users/${id}`)
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
            <div className="grid grid-cols-7 mb-8">
                <p className="col-span-3 text-2xl">All Users</p>
                <p className="col-span-3 text-2xl">Total User: {users.length}</p>

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
                            <th >Email</th>
                            <th className="text-center">Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td> {item?.name} </td>
                                <td> {item.email}   </td>
                                <td> <p onClick={() => handleMakeAdmin(item)} className=" border-2 rounded-md py-2 cursor-pointer flex justify-center ml-2 ">{item?.role ==='admin'?'Admin':<FaUser/>}</p>  </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-warning btn-xs">Delete</button>
                                    
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

export default AllUsers;