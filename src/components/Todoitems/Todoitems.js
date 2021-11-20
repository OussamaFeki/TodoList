import React,{Compoenet,Fragment,useEffect,use} from "react";
import './Todoitems.css';
const TodoItems = (props)=>{
      let {items,deleteItem,set} =props;
      let length = items.length;
      let listitems=length?(items.map((item)=>{
    return(  
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
            <button onClick={() =>deleteItem(item.id)}>delet</button>
            </td>
            </tr>)
})): (
    <p>there is no item to show</p>
)
    return(<div className="App">
        List Items
        <Fragment>
        <tr><td className="first">id</td><td className="first">name</td><td className="first">age</td>
        <td className="first">action</td>
        </tr>
        {listitems}
        </Fragment>
    </div>)}
    export default TodoItems