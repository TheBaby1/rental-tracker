
const HomePageContent = ({ children }) => {

    return (
        <>
            <div className="min-h-[90vh] max-w-screen flex flex-col px-3 py-4 bg-[#DFF2EB]">
                {children}
            </div>
        </>
    );
}

export default HomePageContent;