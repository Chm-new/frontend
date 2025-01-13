import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BoardStyle/BoardList.css';

const BoardList = () => {
    const [data, setData] = useState([])
    const location = useLocation()
    useEffect(() => {
        const requstFunc = async () => {
            const res = await axios.get("http://localhost:8080/api/board/list")
            console.log(res)
            setData(res.data)   
        }
        requstFunc()
    }, [])
    const pathVariable = location.pathname.split("/")   
    const bno = pathVariable[2]
    console.log(bno) 
    const deletHandler = async (e, bno) => { 
        console.log(bno) 
        await axios.delete(`http://localhost:8080/api/board/delete/${bno}`)
        window.location.reload()
        alert("게시글이 삭제되었습니다")
    }

    return (
        <div>
            <div>
                <h1>구매평 게시판</h1>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>내용</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(i => (
                            <tr key={i.bno}>
                                <td> <Link to={`/detail/${i.bno}`}> {i.bno} </Link> </td>
                                <td> {i.title} </td>
                                <td> {i.writer} </td>
                                <td> {i.content} </td>
                                <td> <button onClick={(e) => deletHandler(e, i.bno)}> 삭제 </button> </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">
                                <button className="register">
                                    <Link to="/register">글쓰기</Link>
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default BoardList
