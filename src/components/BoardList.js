import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BoardStyle/BoardList.css';

const BoardList = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        //  async 공부.
        const requstFunc = async () => {
            const res = await axios.get("http://localhost:8080/api/board/list")
            console.log(res)
            setData(res.data)   
        }
        requstFunc()

        
    }, [])
  
   

  return (
    <div>
        <table>
            <h1>구매평 게시판</h1>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>

            {data.map(i=>(<tr>
                <td> <Link to = {`/detail/${i.bno}`}> {i.bno} </Link> </td>
                <td> {i.title} </td>
                <td> {i.writer} </td>
                <td> {i.content} </td>
                </tr>))} 

        </table>
    </div>
  )
}

export default BoardList
