

const Experience = () => {
    return (
        <div>
            <div className="mt-10 mb-10">
                <h3 className="text-center font-bold text-xl">Experiences</h3>
                <div className="text-center">
                    <div className="stats stats-vertical lg:stats-horizontal shadow mt-10">

                        <div className="stat">
                            <div className="stat-title">Projects</div>
                            <div className="stat-value">12</div>
                            <div className="stat-desc">July - November (2023)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-value">88%</div>
                            <div className="stat-desc">Tasks completed successfully</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Library/Framework</div>
                            <div className="stat-value">2</div>
                            <div className="stat-desc">Tailwind CSS and React</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;