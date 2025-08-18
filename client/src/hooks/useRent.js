import { useState } from "react";

const useRent = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rentals, setRentals] = useState([]);

    const getRentals = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3001/get-rentals', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            const rentals = await response.json();
            setRentals(rentals);
            return rentals;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const createRental = async (rentalData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3001/create-rent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rentalData)
            });

            if (!response.ok) {
                throw new Error('Failed to create rental');
            }

            const data = await response.json();
            await getRentals();
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const deleteRentalById = async (rentalId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3001/delete-rental/${rentalId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Failed to delete rental');
            }

            const data = await response.json();
            await getRentals();
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const updateRentalById = async (rentalId, rentalData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3001/update-rent/${rentalId}`, {
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rentalData)
            });

            if (!response.ok) {
                throw new Error('Failed to update rental');
            }

            const data = await response.json();
            await getRentals(); 
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        rentals,
        getRentals,
        createRental,
        deleteRentalById,
        updateRentalById,
        loading,
        error
    };
}

export default useRent;