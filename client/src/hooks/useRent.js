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

    return {
        getRentals,
        loading,
        error
    };
}

export default useRent;