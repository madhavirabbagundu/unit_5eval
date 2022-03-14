import React from "react";
// import "./App.css";

function Task() {
const [query, setQuery] = React.useState("");
const [tasks, setTasks] = React.useState([]);

const handlechange = (e) =>{
  const { value } = e.target;
  setQuery(value);
};



const handleAdd = () =>{
  const payload = {
    title:query,
    status:false
  };
  let newTasks = [...tasks,payload];
  setTasks(newTasks);
};
console.log(tasks)


  return (
    
       <div>
    
     <h1>Whishlist</h1>
     <div>
     <input
     value={query}
     onChange={handlechange} 
     placeholder="add something"
     />
     <button onClick ={handleAdd}>ADD</button>

     </div>
     <div>
       {tasks.map((item) => {
       return <div>{item.title}</div>;
       })}
     </div>
     

    </div>
  );
}

export default Task;
