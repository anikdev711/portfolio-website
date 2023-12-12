import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div>
            <div className="text-center font-bold mt-10 mb-10 text-2xl">
                <h3>My Projects</h3>
            </div>
            <div className="mt-10 mb-10">
                {/* row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 p-4">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Online forum project</h2>
                            <p>This project is based on online coding forum where forum users can communicate with each other by posted message.</p>
                            <Link to="https://github.com/anikdev711/online-forum-client">
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">See details</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Online group study project</h2>
                            <p>The website is about a online study group. To make this website, React JS, React router, Node JS, MongoDB, Express, Firebase and JSON Web Token are used.</p>
                            <Link to="https://github.com/anikdev711/online-group-study-client">
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">See details</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Brand shop project</h2>
                            <p>The category of the website is Automotive. React Router, Firebase authentication system, Node, Express, and MongoDB databases are used.</p>
                            <Link to="https://github.com/anikdev711/brand-shop-client">
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">See details</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>


                {/* row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 p-4">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Event management project</h2>
                            <p>The event management company is educational and training-related. The website was prepared using React JS, React Router, and Firebase. </p>
                            <Link to="https://github.com/anikdev711/event-management-project">
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">See details</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Donation campaign project</h2>
                            <p>The website is about a online study group. To make this website, React JS, React router, Node JS, MongoDB, Express, Firebase and JSON Web Token are used.</p>
                            <Link to="https://github.com/anikdev711/donation-campaign-project">
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">See details</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Course registration project</h2>
                            <p>The course registration project is done using React JS, Tailwind CSS, and Daisy UI.</p>
                            <Link to="https://github.com/anikdev711/course-registration-project">
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white font-bold">See details</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Projects;