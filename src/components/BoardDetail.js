import React,{useEffect,useState } from 'react'
import { useLocation,useParams } from 'react-router';
import axios from 'axios';
import './BoardStyle/BoardDetail.css';

const BoardDetail = () => {
    const [data,setData] = useState(null)
    const location = useLocation();
    const pathVariable = location.pathname.split("/")   // path(경로)이름에서 /를 기준으로 나누어 배열로 반환   
    const id = pathVariable[2]  // 배열의 2번째 인덱스 값이 id값이다.
    console.log(id)

   useEffect(() => {

    const requstFunc = async () => {
        console.log("여기는 전체 목록 조회")
        const res = await axios.get(`http://localhost:8080/api/board/detail/${id}`)
        console.log(res)
        setData(res.data)   
    }
    requstFunc()
   }, [])

  return (
    <div>
      {data?<form>
        
        <div>
            <label>번호</label>
            <input name='bno' value={data.bno}/>
        </div>
        <div>
            <label>제목</label>
            <input name='title' value={data.title}/>
        </div>
        <div>
            <label>내용</label>
            <input nema='content' value={data.content}/>
        </div>
        <div>
            <label>작성자</label>
            <input nema='title' value={data.writer}/>
        </div>

      </form>
      :<p>로딩중...</p>}
    </div>
  )
}

export default BoardDetail
