// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Checkout from "./Checout";
// import { axiosPublic } from "../../../API/AxiosPublic/AxiosPublic";
// import axios from "axios";


// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_Publishable_API_Key);
const Payment = () => {
    // const location = useLocation()
    // const [clientSecret, setClientSecret] = useState('')

    // const amount = location?.state?.price
    
    // console.log(amount)
    // // console.log(id)
    // useEffect(() => {
    //     axios.post('http://localhost:3000/create-payment-intent', { price: amount })
    //         .then(res => {
    //             // console.log(res.data.clientSecret)
    //             setClientSecret(res.data.clientSecret)
    //         })
    // }, [amount])

    // const appearance = {
    //     theme: 'stripe',
    // };
    // const options = {
    //     clientSecret,
    //     appearance,
    // };

    return (
        <div>
            <h1 className="py-2 w-24 mx-auto my-6 text-center text-xl border-b-4 border-t-4 border-red-200">Payment</h1>
            {/* <div>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise} key={clientSecret}>
                        <Checkout clientSecret={clientSecret} price={amount} />
                    </Elements>
                )}
            </div> */}

        </div>
    );
};

export default Payment;