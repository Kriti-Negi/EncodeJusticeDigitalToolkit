import BlockLink from "../Components/BlockLink";
import Card from "../Components/Card";

function Art(props){
    return (
        <main className="page">
            <div className="page-title">
                <h1>Art Found Here!</h1>
            </div>
            <div className="regular-layout">
                <div className="part-bar">
                    <BlockLink
                        title = "Back to toolBox"
                        link = "/EncodeJusticeDigitalToolkit/"
                        bgColor = "yellow"
                    />
                    <Card
                        bgColor = "pink"
                        title = {props.values[0]? props.values[0].title: ""}
                        description = {props.values[0]? props.values[0].description: ""}
                        link = {props.values[0]? props.values[0].link: ""}
                    />
                </div>
                <div className="split-bar" hidden = {props.values[1]}>
                    <Card
                        bgColor = "yellow"
                        title = {props.values[1]? props.values[1].title: ""}
                        description = {props.values[1]? props.values[1].description: ""}
                        link = {props.values[1]? props.values[1].link: ""}
                    />
                    <Card
                        bgColor = "pink"
                        title = {props.values[2]? props.values[2].title: ""}
                        description = {props.values[2]? props.values[2].description: ""}
                        link = {props.values[2]? props.values[2].link: ""}
                    />
                </div>
                <div className="wide-section">
                    <div className="wide-section-content">
                        <div className="split-row-bar">
                            <Card
                                bgColor = "yellow"
                                title = {props.values[3]? props.values[3].title: ""}
                                description = {props.values[3]? props.values[3].description: ""}
                                link = {props.values[3]? props.values[3].link: ""}
                            />
                            <Card
                                bgColor = "pink"
                                title = {props.values[4]? props.values[4].title: ""}
                                description = {props.values[4]? props.values[4].description: ""}
                                link = {props.values[4]? props.values[4].link: ""}
                            />
                        </div>
                        <div className="full-row-bar">
                                <Card
                                    bgColor = "yellow"
                                    title = {props.values[5]? props.values[5].title: ""}
                                    description = {props.values[5]? props.values[5].description: ""}
                                    link = {props.values[5]? props.values[5].link: ""}
                                />
                                <Card
                                bgColor = "pink"
                                title = {props.values[6]? props.values[6].title: ""}
                                description = {props.values[6]? props.values[6].description: ""}
                                link = {props.values[6]? props.values[6].link: ""}
                                 />
                                 <Card
                                    bgColor = "yellow"
                                    title = {props.values[7]? props.values[7].title: ""}
                                    description = {props.values[7]? props.values[7].description: ""}
                                    link = {props.values[7]? props.values[7].link: ""}
                                />
                                <Card
                                bgColor = "pink"
                                title = {props.values[8]? props.values[8].title: ""}
                                description = {props.values[8]? props.values[8].description: ""}
                                link = {props.values[8]? props.values[8].link: ""}
                                 />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        
    )
}

export default Art;