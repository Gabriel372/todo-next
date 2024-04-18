export type Ttask = {
task:string
nanoId:string
}
export type TstateListTask = {
ListTask:Ttask[];
setListTask:React.Dispatch<React.SetStateAction<Ttask[]>>; 
}
export type TstateModDel = TstateListTask & {
ModDel:TmodalDel
setModDel:React.Dispatch<React.SetStateAction<TmodalDel>>; 
}


export type TmodalDel = {
isOpen:boolean
targetDel:Ttask
}


