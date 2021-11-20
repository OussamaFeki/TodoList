import React ,{Component} from 'react'; 
import TodoItems from './components/Todoitems/Todoitems';
import Additem from './components/Additem/Additem';
class App extends Component{
    state = {
        items:[ 
            {id:1,name :'Oussama',age:22},
            {id:2 ,name:'Mohamed', age:23},
            {id:3,name:'Abdo',age:24}
        ]

    }
    set =(sit)=>{
        this.setState({items:sit})
    }
    deleteItem= (id)=>{
        let items=this.state.items;
        let i= items.findIndex(item => item.id === id);
        items.splice(i,1);
        this.setState(
            {items:items}
        )
    }
    addItem = (item)=>{
        let items=this.state.items;
        item.id= Math.random();
        items.push(item);
        this.setState(
            {items:items}
        ) 
    }
    render(){
        return(
           <div className="App">
              <table >
                <tbody >
                 <TodoItems items={this.state.items} deleteItem={this.deleteItem} set={this.set} />
                 <Additem addItem={this.addItem}/>
                </tbody>
              </table>
              
           </div>
        );
    }
}
export default App;