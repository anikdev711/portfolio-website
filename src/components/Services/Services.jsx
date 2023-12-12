import coding from "../../assets/services/programming.png"
import designing from "../../assets/services/graphicdesigner.png"
import writing from "../../assets/services/contentwriting.png"

const Services = () => {
    return (
        <div>

            <div className="mt-10 mb-10">
                <h3 className="text-xl font-bold text-center">My Services</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto gap-5">


                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src={coding} alt="web" className="w-[50px] h-[50px]" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Website Development</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        <ul>
                            <li className="list-disc">Responsive design</li>
                            <li className="list-disc">MERN stack</li>
                            <li className="list-disc">Debugging</li>
                        </ul>
                    </p>

                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src={designing} alt="web" className="w-[50px] h-[50px]" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Graphics Design</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        <ul>
                            <li className="list-disc">Adobe Photoshop</li>
                            <li className="list-disc">Adobe Illustrator</li>
                            <li className="list-disc">Canva</li>
                        </ul>
                    </p>

                </div>


                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src={writing} alt="web" className="w-[50px] h-[50px]" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Content Writing</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        <ul>
                            <li className="list-disc">Content writer</li>
                            <li className="list-disc">Technical blogs</li>
                            <li className="list-disc">English and Bangla</li>
                        </ul>
                    </p>

                </div>




            </div>

        </div>
    );
};

export default Services;