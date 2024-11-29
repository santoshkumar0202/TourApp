import React, { useState } from "react";
import axios from "axios";

function Cards({ item }) {
    const [isBooked, setIsBooked] = useState(false);
    const user = "customer@example.com"; // Replace with actual user email from authentication

    const bookNow = async () => {
        try {
            const response = await axios.post("http://localhost:4000/book/book", {
                user,
                destinationId: item._id,
            });

            if (response.status === 200) {
                setIsBooked(true);
                alert("Booking confirmed! A confirmation email has been sent.");
            }
        } catch (error) {
            console.error("Error booking destination:", error);
            alert("There was an issue with your booking.");
        }
    };

    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img src={item.image} alt="Destination" className="w-64 h-64 object-cover"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div
                            onClick={bookNow}
                            className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                        >
                            {isBooked ? "Booked" : "Book Now"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
