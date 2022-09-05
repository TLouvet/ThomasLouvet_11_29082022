import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useGetData } from '../../hooks/useGetData';
import PropTypes from 'prop-types';
import { RADAR_CATEGORIES } from '../../constants';

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

  if (isLoading) {
    return null;
  }

  return (
    <RadarChart
      cx={130}
      cy={130}
      outerRadius={'70%'}
      width={258}
      height={263}
      data={data}
      style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" tick={{
        stroke: 'white',
        fill: 'white',
        fontSize: 12,
        strokeWidth: 0.3,
      }} axisLine={false} />
      <Radar dataKey="value" stroke="#8884d8" fill="#FF0101B2" fillOpacity={0.9} />
    </RadarChart>
  );
};

UserPerformanceChart.propTypes = {
  id: PropTypes.string.isRequired,
};
