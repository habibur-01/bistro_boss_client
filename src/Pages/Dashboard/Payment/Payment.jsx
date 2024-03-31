import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../API/AxiosSecure/AxiosSecure";
import useCart from "../../../hooks/useCart/useCart";


const stripePromise = loadStripe(`${import.meta.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);

const Payment = () => {
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
    

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                console.error("Error fetching client secret:", error);

            });
    }, [totalPrice, axiosSecure]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div>
            <div className="text-center">
                <h3 className="text-base italic text-yellow-400 mb-2">---Make A Payment---</h3>
                <h2 className="text-3xl py-2 w-36 border-y-4 mx-auto">Payment</h2>
            </div>
            <div>
                {
                    clientSecret && (
                        <Elements stripe={stripePromise} options={options} key={clientSecret}>
                            <CheckoutForm clientSecret={clientSecret} price={totalPrice} cartItem={cart}/>
                        </Elements>
                    )
                }
            </div>
        </div>
    );
};

export default Payment;
