import useRent from "../hooks/useRent";
import { useState, useEffect } from 'react';
import CardComponent from "../components/cards/CardComponent";

const HomePageContent = ({ children }) => {

    const {
        getRentals,
        loading,
        error
    } = useRent();

    const [rentals, setRentals] = useState([]);

    const fetchRentals = async () => {
        const rentals = await getRentals();
        if (rentals) {
            setRentals(rentals);
        }
    }

    useEffect(() => {
        fetchRentals();
    }, []);

    return (
        <>
            <div className="min-h-[90vh] max-w-screen flex flex-col px-3 py-4 bg-[#DFF2EB] overflow-auto">
                <div className="flex flex-row gap-x-4">
                    <CardComponent
                        rentals={rentals}
                    />
                </div>
            </div>
        </>
    );
}

export default HomePageContent;