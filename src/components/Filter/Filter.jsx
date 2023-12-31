import {
  StyledWrap,
  StyledDropdown,
  StyledFilterLabel,
  StyledLink,
} from './Fitler.styled';
import { BsArrowLeftCircle } from 'react-icons/bs';

export const Filter = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
    localStorage.setItem('filter', event.target.value);
  };
  return (
    <StyledWrap>
      <StyledLink to="/">
        <BsArrowLeftCircle />
        Back home
      </StyledLink>
      <div>
        <StyledFilterLabel>
          Filter
          <StyledDropdown
            value={localStorage.getItem('filter') || 'showAll'}
            onChange={handleChange}
          >
            <option value="showAll">Show All</option>

            <option value="follow">Follow</option>

            <option value="following">Following</option>
          </StyledDropdown>
        </StyledFilterLabel>
      </div>
    </StyledWrap>
  );
};
