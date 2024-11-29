//backEnd\model\book.model.js
import mongoose from "mongoose";

const DestinationSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Destination = mongoose.model("Destination", DestinationSchema);

export default Destination;