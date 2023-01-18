import classes from "./List.module.css";

const List = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
