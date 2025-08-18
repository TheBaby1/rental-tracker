import { useState } from "react";

const useRent = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRentals = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3001/get-rentals', {
                method: 'GET',
                headers: {'Content-Type' : 'application/json' }
            });

            const rentals = await response.json();

            return rentals;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const createRental = async (rentalData) => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch('http://localhost:3001/create-rent', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(rentalData)
            });

            if (!response.ok) {
                console.log('Error');
            }

            return rentalData;
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        getRentals,
        createRental,
        loading,
        error
    };
}

export default useRent;