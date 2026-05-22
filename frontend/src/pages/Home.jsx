import HomeAbout from "../components/HomeAbout";
import HomeCarousel from "../components/HomeCarousel"
import HomeReservation from "../components/HomeReservation";
import OurFeatures from "../components/OurFeatures";
import OurMenu from "../components/OurMenu";
import ReviewsSection from "../components/ReviewsSection";

function Home() {
    return (
        <>
        <HomeCarousel/>
        <HomeAbout />
        <OurFeatures />
        <HomeReservation />
        <OurMenu />
        <ReviewsSection />
        </>
    )
}

export default Home;