import useRent from "../hooks/useRent";
import { useState, useEffect } from 'react';
import CardComponent from "../components/cards/CardComponent";

const HomePageContent = () => {

    const { rentals, getRentals, loading, error, deleteRentalById, updateRentalById } = useRent();

    useEffect(() => {
        getRentals();
    }, []);


    return (
        <>
            <div className="min-h-[90vh] max-w-screen flex flex-col px-[50px] py-6 bg-[#DFF2EB] overflow-auto">
                <div className="flex flex-wrap gap-x-4 gap-y-6 justify-start">
                    <CardComponent
                        rentals={rentals}
                        deleteRentalById={deleteRentalById}
                        updateRentalById={updateRentalById}
                    />
                </div>
            </div>
        </>
    );
}

export default HomePageContent;