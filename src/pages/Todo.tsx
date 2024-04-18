import Form from "../components/Form"
import List from "../components/List"
import { Ttask,TmodalDel } from "@/components/Types";
import { useState } from "react";
import ModalDel from "@/components/ModalDel";

function Todo() {
const [ListTask,setListTask] = useState<Ttask[]>([]);
const EmptyValuesForMod ={isOpen:false,targetDel:{task:'',nanoId:''}}
const [ModDel,setModDel] = useState<TmodalDel>(EmptyValuesForMod);

    

    // "export": "next export",

return (<div className=" text-center">
 <h3 className=" text-xl">Minhas tarefas</h3>   
<Form ListTask={ListTask} setListTask={setListTask}/>
<List ModDel={ModDel} setModDel={setModDel} ListTask={ListTask} setListTask={setListTask} />
<ModalDel ModDel={ModDel} setModDel={setModDel} ListTask={ListTask} setListTask={setListTask}/>
</div>)

}

export default Todo
