import {useState} from "react";
import API from "../api";


function TaskForm({refresh}){


const [title,setTitle]=useState("");



const submit = async(e)=>{

e.preventDefault();


if(!title){
alert("Enter task title");
return;
}


await API.post("/",{
    title:title
});


setTitle("");

refresh();

};



return (

<form onSubmit={submit}>


<input

type="text"

placeholder="Enter task"

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>


<button>Add Task</button>


</form>

);


}


export default TaskForm;