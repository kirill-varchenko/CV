import classes from "./EducationStageDegree.module.css";

const EducationStageDegree = (props) => {
  return (
    <div className={classes.degree}>
      <div className={classes.header}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.dates}>
        {props.start} — {props.end}
      </div>
      </div>
      {props.type && <div className={classes.type}>{props.type}</div>}
      {props.description && <div className={classes.description}>{props.description}</div>}
    </div>
  );
};

export default EducationStageDegree;
