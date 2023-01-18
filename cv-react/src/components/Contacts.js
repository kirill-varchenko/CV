import ContactItem from "./ContactItem";
import classes from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <div className={classes.contacts}>
      {props.items.map((item, idx) => (
        <ContactItem key={idx} icon={item.icon} href={item.href} label={item.label} />
      ))}
    </div>
  );
};

export default Contacts;
