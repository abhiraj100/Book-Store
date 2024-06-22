import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});

const Book = mongoose.model("Book", bookSchema);
// mongoDB add 's' in Book => whatever we write in the res the mongoDB add 's' in it.

export default Book;