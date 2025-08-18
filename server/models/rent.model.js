import mongoose from 'mongoose';

const rentSchema = new mongoose.Schema({
    readableId: { type: String, required: true },
    tenantName: { type: String, required: true },
    rentType: { type: String, required: true },
    location: { type: String, required: true },
    rentalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Rent = mongoose.model('Rental', rentSchema);

export default Rent;