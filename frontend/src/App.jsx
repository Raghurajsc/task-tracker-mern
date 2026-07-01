import { useEffect, useState } from "react";
import API from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App(){

const [tasks,setTasks] = useState([]);


const getTasks = async()=>{

    try{
        const res = await API.get("/");
        setTasks(res.data);
    }
    catch(err){
        console.log(err);
    }

};


useEffect(()=>{
    getTasks();
},[]);



return(
<div className="container">

<h1>Task Tracker 🚀</h1>


<TaskForm refresh={getTasks}/>


<TaskList
tasks={tasks}
refresh={getTasks}
/>


</div>

)

}


export default App;