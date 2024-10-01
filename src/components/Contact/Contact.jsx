import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <div className={css.container}>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
