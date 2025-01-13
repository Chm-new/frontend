import React, { useState } from 'react'
import axios from "axios";

const Board = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [writer, setWriter] = useState('')
    const clickHandler=(e)=>{
        console.log("행복")
        const res = axios.post("http://localhost:8080/api/board/register",
        {"title":title,"content":content,"writer":writer}
        );
        console.log(res)
      }
      const titleChange= (e) =>setTitle(e.target.value)
      const contentChange= (e) =>setContent(e.target.value)
      const writerChange= (e) =>setWriter(e.target.value)
  return (
    <div>
        <div>
            <label>제목</label>
            <input type='text' name='title' onChange={titleChange}/>
        </div>
        <div>
            <label>내용</label>
            <textarea rows="10" cols="100" onChange={contentChange}></textarea>
        </div>
        <div>
            <label>작성자</label>
            <input type='text' name="writer" onChange={writerChange}/>
        </div>
        <button onClick={clickHandler}> 전송 </button>
    </div>
  )
}

export default Board