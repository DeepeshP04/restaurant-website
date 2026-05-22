import HomeAbout from "../components/HomeAbout";
import HomeCarousel from "../components/HomeCarousel"
import HomeReservation from "../components/HomeReservation";
import OurFeatures from "../components/OurFeatures";

function Home() {
    return (
        <>
        <HomeCarousel/>
        <HomeAbout />
        <OurFeatures />
        <HomeReservation />
        </>
    )
}

export default Home;