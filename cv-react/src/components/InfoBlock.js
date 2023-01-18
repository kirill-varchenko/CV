import classes from "./InfoBlock.module.css";

const InfoBlock = (props) => {
  return (
    <div className={classes["info-block"]}>
      <h3>{props.header}</h3>
      {props.children}
    </div>
  );
};

export default InfoBlock;
