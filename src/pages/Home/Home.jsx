import Banner from "../../components/Banner/Banner";
import Experience from "../../components/Experience/Experience";
import MySkills from "../../components/MySkills/MySkills";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <Experience></Experience>
            <Services></Services>
        </div>
    );
};

export default Home;