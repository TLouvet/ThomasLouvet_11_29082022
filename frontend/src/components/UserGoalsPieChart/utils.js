import { StyledLegend, StyledLegendNumber } from './UserGoalsPieChart.styles';

export const renderLegend = (score) => (
	<StyledLegend>
		<StyledLegendNumber>{Number(score) * 100}%</StyledLegendNumber> de votre
		objectif
	</StyledLegend>
);

/**
 * Pie sectors array
 * @param {number} score
 * @returns {{name: string, value: number}[]}
 */
export const formatData = (score) => [
	{ name: 'score', value: score },
	{ name: 'max', value: 1.0 - score },
];
