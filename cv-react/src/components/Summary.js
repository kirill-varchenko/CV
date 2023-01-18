import classes from "./Summary.module.css";

const Summary = (props) => {
  return <p className={classes["summary"]}>{props.children}</p>;
};

export default Summary;
