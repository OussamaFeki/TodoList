import React from "react";
const Todoitem =(props)=>{
   let {items, DeleteItem}=props;

   let listitems=items.map((it)=>{
       <div>
           <span>{it.name}</span>
           <span>{it.age}</span>
           <span><button onClick={()=>{DeleteItem(it.id)}}></button></span>
       </div>
   })
return(
    <div>
        <span>{listitems}</span>
    </div>
)
}
export default Todoitem;