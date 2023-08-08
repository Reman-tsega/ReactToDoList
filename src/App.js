import React,{useState} from 'react';
import './App.css';
import Todo from './Component/Todo';
import Input from './Component/Input';
import BackDrop from './Component/BackDrop';

let datas = [
  {
    id:1,
    title:"make bed",
    detail:"the first job in the morning"
  },
  {
    id:2,
    title:"eat breakfast",
    detail:"the 2nd job in the morning"
  }
]
function App() {
  const [history, setHistory] = useState({id:0, title:"", detail:""})
  const [add, setAdd] = useState(false)

  function setInputData(d){
    // setData({...data,id:datas.length+1, title:d.title, detail:d.content})
    // setData((prevState)=>{
    //   return {...prevState, id:(datas.length+1).toString(), title:d.title, detail:d.content }
    // })
    console.log(d ,"final")
    datas.unshift({...d,id:datas.length+1})
    console.log(datas ,"final")

  }
  function closeInput(){
    setAdd(false)
  }

  const deleteHandler =(id)=>{
    setHistory((prevData)=>{
      return {...prevData}
    })

    datas = datas.filter((d)=>{
      return d.id!=id
    })
    // console.log(typeof(d.id))
    console.log(datas)
    console.log(history)

  }

  return (
  <div className="App">
      <div style={{fontWeight:"bold", lineHeight:"50px",textAlign:"center"}}> My to do</div>
      <button style={{marginLeft:"300px", border:"1 solid black", borderRadius:"50%", height:"50px", width:"50px"}} className='btnp' onClick={()=>(setAdd(true))}>+</button>
      
      {add && <Input inputData= {setInputData} onClose = {closeInput} />}
      {add && <BackDrop OnclickBackDrop = {closeInput} />}
      {
      datas.map(d=>(
        <Todo key={d.id} data={d} listId={deleteHandler}/> 
      )
        )
      }
      {datas.length==0 && <p style={{color:"red",fontSize:"30px"}}> there is no to do list, add by pressing + icon</p>}
  
  </div>
  );
}

export default App;
