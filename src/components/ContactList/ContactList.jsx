import PropTypes from 'prop-types';
import {List, Item, Button} from './ContactList.styled'

function ContactList ({visibleContacts, handleDelete}) {
    return (
        <List>
            {visibleContacts.map(({id, number, name}) => {
                return <Item key={id}>
                    {name}: {number}
                    <Button type="button" key={id} onClick={() => handleDelete(id)}>Delete</Button>
                </Item>
            }
            )}
        </List>
    );
}

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired
}

export default ContactList ;