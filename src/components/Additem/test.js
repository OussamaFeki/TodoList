import React,{Component} from "react";
class Additem extends Component{
   state={
       name:'',
       age:''
   }
   handelChange=(e)=>{
    this.setState(
        {
            [e.target.id]:e.target.value
        }
    )}
    handelAdd=(e)=>{
     e.preventDefault();
     this.props.ajouter(this.state);
     this.setState(
         {name:'',
        age:''}
     )

    }
   render(){
     return(
         <div>
             <form onSubmit={this.handelAdd}>
             <input type="text" id="name"placeholder="enter name..."  onChange={this.handelChange} value={this.state.name}/>
             <input type="number" id="age" placeholder="enter age..." onChange={this.handelChange} value={this.state.age}/>
             <input type="submit" value="add"/>
             </form>
         </div>
     );
   }




}
export default Additem;