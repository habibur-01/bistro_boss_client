import ItemTable from "../../../Component/Shared Component/DataTable/DataTable";
import useCart from "../../../hooks/useCart/useCart";


const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="grid grid-cols-7 ">
                <p className="col-span-3 text-2xl">Total Orders:{cart.length}</p>
                <p className="col-span-3 text-2xl">Total Price: {totalPrice}</p>
                <button className="btn btn-primary hover:btn-ghost">Go for Payment</button>
            </div>
            <div className="overflow-x-auto mt-4">  

                        <ItemTable data={cart} name={'Name'} price={'Price'} image={'Image'}></ItemTable>  

            </div>
        </div>
    );
};

export default Cart;