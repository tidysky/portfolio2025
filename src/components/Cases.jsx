import React from "react";
import MarqueeDivLeft from "./scrollineLeft";

const CASES = [
  {
    number: "01",
    title: "HADDON Online Store",
    titleLines: ["HADDON", "Online Store"],
    largeTitle: true,
    subtitle: "Shopify coding practice",
    tag: "SHOPIFY",
    image: "/cases/haddon-online-store.png",
    imageFit: "contain",
    technology: { name: "Shopify", icon: "shopify" },
    features: ["Responsive online store", "Custom Shopify theme coding"],
    roles: ["Shopify development"],
    href: "http://bathroom-k6y3pjcj.myshopify.com",
  },
  {
    number: "02",
    title: "Outdoor Funiture",
    subtitle: "Shopify coding practice",
    tag: "SHOPIFY",
    image: "/cases/outdoor-funiture-shopify.png",
    imageFit: "contain",
    technology: { name: "Shopify", icon: "shopify" },
    features: ["Responsive online store", "Custom Shopify theme coding"],
    roles: ["Shopify development"],
    href: "http://fasion-v2mmjpdk.myshopify.com",
  },
  {
    number: "03",
    title: "Future Partner",
    subtitle: "A future reading experience.",
    tag: "FULL STACK",
    image: "/cases/future-partner.png",
    imageFit: "contain",
    technology: { name: "Full stack", icon: "fullstack" },
    features: ["Responsive full-stack application", "Users can pay online and view their reports"],
    roles: ["Design", "Full-stack development"],
    href: "https://futurespouse.vercel.app/",
  },
  {
    number: "04",
    title: "Plumber Website",
    subtitle: "Responsive website for a Sydney plumbing service",
    tag: "WORDPRESS",
    image: "/cases/plumber-wordpress.png",
    imageFit: "contain",
    technology: { name: "WordPress", icon: "wordpress" },
    features: ["Responsive service website", "Online booking and quote form"],
    roles: ["Design", "development using WordPress"],
    href: "https://mistyrose-pheasant-784717.hostingersite.com/",
  },
  {
    number: "05",
    title: "PromptPilot",
    subtitle: "An Webpage made by Webflow",
    tag: "AI PRODUCT",
    image: "/cases/promptpilot.jpg",
    technology: { name: "Webflow", icon: "webflow" },
    features: ["Responsive website", "Developed with Webflow"],
    roles: ["Design", "development using Webflow"],
    href: "https://zs-fabulous-site-fc762b.webflow.io/",
  },
  {
    number: "06",
    title: "Weather Forecast",
    subtitle: "Weather forecast application",
    tag: "WEB APP",
    image: "/cases/weather-forecast.jpg",
    technology: { name: "React", icon: "react" },
    features: ["Dynamic weather data", "Responsive interface"],
    roles: ["Front-end development"],
    href: "https://myweatherapp-flame.vercel.app/",
  },
  {
    number: "07",
    title: "Sharing Country",
    subtitle: "Official website of a board game",
    tag: "BOARD GAME",
    image: "/cases/sharing-country.jpg",
    technology: { name: "React", icon: "react" },
    features: ["Responsive website", "Accessible and disability-friendly"],
    roles: ["Design", "Front-end development"],
    href: "https://sharingcountry.vercel.app/",
  },
  {
    number: "08",
    title: "Game Webpage Design",
    subtitle: "Web experiences for different games",
    tag: "UI / UX",
    image: "/cases/game-webpage-design.jpg",
    technology: { name: "Photoshop", icon: "photoshop" },
    features: ["Multiple visual styles", "Dota 2, Saint Seiya, Crossout and more"],
    roles: ["Design"],
    href: "https://www.behance.net/zhengnora",
  },
  {
    number: "09",
    title: "3D Practice Demo",
    subtitle: "An interactive amusement park",
    tag: "THREE.JS",
    image: "/cases/3d-practice-demo.jpg",
    technology: { name: "3D Web", icon: "threejs" },
    features: ["Animated 3D models", "Scroll-controlled camera views"],
    roles: ["Design", "Front-end development", "3D modelling"],
    href: "https://3dpracticedemo.vercel.app/",
  },
];

function CasePlaceholder({ number, title, tag, image, imageFit = "cover" }) {
  if (image) {
    return (
      <div
        className={`case-placeholder case-placeholder-image ${imageFit === "contain" ? "case-placeholder-blended" : ""}`}
        style={imageFit === "contain" ? { "--case-image-url": `url("${image}")` } : undefined}
      >
        <img
          className={`case-project-image ${imageFit === "contain" ? "case-project-image-contain" : ""}`}
          src={image}
          alt={`${title} project preview`}
          width="1200"
          height="920"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="case-placeholder" role="img" aria-label={`${title} project image placeholder`}>
      <span className="case-placeholder-number">{number}</span>
      <div className="case-placeholder-window" aria-hidden="true">
        <div className="case-placeholder-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="case-placeholder-grid">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="case-placeholder-label">
        <span>{tag}</span>
        <strong>PROJECT VISUAL</strong>
      </div>
    </div>
  );
}

function TechIcon({ type }) {
  if (type === "shopify") {
    return (
      <svg viewBox="0 0 34 34" aria-hidden="true" className="tech-icon-shopify">
        <path d="M8 11h18l2 19H6L8 11Z" />
        <path d="M11.5 12V9.5a5.5 5.5 0 0 1 11 0V12" />
        <path d="M20.5 16.5c-1.2-.7-4.6-1.3-4.6 1 0 2.7 5.2 1.9 5.2 5.3 0 3-4.3 3.8-7.1 2.1" />
      </svg>
    );
  }

  if (type === "react") {
    return (
      <svg viewBox="0 0 36 28" aria-hidden="true" className="tech-icon-react">
        <ellipse cx="18" cy="14" rx="16" ry="6" />
        <ellipse cx="18" cy="14" rx="16" ry="6" transform="rotate(60 18 14)" />
        <ellipse cx="18" cy="14" rx="16" ry="6" transform="rotate(120 18 14)" />
        <circle cx="18" cy="14" r="2.7" className="tech-icon-fill" />
      </svg>
    );
  }

  if (type === "figma") {
    return (
      <svg viewBox="0 0 28 32" aria-hidden="true">
        <path d="M4 2h10v10H9a5 5 0 0 1-5-5V2Z" />
        <path d="M14 2h5a5 5 0 0 1 0 10h-5V2Z" />
        <path d="M4 12h10v10H9a5 5 0 0 1-5-5v-5Z" />
        <circle cx="19" cy="17" r="5" />
        <path d="M4 22h10v5a5 5 0 0 1-10 0v-5Z" />
      </svg>
    );
  }

  if (type === "threejs") {
    return (
      <svg viewBox="0 0 34 30" aria-hidden="true" className="tech-icon-threejs">
        <path d="M17 2 31 9.5v11L17 28 3 20.5v-11L17 2Z" />
        <path d="m3 9.5 14 7.5 14-7.5M17 17v11" />
      </svg>
    );
  }

  if (type === "fullstack") {
    return (
      <svg viewBox="0 0 34 30" aria-hidden="true" className="tech-icon-fullstack">
        <path d="m17 3 14 7-14 7L3 10l14-7Z" />
        <path d="m5 15 12 6 12-6M5 21l12 6 12-6" />
      </svg>
    );
  }

  if (type === "photoshop") {
    return (
      <svg viewBox="0 0 34 34" aria-hidden="true" className="tech-icon-photoshop">
        <rect x="3" y="3" width="28" height="28" rx="2" />
        <text x="7" y="23">Ps</text>
      </svg>
    );
  }

  if (type === "wordpress") {
    return (
      <svg viewBox="0 0 34 34" aria-hidden="true" className="tech-icon-wordpress">
        <circle cx="17" cy="17" r="14" />
        <path d="M8.5 10.5h4l4.3 12 3.1-8.3 3.2 8.3 4.4-12h-3.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 38 24" aria-hidden="true" className="tech-icon-webflow">
      <path d="M2 5h8l2.3 7.8L17 5h6.5l2.2 7.5L31 2h7L27.5 22h-7.2L18 14.5 13.4 22H6.2L2 5Z" />
    </svg>
  );
}

function TechBadge({ technology }) {
  return (
    <div className="case-tech-badge" aria-label={`Built with ${technology.name}`}>
      <TechIcon type={technology.icon} />
      <span>{technology.name}</span>
    </div>
  );
}

function formatResponsibilities(roles) {
  if (roles.length === 1) return roles[0];
  if (roles.length === 2) return roles.join(" and ");

  return `${roles.slice(0, -1).join(", ")} and ${roles[roles.length - 1]}`;
}

function CaseCard({ project }) {
  return (
    <a
      className="case-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.title} case study`}
    >
      <article className="case-shell">
        <TechBadge technology={project.technology} />
        <div className="case-shell-inner">
          <CasePlaceholder
            number={project.number}
            title={project.title}
            tag={project.tag}
            image={project.image}
            imageFit={project.imageFit}
          />

          <div className="case-details">
            <div className="case-details-main">
              <h2 className={project.largeTitle ? "case-title-large" : undefined}>
                {project.titleLines
                  ? project.titleLines.map((line) => (
                      <span className="case-title-line" key={line}>{line}</span>
                    ))
                  : project.title}
              </h2>
              <p className="case-subtitle">{project.subtitle}</p>

              <div className="case-feature-block">
                <h3>Features</h3>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <p className="case-responsibilities">
                I am responsible for{" "}
                <strong>{formatResponsibilities(project.roles)}</strong>
              </p>
            </div>

            <div className="case-cta" aria-hidden="true">
              <div className="case-cta-item case-cta-current">
                <span>VIEW CASE</span>
                <span className="case-arrow" />
              </div>
              <div className="case-cta-item case-cta-next">
                <span>OPEN PROJECT</span>
                <span className="case-arrow" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}

export default function Cases() {
  return (
    <section className="thirdScreen min-h-screen w-full flex flex-col relative font-mono">
      <MarqueeDivLeft />
      <div className="case-section flex-1">
        <h1 className="case-section-title font-sans">CASES</h1>

        <div className="stalkimgs case-list">
          {CASES.map((project) => (
            <CaseCard key={project.href} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
