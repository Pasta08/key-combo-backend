// userController.js
import bcrypt from "bcrypt";
import { mongoConnect, closeConnection } from "../config/db.js";

export const createUser = async (req, res) => {
    console.log("chiamo");
    // try {
    //     const {
    //         username,
    //         email,
    //         password,
    //         score,
    //         combo_duration_in_seconds,
    //         total_key_pressed,
    //     } = req.body;

    //     // Validate request body
    //     if (!username || !email || !password) {
    //         return res
    //             .status(400)
    //             .json({
    //                 message: "Username, email, and password are required",
    //             });
    //     }

    //     // Connect to database
    //     const db = await mongoConnect();
    //     const users = db.collection("User");

    //     // Check if the user already exists
    //     const existingUser = await users.findOne({ email });
    //     if (existingUser) {
    //         return res.status(409).json({ message: "User already exists" });
    //     }

    //     // Hash the password
    //     const hashedPassword = await bcrypt.hash(password, 10);

    //     // Create user document
    //     const newUser = {
    //         username,
    //         email,
    //         password: hashedPassword,
    //         score,
    //         combo_duration_in_seconds,
    //         total_key_pressed,
    //         created_at: new Date(),
    //     };

    //     // Insert the user document into the collection
    //     const result = await users.insertOne(newUser);

    //     // Respond with the created user ID
    //     res.status(201).json({
    //         message: "User created successfully",
    //         userId: result.insertedId,
    //     });
    // } catch (error) {
    //     console.error("Error creating user:", error);
    //     res.status(500).json({ message: "Internal server error" });
    // }
};

export const getUserById = async (req, res) => {
    try {

        const string = 'Boxye04'
        // Validate request body


        // Connect to database
        const db = await mongoConnect();
        const usersCollection = db.collection("User");

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ username: string });
        return existingUser

    } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
    closeConnection()
};
