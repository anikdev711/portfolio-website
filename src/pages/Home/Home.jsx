import Banner from "../../components/Banner/Banner";
import Experience from "../../components/Experience/Experience";
import MySkills from "../../components/MySkills/MySkills";
import Photos from "../../components/Photos/Photos";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <Experience></Experience>
            <Services></Services>
            <Photos></Photos>
        </div>
    );
};

export default Home;