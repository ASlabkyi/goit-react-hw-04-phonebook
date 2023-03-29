import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <Label>
      <p>Find contacts by name</p>
      <Input
        type="tel"
        name="filter"
        value={filter}
        placeholder="Type to search ..."
        onChange={handleFilterChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
