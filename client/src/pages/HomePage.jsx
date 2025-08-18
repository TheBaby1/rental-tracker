import MainHeader from "../components/headers/MainHeader";
import HomePageContent from "../content/HomePageContent";
import CardComponent from "../components/cards/CardComponent";

const HomePage = () => {

    return (
        <>
            <MainHeader/>
            <HomePageContent>
                <CardComponent/>
            </HomePageContent>
        </>
    );
}

export default HomePage;