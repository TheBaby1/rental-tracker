import React from 'react';
import { useState, useEffect } from "react";
import UpdateButton from '../buttons/UpdateButton';
import useRent from '../../hooks/useRent';

const UpdateRentalModal = ({ isOpen, onClose, rental }) => {

    const {
        updateRentalById
    } = useRent();

    const [formData, setFormData] = useState({
        tenantName: "",
        rentType: "",
        location: "",
        rentalPrice: "",
        startDate: "",
        endDate: "",
        status: "active",
    });

    useEffect(() => {
        if (rental) {
            setFormData({
                tenantName: rental.tenantName || "",
                rentType: rental.rentType || "",
                location: rental.location || "",
                rentalPrice: rental.rentalPrice || "",
                startDate: rental.startDate ? rental.startDate.split("T")[0] : "",
                endDate: rental.endDate ? rental.endDate.split("T")[0] : "",
                status: rental.status || "active",
            });
        }
    }, [rental]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!rental?._id) {
                console.error("No rental ID provided");
                return;
            }
            await updateRentalById(rental._id, formData);
            alert("Rental updated successfully!");
            onClose();
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg px-[50px] py-[50px] w-full min-h-[600px] max-w-md mx-4">
                <div className="bg-white max-h-[600px] shadow-lg rounded-lg overflow-auto">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                        <h1 className="text-xl font-semibold text-white text-center">
                            Update Rental
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tenant Name
                            </label>
                            <input
                                type="text"
                                name="tenantName"
                                placeholder="Enter tenant name"
                                value={formData.tenantName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Rent Type
                            </label>
                            <select
                                name="rentType"
                                value={formData.rentType}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            >
                                <option value="">Select rent type</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="studio">Studio</option>
                                <option value="condo">Condo</option>
                                <option value="room">Room</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Rental Price / Month
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-2 text-gray-500">₱</span>
                                <input
                                    type="number"
                                    name="rentalPrice"
                                    placeholder="0.00"
                                    value={formData.rentalPrice}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                    required
                                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                End Date
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        <div className="pt-4">
                            <UpdateButton
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Update Rental
                            </UpdateButton>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateRentalModal;