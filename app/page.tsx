import AboutUs from "./(components)/about-us";
import ClassSchedule from "./(components)/class-schedule";
import ContactUs from "./(components)/contact-us";
import Footer from "./(components)/footer";
import GymHero from "./(components)/gym-hero";
import MembershipPlans from "./(components)/membership-plan";
import Navbar from "./(components)/navbar";
import Testimonials from "./(components)/testimonials";
import TrainersProfiles from "./(components)/trainers-profile";

export default function page() {
    return (
        <div>
            <Navbar />
            <GymHero />
            <AboutUs />
            <ClassSchedule />
            <MembershipPlans />
            <TrainersProfiles />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
}
