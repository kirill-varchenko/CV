import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  const item = props.href ? (
    <a href={props.href}>{props.label}</a>
  ) : (
    <span>{props.label}</span>
  );

  return (
    <div className={classes.item}>
      <i className={props.icon}/>
      {item}
    </div>
  );
};

export default ContactItem;
