import classes from "./Column.module.css";

const Column = (props) => {
  return (
    <div className={classes.column} style={{ width: props.width || "100%" }}>
      {props.children}
    </div>
  );
};

export default Column;
