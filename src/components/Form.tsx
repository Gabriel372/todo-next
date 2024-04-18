import React, { useState } from "react";
import { Ttask,TstateListTask } from "./Types";
import { nanoid } from "nanoid";

function Form({ListTask,setListTask}:TstateListTask) {
const [Task,setTask] = useState<Ttask>({task:'',nanoId:''});

 function HandleSubmit(e:React.FormEvent<HTMLFormElement>) {
 e.preventDefault();   
if (Task.task) {
setListTask(prev => [...prev,Task])
setTask({task:'',nanoId:''});
}
else {alert('preencha o campo')}    
}    
    
function ChangeInput(e:React.ChangeEvent<HTMLInputElement>){
setTask({task:e.target.value,nanoId:nanoid()})

}


    
return (<form className=' m-2' onSubmit={HandleSubmit}>
<input className="border border-black mr-2 rounded-md px-2" 
type="text" placeholder="Digite sua tarefa" onChange={ChangeInput} value={Task.task}/>
    
    
<button className="bg-black text-white rounded-md px-2 hover:bg-gray-700">Add</button>
 </form>)
        
}
        
        export default Form