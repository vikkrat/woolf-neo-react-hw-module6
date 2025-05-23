import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filters.name);

  return (
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={e => dispatch(changeFilter(e.target.value))}
      placeholder="Пошук контактів"
    />
  );
}
