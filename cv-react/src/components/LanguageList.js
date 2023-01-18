import classes from "./LanguageList.module.css";

const LanguageList = (props) => {
  return (
    <ul className={classes["language-list"]}>
      {props.items.map((item, idx) => (
        <li key={idx} className={classes.language}>
          <div className={classes.name}>{item.name}</div>
          <div>{item.level}</div>
        </li>
      ))}
    </ul>
  );
};

export default LanguageList;
