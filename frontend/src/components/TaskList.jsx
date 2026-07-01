import API from "../api";


function TaskList({tasks,refresh}){


const deleteTask = async(id)=>{
    await API.delete(`/${id}`);
    refresh();
};


const toggleTask = async(task)=>{

    await API.put(`/${task._id}`,{
        completed: !task.completed
    });

    refresh();

};



return (

<div>

{
tasks.map((task)=>(

<div key={task._id}>


<h3 
style={{
textDecoration: task.completed ? "line-through" : "none"
}}
>
{task.title}
</h3>


<button onClick={()=>toggleTask(task)}>
{
task.completed ? "Undo" : "Complete"
}
</button>


<button onClick={()=>deleteTask(task._id)}>
Delete
</button>


</div>

))
}


</div>

)

}


export default TaskList;