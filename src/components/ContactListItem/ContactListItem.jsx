import PropTypes from 'prop-types';

import { ListItem, Button } from './ContactListItem.styled';

const ContactListItem = ({ name, number, id, onDelete, idx }) => {

    return (
        <ListItem key={id}>
            <div>{idx + 1}</div>
            {name}: {number}
            <Button onClick={() => onDelete(id)}>delete</Button>
        </ListItem>
    );
};



ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    idx: PropTypes.number.isRequired
};

export default ContactListItem;