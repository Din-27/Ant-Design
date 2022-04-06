import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // const [form, setForm] = useState("")
  const [show, setShow] = useState([])

 

  // const handleClick = (e) => {
  //   setShow(true)
  // }

  // let array = form.split([])
  //   console.log(form)
  //   console.log(array)

  // useEffect(()=> {
  //   if()
  // }, [])

  const getPosts = () => {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      // console.log(res.data.map(x=>x.title))
      setShow(res.data)
    })
  }

  console.log(show.length + 1)
  useEffect(()=>{
    getPosts()
  }, [])

  return (
    <div className="App">
      <h1>Title</h1>
      <hr />
      {/* <div style={{display: 'flex'}}>
        <input type="text" placeholder='kata-kata ajaib' value={form} onChange={(e)=>setForm(e.target.value)} />
        <button onClick={handleClick}>Show</button>
      </div> */}
      
      {show.map(x=>
        <p key={x.id}>{x.title}</p>
      )}
      <h2>body</h2>
      <hr />
      {/* <div style={{display : 'flex'}}>
        <h4>ID REGIS : </h4> 
        {show && <p>{array.slice(0, 8)}</p>}
      </div>
      <div style={{display : 'flex'}}>
        <h4>KOTA : </h4> 
        {show && <p>{array.slice(8, 21)}</p>}
      </div>
      <div style={{display : 'flex'}}>
        <h4>NOMOR : </h4> 
        {show && <p>{array.slice(22, 27)}</p>}
      </div>
      <div style={{display : 'flex'}}>
        <h4>TANGGAL : </h4> 
        {show && <p>{array.slice(28, 34)}</p>}
      </div>
      <div style={{display : 'flex'}}>
        <h4>STATUS : </h4> 
        {show && <p>{array.slice(34)}</p>}
      </div> */}
      {show.map((x, y)=>
        <p key={x.id}>no.{x.length}-{x.body}</p>
      )}
    </div>
  );
}

export default App;
