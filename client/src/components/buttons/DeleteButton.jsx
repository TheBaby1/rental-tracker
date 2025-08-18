
const DeleteButton = ({ onClick, type="submit"}) => {

    return (
        <>
            <button 
                className="h-[40px] bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg px-4 py-2 hover:opacity-90 transition duration-300 cursor-pointer"
                onClick={onClick}
                type={type}
            >
                Delete
            </button>
        </>
    );
}

export default DeleteButton;