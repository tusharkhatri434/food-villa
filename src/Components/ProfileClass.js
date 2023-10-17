 
 const Profile = () => {
   return (
     <div>
      tushar khatri 
     </div>
   )
 }
 
 export default Profile;
 

























// import React from "react";

// class ProfileClass extends React.Component{
    
//     constructor(props){
//         super(props);
         
//         this.state={
//             name:"0",
//         }
//         console.log("constructor start")

//     }

//     componentDidMount(){
//        this.catc = setInterval(()=>{
//             console.log("namste react");
//         },1000);
//         console.log("component did mount ")
//     }
//     componentDidUpdate(prevProps,prevState){
//         if(this.state.name!=prevState.name){
//             console.log("it is updated")
//         }
//         console.log("component did update ")
//     }
//     componentWillUnmount(){
//         clearInterval(this.catc);
//         console.log("component will unmount");
//     }
//     render(){
//         console.log("render function")
//         return (
//           <>
//             <h1>Hello this is {this.state.name}</h1>
//             <button onClick={()=>{
//                 this.setState({
//                     name:"1",
//                 })
//             }}> setcount</button>
//           </>
//         );
//     }
// }

// export default ProfileClass;