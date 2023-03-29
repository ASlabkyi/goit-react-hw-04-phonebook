import { PropTypes } from 'prop-types';

import { ListItem, Name, Number, DeleteButton } from './ContactEl.styled';

export const ContactEl = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <p>
        <Name>{name}</Name>: <Number>{number}</Number>
      </p>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};

ContactEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
