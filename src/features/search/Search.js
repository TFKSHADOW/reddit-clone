import './search.css';
import { useSelector, useDispatch } from 'react-redux';
import {selectSearch, setSearchTerm} from './searchSlice';
import {fetchPost, filterOnSearch} from '../post/postSlice';


export const Search =() => {
  const searchTerm = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const input = event.target.value;
    dispatch(setSearchTerm(input))
    if (input.length > 0) {
      dispatch(filterOnSearch(input))
    } else {
      dispatch(fetchPost())
    }
  }

  return (
    <form className='search'>
      <input type= 'text' id='search' value={searchTerm} onChange={handleOnChange} placeholder= 'Search Topics'/>
    </form>
  )
}