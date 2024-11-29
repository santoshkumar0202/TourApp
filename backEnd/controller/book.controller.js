import nodemailer from "nodemailer";
import Destination from "../model/book.model.js";
import mongoose from "mongoose";

// Create a booking schema (optional, if you need to store booking details)
const BookingSchema = mongoose.Schema({
    user: String, // e.g., user email
    destinationId: mongoose.Schema.Types.ObjectId,
    bookingDate: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", BookingSchema);

export const getDestination = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// New bookDestination method to handle bookings
export const bookDestination = async (req, res) => {
    const { user, destinationId } = req.body;

    try {
        const destination = await Destination.findById(destinationId);

        if (!destination) {
            return res.status(404).json({ message: "Destination not found!" });
        }

        // Create a new booking record in the database
        const newBooking = new Booking({
            user,
            destinationId,
        });

        await newBooking.save();

        // Sending confirmation email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user,
            subject: "Booking Confirmation",
            text: `Thank you for booking the ${destination.name} package! Your booking is confirmed.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: "Email not sent!" });
            }
            res.status(200).json({ message: "Booking confirmed! Email sent." });
        });
    } catch (error) {
        console.error("Error in booking:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
