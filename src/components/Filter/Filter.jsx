import PropTypes from 'prop-types';
import { Input } from 'components/Filter/Filter.styled';
export default function Filter({ value, onChange }) {
  return (
    <Input
      autoComplete="false"
      onChange={onChange}
      type="name"
      name="filter"
      value={value}
      placeholder="Enter contact name"
    ></Input>
  );
}
Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
