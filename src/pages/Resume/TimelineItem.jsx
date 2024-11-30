

const TimelineItem = ({ Institution, Title,department,Cgpa, Duration}) => {
    return (
        <li className="timeline-item">
            <h1 style={{ fontSize: "17px" }} className="h4 timeline-item-title">{Institution}</h1>
            <h4 className="timeline-text">{Title}</h4>
            <h4 className="timeline-text">{department}</h4>
            <span className="timeline-text" style={{ color: "white" }}>{Cgpa}</span>
            <span className="timeline-text"style={{ color: "white" }}>{Duration}</span>

        </li>
    );
};

export default TimelineItem;