import PropTypes from 'prop-types';
import {Input} from './Filter.styled'

function Filter({ value, handleChange }) {
    return (
        <label>
            Find contacts by name
            <Input
            type="text"
            name="filter"
            value={value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => handleChange(e)}
            />
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Filter ;