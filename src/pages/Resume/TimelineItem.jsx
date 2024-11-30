

const TimelineItem = ({ Institution, Title,department,Cgpa, Duration}) => {
    return (
        <li className="timeline-item">
            <h1 className="h4 timeline-item-title">{Institution}</h1>
            <h4 className="timeline-text">{Title}</h4>
            <h4 className="timeline-text">{department}</h4>
            <span style={{ color: "white" }}>{Cgpa}</span>
            <span style={{ color: "white" }}>{Duration}</span>

        </li>
    );
};

export default TimelineItem;