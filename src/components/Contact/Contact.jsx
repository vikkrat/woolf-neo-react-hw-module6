import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.item}>
      {contact.name}: {contact.phone}
      <button onClick={handleDelete}>Видалити</button>
    </li>
  );
}
