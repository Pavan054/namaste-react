import User from "./User";
import UserClass from "./UserClass";
import TeamClass from "./TeamClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(){
        super()
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent companion did mount")
    }

    render() {
        console.log("parent render")
        return (
            <div>
                <h1>This is About page</h1>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                {/* <User name={"Pavan Kumar"} location={"Pune, MH"}/> */}
                <UserClass name={"First"} location={"pune"}/>
                {/* <TeamClass name={"Second"} location={"pune"}/>
                <UserClass name={"Third"} location={"pune"}/> */}
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>This is About page</h1>
//             <User name={"Pavan Kumar"} location={"Pune, MH"}/>
//             <UserClass name={"Pavan Kumar Andavarapu"} location={"pune"}/>
//         </div>
//     );
// }

export default About;
