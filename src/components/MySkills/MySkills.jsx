
import html from "../../assets/skills/html.png"
import css from "../../assets/skills/css.png"
import js from "../../assets/skills/js.png"
import react from "../../assets/skills/react.png"
import node from "../../assets/skills/nodejs.png"
import mongodb from "../../assets/skills/mongodb.png"

const MySkills = () => {
    return (
        <div>
            <div className="mt-20 mb-10 bg-white">
                <h3 className="text-xl font-bold text-center">My Skills</h3>
                
                <div className="mt-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-lg gap-10 mx-auto">


                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={html} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">HTML</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={css} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">CSS</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={js} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">JavaScript</h2>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-lg gap-10 mx-auto mt-10">


                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={react} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">React</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={node} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Node</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={mongodb} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">mongodb</h2>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </div>
    );
};

export default MySkills;