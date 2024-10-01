import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <>
      <div className={css.container}>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      <button type="button">Delete</button>
    </>
  );
}
