import { PropTypes } from "prop-types"
import Swal from "sweetalert2";
import { axiosSecure } from "../../../API/AxiosSecure/AxiosSecure";
import useCart from "../../../hooks/useCart/useCart";

const ItemTable = ({ data, name, price, image }) => {
    const [, refetch] = useCart()
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
                axiosSecure.delete(`/carts/${id}`)
                .then(result=>{
                    if(result.data.deletedCount>0){
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
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>{image}</th>
                        <th>{name}</th>
                        <th>{price}</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <tr key={item._id}>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{item.name}</div>

                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="font-bold">{item.price}</div>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button onClick={()=>handleDelete(item._id)} className="btn btn-warning btn-xs">Delete</button>
                        </th>
                    </tr>
                    )

                }
            </tbody>
            {/* foot */}
            <tfoot>
                <tr>

                </tr>
            </tfoot>

        </table>

        </div >
    );
};
ItemTable.propTypes = {
    data: PropTypes.any,
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.any,
}

export default ItemTable;