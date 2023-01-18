import classes from "./VisitCard.module.css";

const VisitCard = (props) => {
  return <div className={classes["visit-card"]}>
  <div className={classes.photo}>
      <img src={props.photo} alt="userphoto"/>
  </div>
  <div className="name">
      <div className={classes["first-name"]}>
          {props.data["first-name"]}
      </div>
      <div className={classes["last-name"]}>
          {props.data["last-name"]}
      </div>
      <div className={classes["position"]}>
          {props.data.position}
      </div>
  </div>
</div>;
};

export default VisitCard;
