import React from 'react'

type Props = {}
function Yanolja({}: Props) {
  return(
    <>
      <h2>yanolja</h2>
      <img src="https://firebasestorage.googleapis.com/v0/b/eybaek-44875.appspot.com/o/%E1%84%89%E1%85%A5%E1%86%AB%E1%84%87%E1%85%AE%E1%86%AF1.png?alt=media&token=4be1488a-74c0-46b7-84c2-b970907f7f79&_gl=1*971ybl*_ga*MjAyNDMxMzAxMC4xNjk3NjM2OTU4*_ga_CW55HF8NVT*MTY5ODA2NzI0Ni4yLjEuMTY5ODA2ODMyMy41OS4wLjA." alt="" />
      <div>숙박대전, 놀이대전 개발, 프로모션 페이지 설계 및 개발, 핸드폰 본인인증 구조 설계 및 개발, VueJS 사용 </div>
      <form>
          <div>
            <input type="text" id="name" required></input>
            <input type="text" id="age" min="0" max="60"></input>
            <button type="submit">Send</button>
          </div>
        </form>
    </>
  )
}

export default Yanolja