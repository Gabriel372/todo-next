import { TstateModDel,Ttask } from "./Types"



function List({ListTask,ModDel,setModDel,setListTask}:TstateModDel) {
    
function DeleteTask(task:Ttask) {
setModDel({isOpen:true,targetDel:task})    
}

    return (<ul className="m-auto max-w-72">
{ListTask.map(task => (<li key={task.nanoId} 
className=" mb-1 w-full flex justify-between hover:bg-slate-100">{task.task}
<button className=" bg-red-700 text-white rounded-md px-1 ml-1 hover:bg-red-600"
onClick={()=>DeleteTask(task)}>Deletar</button></li>))}


    </ul>)
    
    }
    
    export default List