import BlockLink from "../Components/BlockLink";
import Card from "../Components/Card";

function Binary(props){
    return (
        <main className="page">
            <div className="page-title">
                <h1>Binary Information Found Here!</h1>
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
                        title = {props.values[0]? props.values[0].title: ""}
                        description = {props.values[0]? props.values[0].description: ""}
                        link = {props.values[0]? props.values[0].link: ""}
                    />
                </div>
                <div className="split-bar">
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
            
            </div>
        </main>
        
        
    )
}

export default Binary;