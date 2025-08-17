import Rent from "../models/rent.model.js";

export const createRent = async (req, res) => {
    const rent = req.body;

    try {
        const newRent = new Rent(rent);
        await newRent.save();

        if (!newRent) {
            res.status(201).json({message: 'New rent does not exist.'});
        }

        res.status(200).json(newRent);
    } catch (error) {
        console.log('Failed to create new rent');
        res.status(500).json({ error: error.message });
    }
}

export const getAllRentals = async (req, res) => {

    try {
        const rentals = await Rent.find();

        if (!rentals) {
            res.status(201).json({ message: 'There are no rentals.'});
        }

        res.status(200).json(rentals);
    } catch (error) {
        console.log('Could not get rentals.');
        res.status(500).json({ error: error.message });
    }

}

export const deleteRentalById =  async (req, res) => {

    const { id } = req.params;

    try {
        const rent = await Rent.findByIdAndDelete(id);

        if (!rent) {
            res.status(201).json({ message: 'Rent not found.' });
        }
        
        res.status(200).json({ message: 'Successfully delete rental.' });
    } catch (error) {
        console.log('Failed to delete rental.');
        res.status(500).json({ message: error.message });
    }
}