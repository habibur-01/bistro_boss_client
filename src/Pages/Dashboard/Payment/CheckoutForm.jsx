import { useContext, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../API/AxiosSecure/AxiosSecure";
// import useCart from "../../../hooks/useCart/useCart";
import { PropTypes } from "prop-types"
import { AuthContext } from "../../../Provider/AuthContext";
// import { axiosPublic } from "../../../API/AxiosPublic/AxiosPublic";

const CheckoutForm = ({ clientSecret, price }) => {
    // const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.error("Payment confirmation failed:", confirmError);
            setError(confirmError.message);
        } else {
            console.log("Payment intent:", paymentIntent);
            setTransactionId(paymentIntent.id);

            const paymentData = {
                name: user?.displayName,
                email: user?.email,
                transactionId: paymentIntent.id,
                date: new Date(),
                price: price,
                // cartItem: {cartItem}
            };

            try {
                const res = await axiosSecure.post('/confirmPayment', paymentData);
                console.log(res);
            } catch (error) {
                console.error("Payment processing failed:", error);
                setError("Failed to process payment.");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-[500px]">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-gray-100 shadow-md rounded-md">
                <label className="block mb-4">Card details</label>
                <div className="mb-4">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    display: 'block',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }} />
                </div>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md disabled:bg-gray-400" type="submit" disabled={!stripe || !clientSecret || !user}>
                    Pay
                </button>
                {error && <p className="text-red-600 mt-2">{error}</p>}
                {transactionId && <p className="text-green-500 mt-2">Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};
CheckoutForm.propTypes = {
    clientSecret: PropTypes.string,
    price: PropTypes.any,
    cartItem: PropTypes.any
}

export default CheckoutForm;
