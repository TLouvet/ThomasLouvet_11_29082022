import { DailyNeedCard } from '../DailyNeedCard/DailyNeedCard';
import { StyledSection } from './Keyneeds.styles';
import { formatData } from './utils';
import PropTypes from 'prop-types';

/**
 * @param {{
 *    calorieCount: number,
 *    proteinCount: number,
 *    carbohydrateCount: number,
 *    lipidCount: number
 * }} data
 * @returns
 */
export const KeyNeeds = ({ data }) => {
  const cards = formatData(data);

  return (
    <StyledSection>
      {cards.map((card) => (
        <DailyNeedCard
          key={card.name}
          image={card.image}
          background={card.background}
          value={card.value}
          name={card.name}
        />
      ))}
    </StyledSection>
  );
};

KeyNeeds.propTypes = {
  data: PropTypes.exact({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
};
