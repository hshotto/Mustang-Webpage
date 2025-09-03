// src/components/MustangPage.jsx
import React from "react";

export default function MustangPage() {
  return (
    <main className="mx-wrap">
      {/* Hero */}
      <section className="mx-hero">
        <div className="mx-hero__overlay" />
        <div className="mx-hero__content">
          <h1 className="mx-title">Ford Mustang</h1>
          <p className="mx-sub">아이코닉한 아메리칸 포니카</p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-section">
        <h2 className="mx-h2">핵심 포인트</h2>
        <div className="mx-grid">
          <article className="mx-card">
            <h3>역사</h3>
            <p>1964년 첫 출시. 합리적 가격에 스포티한 감성을 내세운 “포니카”의 대표 모델.</p>
          </article>
          <article className="mx-card">
            <h3>성능</h3>
            <p>라인업에 따라 I4 터보부터 V8까지. 수동/자동 변속기, 후륜구동 기반.</p>
          </article>
          <article className="mx-card">
            <h3>플랫폼</h3>
            <p>현대 세대는 독립식 후륜 서스펜션, 주행모드/전자제어 보강.</p>
          </article>
          <article className="mx-card">
            <h3>상징성</h3>
            <p>머스탱은 머슬/포니카 문화의 상징. 다양한 튜닝/애프터마켓 생태계.</p>
          </article>
        </div>
      </section>

      {/* (예시) 제원 블럭 — 연식/트림마다 달라지므로 값은 채워 쓰도록 */}
      <section className="mx-section">
        <h2 className="mx-h2">예시 제원 (트림/연식에 따라 상이)</h2>
        <div className="mx-spec">
          <div><span>구동</span><strong>RWD</strong></div>
          <div><span>엔진</span><strong>I4 터보 / V8 등 트림별 상이</strong></div>
          <div><span>변속기</span><strong>수동 6단 / 자동 10단 등</strong></div>
          <div><span>좌석</span><strong>쿠페(4인승), 컨버터블(4인승)</strong></div>
        </div>
        <p className="mx-note">정확한 수치(출력/토크/연비)는 목표 연식·트림 확정 후 표에 채워 넣으세요.</p>
      </section>

      {/* 역사 타임라인 (주요 세대만 요약) */}
      <section className="mx-section">
        <h2 className="mx-h2">타임라인</h2>
        <ol className="mx-timeline">
          <li><time>1964</time><span>1세대 데뷔(1964½). “포니카” 장르 개척.</span></li>
          <li><time>1969</time><span>고성능 트림 확장(예: Mach 1 등).</span></li>
          <li><time>1979</time><span>Fox-body 세대. 경량화/연비 이슈 대응.</span></li>
          <li><time>2005</time><span>레트로 디자인 회귀(S197), 머스탱 아이콘 재정의.</span></li>
          <li><time>2015</time><span>글로벌 전략(S550), 독립식 후륜 서스펜션 도입.</span></li>
          <li><time>2024~</time><span>최신 세대(S650) 전자화/주행 보조·실내 UX 강화.</span></li>
        </ol>
      </section>

      {/* 갤러리(이미지는 public에 넣어 사용) */}
      <section className="mx-section">
        <h2 className="mx-h2">갤러리</h2>
        <div className="mx-gallery">
          <img src="/mustang/mustangboss429.jpg" alt="Mustang boss429" />
        </div>
        <p className="mx-note">Mustang boss429</p>
      </section>

      {/* FAQ */}
      <section className="mx-section">
        <h2 className="mx-h2">FAQ</h2>
        <details className="mx-faq">
          <summary>머슬카 vs 포니카 차이는?</summary>
          <p>머슬카는 대배기량·직선 가속 지향이 뿌리, 포니카는 합리적 가격의 스포티 스타일을 강조합니다. 머스탱은 포니카의 대표지만, 고성능 트림은 머슬카적 성향도 갖습니다.</p>
        </details>
        <details className="mx-faq">
          <summary>어떤 트림을 골라야 해?</summary>
          <p>일상 겸용이면 I4 터보(연비/보험료 유리), 사운드·출력을 중시하면 V8. 주행 성향(서킷/와인딩/출퇴근)에 맞춰 브레이크/서스펜션 패키지 고려가 좋습니다.</p>
        </details>
      </section>
    </main>
  );
}
