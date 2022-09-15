import {
  StyledCardContainer,
  StyledImageContainer,
  StyledName,
  StyledValue,
} from './DailyNeedCard.styles';
import PropTypes from 'prop-types';

export const DailyNeedCard = ({ image, background, value, name }) => {
  return (
    <StyledCardContainer>
      <StyledImageContainer background={background}>
        <img src={image} alt="" />
      </StyledImageContainer>
      <div>
        <StyledValue>{value}</StyledValue>
        <StyledName>{name}</StyledName>
      </div>
    </StyledCardContainer>
  );
};

DailyNeedCard.propTypes = {
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};