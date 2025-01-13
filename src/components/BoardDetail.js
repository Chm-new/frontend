import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import './BoardStyle/BoardDetail.css';

const BoardDetail = () => {
  const [data,setData] =useState(null)
   const location =useLocation()
   const pathVariable = location.pathname.split("/")
   const bno= pathVariable[2]
   console.log(bno)
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [writer, setWriter] = useState('')
   //데이터 조회 
  useEffect(()=>{
    const requestFunc = async ()=>{
        console.log("여기는 데이터 하나  조회에요 ")
        const res = await axios.get(`http://localhost:8080/api/board/detail/${bno}`)
        console.log(res)
        setData(res.data)
        setTitle(res.data.title)
        setContent(res.data.content)
        setWriter(res.data.writer)
    }
    requestFunc()
},[bno])
//데이터 수정 
   const handleUpdate = async (e)=>{
    e.preventDefault()//새로 고침 방지 
    try{
        const res = await axios.put(`http://localhost:8080/api/board/detail/${bno}`,
          {title, content ,bno, writer}
        )
        console.log(res)
        alert("게시글이 성공적으로 수정되었습니다")
        setData(res.data)
    } catch(error){

    }

}
   
  return (
    <div>
      {data?<form>
        <div>
          <label>번호</label>
          <input  name='bno' value={bno} readOnly/>
        </div>
        <div>
          <label>제목</label>
          <input  name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
          <label>내용</label>
          <textarea  name='content' onChange={e=>setContent(e.target.value)}
            rows="10" cols="10">{data.content}</textarea>
      </div>
        <div>
          <label>작성자</label>
          <input  name='writer' value={writer} readOnly/>
        </div>
        <button onClick={handleUpdate}> 게시글 수정 </button>
      </form>
       :<p>Loading ...</p>}
    </div>
  )
}

export default BoardDetail