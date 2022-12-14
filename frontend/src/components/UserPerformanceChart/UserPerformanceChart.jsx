import { Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import { useGetData } from '../../services/useGetData';
import PropTypes from 'prop-types';
import { RADAR_CATEGORIES } from '../../constants';
import { StyledChart } from './UserPerformanceChart.styles';

/**
 * @param {string} id
 * @returns
 */
export const UserPerformanceChart = ({ id }) => {
  const { data: dataset, isLoading } = useGetData(id, 'performance');
  const data = (dataset?.data || []).map((entry, index) => ({
    value: entry.value,
    kind: RADAR_CATEGORIES[index],
  }));

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <StyledChart
      cx={130}
      cy={130}
      outerRadius={'70%'}
      width={258}
      height={263}
      data={data}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" tick={{
        stroke: 'white',
        fill: 'white',
        fontSize: 12,
        strokeWidth: 0.3,
      }} axisLine={false} />
      <Radar dataKey="value" stroke="#8884d8" fill="#FF0101B2" fillOpacity={0.9} />
    </StyledChart>
  );
};

UserPerformanceChart.propTypes = {
  id: PropTypes.string.isRequired,
};
