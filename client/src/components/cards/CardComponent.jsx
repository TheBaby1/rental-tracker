import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
import UpdateRentalModal from "../modals/UpdateRentModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CardComponent = ({ rentals = [], deleteRentalById, updateRentalById }) => {

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRental, setSelectedRental] = useState(null);


    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'inactive':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleDelete = async (rentalId) => {
        if (window.confirm('Are you sure you want to delete this rental?')) {
            try {
                await deleteRentalById(rentalId);
                console.log('Rental deleted successfully');
            } catch (error) {
                console.error('Failed to delete rental:', error);
            }
        }
    }

    const handleUpdate = () => {

    }

    return (
        <>
            {rentals.map((rental, index) => {
                return (
                    <div
                        key={rental.id || index}
                        className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg p-6 min-w-[320px] max-w-[400px]"
                    >
                        {/* Header with ID and Status */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-sm font-medium text-gray-500">
                                ID: {rental.readableId}
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(rental.status)}`}>
                                {rental.status}
                            </span>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {rental.tenantName}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {rental.rentType}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center text-sm">
                                    <span className="text-gray-500 w-16">Location:</span>
                                    <span className="text-gray-900 font-medium">{rental.location}</span>
                                </div>

                                <div className="flex items-center text-sm">
                                    <span className="text-gray-500 w-16">Price:</span>
                                    <span className="text-gray-900 font-semibold text-lg">
                                        ₱{rental.rentalPrice}
                                        <span className="text-sm font-normal text-gray-500">/month</span>
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 w-16">Start:</span>
                                <span className="text-gray-900 font-medium">
                                    {new Date(rental.startDate).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 w-16">End:</span>
                                <span className="text-gray-900 font-medium">
                                    {new Date(rental.endDate).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-[40px] mt-6">
                            <DeleteButton
                                onClick={() => handleDelete(rental._id)}
                            />
                            <UpdateButton onClick={() => {
                                setSelectedRental(rental);
                                setIsModalOpen(true);
                            }} />

                        </div>
                    </div>
                );
            })}

            {isModalOpen && (
                <UpdateRentalModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    rental={selectedRental}
                    updateRentalById={updateRentalById}
                />
            )}
        </>
    );
};

export default CardComponent;