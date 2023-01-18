import classes from "./EmploymentStage.module.css";
import List from "./List";
import Tags from "./Tags";

const EmploymentStage = (props) => {
    return (
        <div className={classes["employment-stage"]}>
          <div className={classes.header}>
            <div className={classes.company}>{props.data.company}</div>
            <div className={classes.dates}>
              {props.data["start-date"]} — {props.data["end-date"]}
            </div>
          </div>
          <div className={classes.position}>{props.data.position}</div>
          <p className={classes.description}>{props.data.description}</p>
          {props.data["responsibilities"] && (
            <div>
              Responsibilities:
              <List items={props.data["responsibilities"]} />
            </div>
          )}
          {props.data.tags && <Tags items={props.data.tags} />}
        </div>
      );
};

export default EmploymentStage;
