import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
