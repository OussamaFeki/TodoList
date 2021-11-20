import React,{Component} from "react";
import Additem from "./components/Additem/test";
import Todoitem from "./components/Todoitems/test";

class App extends Component{
  state={
      items:[
          {id:1,name:"oussama",age:"12"}
      ]
  }
  Additem=(it)=>{
      let items=this.state.items;
      it.id= Math.random();
      items.push(it);
      this.setState({items})
  }
  DeleteItem=(id)=>{
    let items=this.state.items;
    i=items.findIndex((it)=> it.id===id);
    items.splice(i,1);
  }
render(){


    return (
        <div>
            <Todoitem items={this.state.items} DeleteItem={this.DeleteItem} />
            <Additem ajouter={this.Additem}/>
        </div>
    )
}


}