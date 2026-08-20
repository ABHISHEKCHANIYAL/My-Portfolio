import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      num: "01",
      name: "E-Commerce Data Analysis",
      category: "MySQL, SQL",
      tech: "MySQL, SQL, JOINs, CTEs (WITH), Aggregate Functions",
      image: "/images/1.png",
      link: "https://github.com/ABHISHEKCHANIYAL/E-Commerce-Data-Analysis",
      points: [
        "Solved multiple real-world e-commerce business problems using MySQL to analyze customer, order, product, and sales data.",
        "Developed SQL queries using JOINs, WHERE, CASE statements, GROUP BY, and CTEs to perform detailed data analysis.",
        "Analyzed sales trends, customer behavior, and product performance to generate meaningful business insights."
      ]
    },
    {
      num: "02",
      name: "Customer Shopping Behavior Analysis",
      category: "Python, Pandas, PostgreSQL, Power BI",
      tech: "Python, Pandas, PostgreSQL, SQL, Power BI",
      image: "/images/2.png",
      link: "https://github.com/ABHISHEKCHANIYAL/Customer_behavior_analysis",
      points: [
        "Developed an end-to-end analytics project with data loading, EDA, data cleaning, and preprocessing in Python and Pandas.",
        "Loaded the cleaned dataset into PostgreSQL and performed SQL analysis to identify key sales trends.",
        "Built an interactive Power BI dashboard to visualize key KPIs, customer insights, and purchasing behavior."
      ]
    },
    {
      num: "03",
      name: "Cryptocurrency Market Data Pipeline/Analysis",
      category: "Python, Pandas, REST API, Matplotlib",
      tech: "Python, Pandas, REST API, CSV, Seaborn, Matplotlib",
      image: "/images/3.png",
      link: "https://github.com/ABHISHEKCHANIYAL/Cryptocurrency-Market-Data-Pipeline-Analysis",
      points: [
        "Developed an automated Python pipeline to extract cryptocurrency data from the CoinMarketCap API and store records in CSV.",
        "Analyzed percentage changes across multiple time intervals (1h–90d) and visualized trends with Seaborn and Matplotlib."
      ]
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
                <div style={{ marginTop: "1rem" }}>
                  {project.points.map((point, pIdx) => (
                    <p key={pIdx} style={{ fontSize: "0.9rem", margin: "0.3rem 0", opacity: 0.85, lineHeight: "1.4" }}>
                      • {point}
                    </p>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-link"
                    data-cursor="disable"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
