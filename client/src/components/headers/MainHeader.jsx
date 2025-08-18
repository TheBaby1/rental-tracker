import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg.webp';

const MainHeader = () => {

    return (
        <>
            <div className="max-w-screen h-[80px] bg-[#B9E5E8] flex flex-col shadow:md">
                <div className="flex items-center justify-between px-2 h-full">
                    {/* Left Section */}
                    <div className="flex items-center gap-2">
                        <div className="h-[50px] w-[50px] bg-gray-300 rounded-lg">
                            <img
                                src={logo}
                                alt="MyRentals Logo"
                                className="object-contain rounded-lg"
                            ></img>
                        </div>
                        <h1 className="font-bold text-[20px]">
                            MyRentals
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-x-6">
                        <Link
                            to='/homepage/view-rentals'
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Rentals
                        </Link>
                        <Link
                            to='/create-rental'
                            className="text-gray-600 hover:text-green-600 transition-colors duration-200 ml-6"
                        >
                            Add Rental
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainHeader;