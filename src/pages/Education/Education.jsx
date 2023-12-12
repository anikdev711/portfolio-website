

const Education = () => {
    return (
        <div>

            <div className="text-center font-bold mt-10 mb-10 text-2xl">
                <h3>Education</h3>
            </div>

            <div className="mt-10 mb-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Degree
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Institution
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Year of pass
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department/Group
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">


                                <td className="px-6 py-4">
                                    B.Sc
                                </td>
                                <td className="px-6 py-4">
                                    Chittagong University of Engineering and Technology
                                </td>
                                <td className="px-6 py-4">
                                    2023
                                </td>
                                <td className="px-6 py-4">
                                    Electrical and Electronic Engineering
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    H.S.C
                                </td>
                                <td className="px-6 py-4">
                                    Chittagong College
                                </td>
                                <td className="px-6 py-4">
                                    2017
                                </td>
                                <td className="px-6 py-4">
                                    Science
                                </td>

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td className="px-6 py-4">
                                    S.S.C
                                </td>
                                <td className="px-6 py-4">
                                    Chittagong Government High School
                                </td>
                                <td className="px-6 py-4">
                                    2015
                                </td>
                                <td className="px-6 py-4">
                                    Science
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default Education;