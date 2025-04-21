import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {

    const [clientSecret, setClientSecret] = useState(null);
    const [transactionId, setTransactionId] = useState(null)
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosInstance = useAxiosSecure();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosInstance.post('/create-payment-intent', { price: totalPrice })
                .then((res) => {
                    const client = res.data.clientSecret;
                    // console.log(client);
                    setClientSecret(client);
                })
        }

    }, [axiosInstance, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log("Payment error", error);
            setError(error.message);
        }
        else {
            // console.log("Payment method", paymentMethod);
            setError('');
        }

        // confirm payment
        const { error: cardError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (cardError) {
            // console.log('error', cardError.message);
        }
        else {
            // console.log('payment intent', paymentIntent);

            if (paymentIntent.status === 'succeeded') {

                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                // save payment history
                const res = await axiosInstance.post('/payments', payment)
                // console.log(res.data);
                if (res.data.paymentResult.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `Thank you for your payment`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                    navigate('/dashboard/paymentHistory');
                }
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-3 rounded-lg btn-ghost" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

                <p className="text-red-500">{error}</p>
                {
                    transactionId && <p className="text-green-500"> Your transaction Id is: {transactionId}</p>
                }

            </form>
        </div>
    );
};

export default CheckOutForm;