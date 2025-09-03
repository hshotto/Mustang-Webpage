// src/pages/Menu.jsx
export default function Menu(){
    return (
      <div style={{maxWidth:1100, margin:"0 auto", padding:"28px 20px"}}>
        <h1>Menu</h1>
        <ul style={{lineHeight:1.9}}>
          <li><a href="https://www.ford.com/cars/mustang/">공식 Mustang 페이지</a></li>
          <li><a href="#specs">사양 보기(앵커 예시)</a></li>
          <li><a href="#gallery">갤러리로 이동</a></li>
        </ul>
  
        <section id="specs" style={{marginTop:32}}>
          <h2>간단 사양</h2>
          <p>V8 옵션, RWD, 주행 모드, 디지털 콕핏 …</p>
        </section>
      </div>
    );
  }
  