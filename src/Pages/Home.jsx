import Card from "../Components/Card";

function Home(){
    return (
        <div className="regular-layout">
            <div className="full-bar">
                <Card
                    bgColor = "pink"
                    title = "sdfsdf"
                    description = "dsfsdf"
                />
            </div>
            <div className="split-bar">

            </div>
            <div className="wide-section">
                <div className="">
                    <div className="split-row-bar">

                    </div>
                    <div className="full-row-bar">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;