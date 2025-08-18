const CardComponent = ({ rentals = [] }) => {

    return (
        <>
            {rentals.map((rental, index) => {
                return (
                    <div key={rental.id || index} className="h-[300px] w-[350px] bg-[#7AB2D3] rounded-lg px-3 py-4">
                        {/* Details Section */}
                        <div>
                            <h2>Rental ID: {rental._id}</h2>
                            <h2>Tenant Name: {rental.tenantName}</h2>
                            <h2>Rent Type: {rental.rentType}</h2>
                            <h2>Location: {rental.location}</h2>
                            <h2>Rental Price: {rental.rentalPrice}</h2>
                            <h2>Status: {rental.status}</h2>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CardComponent;