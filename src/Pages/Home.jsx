import Card from "../Components/Card";

function Home(){
    return (
        <main className="page">
            <div className="page-title">
                <h1>E J Digital Toolkit</h1>
            </div>
            <div className="regular-layout">
            <div className="full-bar">
                <Card
                    bgColor = "pink"
                    title = "sdfsdf"
                    description = "dsfsdf"
                    link = "https://www.google.com/"
                />
            </div>
            <div className="split-bar">
                <Card
                    bgColor = "yellow"
                    title = "sdfsdf"
                    description = "dsfsdf"
                    link = "https://www.google.com/"
                />
                <Card
                    bgColor = "pink"
                    title = "sdfsdf"
                    description = "dsfsdf"
                    link = "https://www.google.com/"
                />
            </div>
            <div className="wide-section">
                <div className="wide-section-content">
                    <div className="split-row-bar">
                        <Card
                            bgColor = "yellow"
                            title = "sdfsdf"
                            description = "dsfsdf"
                            link = "https://www.google.com/"
                        />
                        <Card
                            bgColor = "pink"
                            title = "sdfsdf"
                            description = "dsfsdf"
                            link = "https://www.google.com/"
                        />
                    </div>
                    <div className="full-row-bar">
                            <Card
                                bgColor = "yellow"
                                title = "sdfsdf"
                                description = "dsfsdf"
                                link = "https://www.google.com/"
                            />
                    </div>
                </div>
            </div>
        </div>
        </main>
        
    )
}

export default Home;