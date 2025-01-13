import React,{useState} from 'react'
import axios  from 'axios';

const Basic = () => {
  const[name,setName]=useState ('');
  const[phone,setPhone]=useState ('');
  const[id,setId]=useState ('');
 
  const clickHandler =(e)=>{ 
    console.log("행복")
    const res = axios.post("http://localhost:8080/api/basic",
     {"name":name,"phone":phone,"id":id}
    );
    console.log(res)
  }
  const nameChange = (e) => setName(e.target.value)
  const phonChange = (e) => setPhone(e.target.value)
  const idChange = (e) => setId(e.target.value)
  return (
    <div>
      <div>
          <div>
            <label>이름</label>
            <input type='name' onChange={nameChange} />
          </div>

          <div>
            <label>전화번호</label>
            <input type='phone' onChange={phonChange} />
          </div>

          <div>
            <label>아이디</label>
            <input type='id' onChange={idChange} />
          </div>

          <button onClick={clickHandler}> 전송 </button>
      </div>
    </div>
    
  )
}

export default Basic
