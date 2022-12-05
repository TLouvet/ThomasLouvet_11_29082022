import { Pie, Cell, Legend } from 'recharts';
import { PIE_COLORS } from '../../constants';
import PropTypes from 'prop-types';
import { formatData } from './utils';
import { RenderLegend } from './RenderLegend';
import {
  StyledContainer,
  StyledPieChart,
  StyledTitle,
} from './UserGoalsPieChart.styles';

/**
 * @param {number} score
 * @returns
 */
export const UserGoalsPieChart = ({ score }) => {
  if (!score) {
    return null;
  }
  const data = formatData(score);

  return (
    <StyledContainer>
      <StyledTitle>Score</StyledTitle>
      <StyledPieChart width={258} height={263}>
        <Pie
          data={data}
          cx={130}
          cy={120}
          startAngle={90}
          endAngle={90 + 360}
          innerRadius={70}
          outerRadius={80}
          dataKey="value"
          fill="white"
        >
          {(data || []).map((_, index) => (
            <Cell key={`pie-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          layout="vertical"
          wrapperStyle={{ textAlign: 'center', width: '25%' }}
          content={<RenderLegend score={score} />}
        />
      </StyledPieChart>
    </StyledContainer>
  );
};

UserGoalsPieChart.propTypes = {
  score: PropTypes.number.isRequired,
};
