import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "John Doe",
                location: "Us",
            }
        }
        console.log(this.props.name + " child constructor")
    }

    async componentDidMount(){
        console.log(this.props.name + " child component did mount")
        const data = await fetch("https://api.github.com/users/pandavarapu-mdsol");
        const jsonData = await data.json();

        console.log(jsonData);

        this.setState({
            userInfo: jsonData,
        })
    }

    render() {
        console.log(this.props.name + " child render")
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card border border-gray-200 p-4 m-4 w-80 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-300">
                <div className="p-2">
                    <img src={avatar_url} className="rounded-lg w-72" />
                </div>
                <div className="p-2 m-2">
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Contact: @_pavan_deepu_</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;
