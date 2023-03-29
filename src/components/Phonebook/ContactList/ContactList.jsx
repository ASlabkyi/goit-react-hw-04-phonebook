import { ContactEl } from './ContactEl/ContactEl';
import { PropTypes } from 'prop-types';

import { List } from './ContactList.styled';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactEl
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          ></ContactEl>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
