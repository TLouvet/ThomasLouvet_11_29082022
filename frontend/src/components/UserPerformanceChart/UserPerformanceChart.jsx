import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useGetData } from '../../hooks/useGetData';
import PropTypes from 'prop-types';

/**
 * @param {string} id 
 * @returns 
 */
export const UserPerformanceChart = ({ id }) => {
  const { data: dataset, isLoading } = useGetData(id, "performance");
  const categories = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
  const data = (dataset?.data || []).map((entry, index) => ({ value: entry.value, kind: categories[index] }));
  const tickStyle = { stroke: 'white', fill: 'white', fontSize: 12, strokeWidth: 0.3 };
  if (isLoading) {
    return <></>;
  }

  return (
    <RadarChart
      cx={130}
      cy={130}
      outerRadius={"70%"}
      width={258}
      height={263}
      data={data}
      style={{ backgroundColor: '#282D30', borderRadius: "5px" }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" tick={tickStyle} axisLine={false} />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#8884d8"
        fill="#FF0101B2"
        fillOpacity={0.9}
      />
    </RadarChart>
  );
}

UserPerformanceChart.propTypes = {
  id: PropTypes.string.isRequired
}