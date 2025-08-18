import useRent from "../hooks/useRent";
import { useState, useEffect } from 'react';
import SubmitButton from "../components/buttons/SubmitButton";

const CreateRentalPageContent = () => {

    const [formData, setFormData] = useState({
        tenantName: '',
        rentType: '',
        location: '',
        rentalPrice: 0,
        status: 'active'
    });

    const {
        createRental
    } = useRent();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await createRental(formData);
        } catch (error) {
            console.error('Failed to create rental.');
        }

        setFormData({
            tenantName: '',
            rentType: '',
            location: '',
            rentalPrice: 0,
            status: 'active'
        })
    }

    return (
        <>
            <div className="min-h-[90vh] max-w-screen flex flex-col px-[50px] py-6 bg-[#DFF2EB] items-center overflow-auto">
                <div className="h-[650px] w-[750px] bg-[#7AB2D3] rounded-lg shadow-md">
                    {/* Title */}
                    <div className="flex items-center justify-center mt-4 mb-4">
                        <h1 className="font-semibold text-[20px]">
                            Create New Rent
                        </h1>
                    </div>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit}>
                        <div className="ml-4 mb-4">
                            <label className="font-medium">Tenant Name: </label>
                            <input
                                type="text"
                                name="tenantName"
                                placeholder="Enter Tenant Name"
                                value={formData.tenantName}
                                onChange={handleChange}
                                className="ml-4 px-1 py-1 bg-white rounded-lg"
                            >
                            </input>
                        </div>

                        <div className="ml-4">
                            <label className="font-medium">Rent Type: </label>
                            <input
                                type="text"
                                name="rentType"
                                placeholder="Enter Rent Type"
                                value={formData.rentType}
                                onChange={handleChange}
                                className="ml-4 px-1 py-1 bg-white rounded-lg"
                            >
                            </input>
                        </div>

                        <div className="ml-4">
                            <label className="font-medium">Location: </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter Location"
                                value={formData.location}
                                onChange={handleChange}
                                className="ml-4 px-1 py-1 bg-white rounded-lg"
                            >
                            </input>
                        </div>

                        <div className="ml-4">
                            <label className="font-medium">Rental Price: </label>
                            <input
                                type="text"
                                name="rentalPrice"
                                placeholder="Enter Rental Price"
                                value={formData.rentalPrice}
                                onChange={handleChange}
                                className="ml-4 px-1 py-1 bg-white rounded-lg"
                            >
                            </input>
                        </div>

                        <div className="text-center justify-between mt-[200px]">
                            <SubmitButton
                                type="submit"
                            />
                        </div>
                    </form>


                </div>
            </div>
        </>
    );
}

export default CreateRentalPageContent;