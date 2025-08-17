import Rent from "../models/rent.model.js";

export const createRent = async (req, res) => {
    const rent = req.body;

    try {
        const newRent = new Rent(rent);

        if (!newRent) {
            res.status(201).json({message: 'New rent does not exist.'});
        }

        res.status(200).json(newRent);
    } catch (error) {
        console.log('Failed to create new rent');
        res.status(500).json({ error: error.message });
    }
}