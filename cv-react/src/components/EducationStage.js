import classes from "./EducationStage.module.css";
import EducationStageDegree from "./EducationStageDegree";

const EducationStage = (props) => {
  return (
    <div className={classes["education-stage"]}>
      <div className={classes.header}>{props.school}</div>
      <div>
        {props.degrees.map((degree, idx) => (
          <EducationStageDegree
            key={idx}
            title={degree.title}
            type={degree.type}
            start={degree["start-year"]}
            end={degree["end-year"]}
            description={degree.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationStage;
