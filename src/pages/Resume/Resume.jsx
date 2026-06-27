import { FaBookReader } from "react-icons/fa";
import SkillItem from "./SkillItem";
import TimelineItem from "./TimelineItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience Section */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icone-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <TimelineItem
            Institution="Solutya Pvt. Ltd."
            Title="Designation : Frontend Developer (Intern)"
            Duration=" Duration : September 2024 to Februray 2025"
            department=" Resposibility : Developed web frontends with HTML,CSS,Tailwind CSS and React.js 
                                Built and optimized user-facing features and backend services"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icone-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <TimelineItem
            Institution="American International University of Bangladesh"
            Title="Bachelor of Enginnering(BSc)"
            department=" Department : Computer Science and Engineering"
            Cgpa="Cgpa : 3.73"
            Duration=" Duration :2020-2025"
          />

          <TimelineItem
            Institution="Shaheed Anowar Girls College "
            Title="Higher Secondary Certificate (HSC)"
            department=" Department : Science"
            Cgpa="GPA : 4.42"
            Duration=" Passing Year :2018"
          />

          <TimelineItem
            Institution="Banani Bidyaniketan"
            Title=" Secondary School Certificate (SSC)"
            department=" Department :Science"
            Cgpa="Cgpa : 5.00"
            Duration=" Passing Year :2016"
          />
        </ol>
      </div>

      {/* Skill Section  */}

      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={80} />
          <SkillItem title="CSS" value={70} />
          <SkillItem title="Tailwind Css" value={60} />
          <SkillItem title="React" value={60} />
          <SkillItem title="Javascript" value={70} />
          <SkillItem title="Rest API" value={50} />
          <SkillItem title="Git & GitHub" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
