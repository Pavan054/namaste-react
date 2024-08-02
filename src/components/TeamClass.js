import { Component } from "react";

class TeamClass extends Component {
    constructor(props){
        super(props)
        console.log(this.props.name + " child constructor (TeamClass)")
    }

    componentDidMount(){
        console.log(this.props.name + " child component did mount (TeamClass)")
    }

    render() {
        console.log(this.props.name + " child render (TeamClass)")
        return (
            <div className="team-card">
                <h1>This is the Team</h1>
            </div>
        )
    }
}

export default TeamClass;
