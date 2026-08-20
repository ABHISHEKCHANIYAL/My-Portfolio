import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application (BCA)</h4>
                <h5>Indira Gandhi National Open University - Haldwani, Uttarakhand</h5>
              </div>
              <h3>2021 – 2024</h3>
            </div>
            <p>
              Completed undergraduate studies in Computer Applications with a focus on core software concepts, database systems, and data analysis practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Top 5% Performer – Physics Wallah Masterclass</h4>
                <h5>Physics Wallah</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Delivered a highly-rated, complete e-commerce application simulating a real online platform, earning recognition as a top 5 percent performer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Trainee – BI Analyst</h4>
                <h5>K2 Ventures</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working with the BI team to support data-driven decision making. Utilizing SQL, Excel, Power BI, and Python for reporting, interactive dashboard development, and API-based automated data collection pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
