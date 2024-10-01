import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts }) {
  return (
    <ul className={css.container}>
      {contacts.map((contact) => {
        return (
          <li className={css.cardContainer} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
}
