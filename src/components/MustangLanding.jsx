// src/components/MustangLanding.jsx
import React from "react";

export default function MustangLanding() {
  return (
    <div className="tpl" style={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Hero */}
      <header className="tpl-hero" style={{ backgroundColor: "white !important" }}>
        <div className="tpl-hero__inner">
          <h1>Ford Mustang</h1>
          <p>아이코닉한 아메리칸 포니카 — 스타일, 사운드, 퍼포먼스</p>
          <a className="tpl-btn" href="#gallery">갤러리 보기</a>
        </div>
      </header>

      {/* 핵심 포인트 */}
      <section className="tpl-section">
        <h2>핵심 포인트</h2>
        <div className="tpl-grid">
          <article className="tpl-card"><h3>역사</h3><p>1964년 첫 출시, “포니카”의 시작.</p></article>
          <article className="tpl-card"><h3>성능</h3><p>I4 터보부터 V8까지 다양한 라인업.</p></article>
          <article className="tpl-card"><h3>플랫폼</h3><p>후륜구동, 독립식 서스펜션, 주행모드.</p></article>
          <article className="tpl-card"><h3>상징성</h3><p>튜닝/애프터마켓 생태계가 매우 활발.</p></article>
        </div>
      </section>

      {/* 제원 예시 */}
      <section className="tpl-section">
        <h2>예시 제원 (트림/연식별 상이)</h2>
        <div className="tpl-spec">
          <div><span>구동</span><strong>RWD</strong></div>
          <div><span>엔진</span><strong>I4 터보 / V8</strong></div>
          <div><span>변속기</span><strong>수동 6단 / 자동 10단</strong></div>
          <div><span>좌석</span><strong>쿠페/컨버터블 (4인승)</strong></div>
        </div>
        <p className="tpl-note">정확 수치는 목표 트림 확정 후 채워 넣으세요.</p>
      </section>

      {/* 갤러리 */}
      <section id="gallery" className="tpl-section">
        <h2>갤러리</h2>
        <div className="tpl-gallery">
          {/* 외부 URL 바로 쓰고 싶으면 src에 https://... 입력해도 됨 */}
          <img src="/mustang/hero.jpg" alt="Mustang exterior" />
          <img src="/mustang/interior.jpg" alt="Mustang interior" />
          <img src="/mustang/detail.jpg" alt="Mustang detail" />
        </div>
        <p className="tpl-note">이미지는 <code>public/mustang/</code> 폴더에 넣고 위 파일명 맞추기.</p>
      </section>

      {/* 타임라인 */}
      <section className="tpl-section">
        <h2>타임라인</h2>
        <ol className="tpl-timeline">
          <li><time>1964</time><span>1세대 데뷔(1964½).</span></li>
          <li><time>1969</time><span>고성능 Mach 1 등 확장.</span></li>
          <li><time>1979</time><span>Fox-body 세대.</span></li>
          <li><time>2005</time><span>레트로 디자인 회귀.</span></li>
          <li><time>2015</time><span>글로벌 전략(S550).</span></li>
          <li><time>2024~</time><span>최신 세대(S650).</span></li>
        </ol>
      </section>

      <footer className="tpl-footer">
      </footer>
    </div>
  );
}
