import { DailyNeedCard } from '../DailyNeedCard/DailyNeedCard';
import { StyledSection } from './Keyneeds.style';
import { formatData } from './utils';

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

// TODO -- Add Proptypes
