import { StyledLegend, StyledLegendNumber } from './UserGoalsPieChart.styles';
import PropTypes from 'prop-types';

/**
 * @param {number} score 
 * @returns 
 */
export const RenderLegend = ({ score }) => (
  <StyledLegend>
    <StyledLegendNumber>{score * 100}%</StyledLegendNumber> de votre
    objectif
  </StyledLegend>
);

RenderLegend.propTypes = {
  score: PropTypes.number.isRequired,
};