import { connect } from 'react-redux';
import { thunkSearchMovie } from './search_bar-thunks';
import SearchBar from './search_bar-component';

export default connect(null, { thunkSearchMovie })(SearchBar);
