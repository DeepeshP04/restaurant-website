import HomeAbout from "../components/HomeAbout";
import HomeCarousel from "../components/HomeCarousel"
import HomeReservation from "../components/HomeReservation";

function Home() {
    return (
        <>
        <HomeCarousel/>
        <HomeAbout />
        <HomeReservation />
        </>
    )
}

export default Home;