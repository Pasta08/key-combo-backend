import { createUser, getUserById } from "../services/userServices.js";

export async function createUserHandler(req, res) {
    console.log(req, res);
    console.log("ciao");
    // try {
    //   const userId = await createUser(req.body);
    //   res.status(201).json({ message: 'User created successfully', userId });
    // } catch (error) {
    //   console.error('Error creating user:', error);
    //   res.status(400).json({ message: error.message });
    // }
}
export async function getUserHandler(req, res) {
    
    try {
        const userId = await getUserById();;
        res.status(201).json({ message: "User retrieved succesfully", userId });
        console.log(userId)
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ message: error.message });
    }
}
