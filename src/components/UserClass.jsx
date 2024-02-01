import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           userInfo:{
            name:"dummy",
            location:"dummy-location",
            image:"https:dummy-image.com"
           }
        }
    }

   async componentDidMount(){
       const res= await fetch('https://api.github.com/users/mayank5464942');
    const data=await res.json();
    console.log('data',data);
this.setState({
    userInfo:{
        name:data?.name,
        location:data?.location,
        image:data?.avatar_url
    }
})    }


componentDidUpdate(){
    console.log("did update");
}



render(){
    const {name,location,image}=this.state.userInfo;
    console.log(this.state);
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <img src={image}></img>
        </div>
    )
}
};

export default UserClass;