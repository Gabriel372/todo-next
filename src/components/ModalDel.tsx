import { TstateModDel } from "./Types"

function ModalDel({ModDel,setModDel,ListTask,setListTask}:TstateModDel ) {
const EmptyValuesForMod ={isOpen:false,targetDel:{task:'',nanoId:''}}

 function DeleteTask() {
setListTask(ListTask.filter( task => task.nanoId !== ModDel.targetDel?.nanoId))  ;
setModDel(EmptyValuesForMod)
 }   




return (<div>
{ModDel.isOpen && 
<div className="fixed w-full h-full top-0 flex justify-center items-center bg-black bg-opacity-50"
onClick={()=> {setModDel(EmptyValuesForMod) }} >
<div className={`rounded-md h-[110px] pt-0 p-2 flex flex-col justify-around bg-blue-200`} onClick={(e)=> e.stopPropagation()}>
<h4 className={`text-lg font-semibold`}>Deseja deletar essa tarefa ?</h4>

<div className='flex flex-row justify-around'>

<button className='bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700 max-w-[120px] w-full' 
onClick={()=> {setModDel(EmptyValuesForMod) }}>não</button>

<button className='bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 w-full max-w-[120px] ml-2'
onClick={DeleteTask}>Sim</button>




</div>


</div>





</div>
}




</div>)

}

export default ModalDel
