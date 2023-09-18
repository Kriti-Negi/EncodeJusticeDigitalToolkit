import BlockLink from "../Components/BlockLink";
import Card from "../Components/Card";

function Games(){
    return (
        <main className="page">
            <div className="page-title">
                <h1>Games Found Here!</h1>
            </div>
            <div className="regular-layout">
                <div className="part-bar">
                    <BlockLink
                        title = "Back to toolBox"
                        link = "/"
                        bgColor = "yellow"
                    />
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

export default Games;