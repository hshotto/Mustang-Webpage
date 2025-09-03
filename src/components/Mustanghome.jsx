import React from "react";
import "./MustangHome.css"; // ⬅ 히어로/Gallery 스타일을 이 파일에서 직접 불러온다.

export default function MustangHome() {
  const gallery = [
    { src: "/mustang/Mustang_Dark_Horse.png",     alt: "2025 Mustang Dark Horse" },
    { src: "/mustang/mustangboss429.jpg", alt: "1969 Mustang Boss 429" },
  ];

  return (
    <>
      {/* HERO: 한 화면 꽉 채우는 배경 + 좌하단 카피 */}
      <section className="fh-hero">
        <div className="fh-veil" />
        <div className="fh-fade" />
        <div className="fh-hero-inner">
          <p className="fh-eyebrow">2025</p>
          <h1 className="fh-title">Mustang®</h1>
          <p className="fh-price">
            Starting at <strong>$31,920</strong><sup>1</sup>
          </p>
          <a className="fh-link" href="#">As Shown Price</a>
          <div className="fh-actions">
            <button className="fh-cta">Search Inventory</button>
          </div>
        </div>
      </section>

      {/* 히어로 아래 컨텐츠 */}
      <main>
        <section className="container">
          <h2 style={{marginTop:0}}>Highlights</h2>
          <ul style={{margin:0, paddingLeft:"1.2em", color:"var(--muted)"}}>
            <li>Iconic V8 option</li>
            <li>RWD + 주행모드</li>
            <li>디지털 콕핏</li>
          </ul>
        </section>

        <section className="container">
          <h2>Gallery</h2>
          <div className="mx-gallery">
            {gallery.map(g => (
              <figure className="mx-shot" key={g.src}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  onError={(e)=>{ e.currentTarget.style.display='none'; }}
                />
                <figcaption>{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
