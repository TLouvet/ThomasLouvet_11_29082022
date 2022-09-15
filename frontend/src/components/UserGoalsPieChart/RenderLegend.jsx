import { StyledLegend, StyledLegendNumber } from './UserGoalsPieChart.styles';
import PropTypes from 'prop-types';
import { APP_TEXT } from '../../constants';

/**
 * @param {number} score 
 * @returns 
 */
export const RenderLegend = ({ score }) => (
  <StyledLegend>
    <StyledLegendNumber>{score * 100}{APP_TEXT['units']['percent']}</StyledLegendNumber> {APP_TEXT['pieChart']['legend']}
  </StyledLegend>
);

RenderLegend.propTypes = {
  score: PropTypes.number.isRequired,
};