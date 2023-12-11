
import profile from "../../assets/profile/profile.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-teal-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={profile} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, I am Anik</h1>
                        <p className="py-6">I am a React focused Front end developer with having some backend knowledge of node, express and mongodb. <br /> I am very passionate and dedicated to my work. Besides MERN stack web development, I am also a content writer. <br /> I write technology related contents in Bangla and English. </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;