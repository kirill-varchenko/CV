import classes from "./Tags.module.css";

const Tags = (props) => {
  return (
    <ul className={classes.tags}>
      {props.items.map((tag, idx) => (
        <li key={idx} className={classes.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
