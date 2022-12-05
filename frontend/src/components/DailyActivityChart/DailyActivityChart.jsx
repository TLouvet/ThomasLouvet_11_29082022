import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useGetData } from '../../services/useGetData';
import { StyledBarChart } from './DailyActivityChart.styles';
import PropTypes from 'prop-types';
import { RenderTooltip } from './RenderTooltip';
import { RenderLegend } from './RenderLegend';

/**
 * @param {string} id
 * @returns
 */
export const DailyActivityChart = ({ id }) => {
  const { data: dataset, isLoading } = useGetData(id, 'activity');

  const barProps = [
    { yAxisId: 'right', dataKey: 'kilogram', fill: '#282D30' },
    { yAxisId: 'left', dataKey: 'calories', fill: '#E60000' },
  ];

  if (isLoading || !dataset.sessions) {
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height={320} key="daily">
      <StyledBarChart
        data={dataset.sessions}
        strokeDasharray="3 3"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barGap={10}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickFormatter={(_, i) => i + 1} />
        <YAxis
          axisLine={false}
          yAxisId="right"
          dataKey="kilogram"
          orientation="right"
          domain={[(dataMin) => dataMin - 3, (dataMax) => dataMax + 4]}
          tickCount={3}
        />
        <YAxis yAxisId="left" dataKey="calories" hide={true} />
        <Tooltip cursor={{ opacity: 0.5 }} content={<RenderTooltip />} />
        <Legend verticalAlign="top" align="left" content={<RenderLegend />} />
        {barProps.map((props, i) => (
          <Bar key={`bar-${i}`} {...props} barSize={8} radius={[5, 5, 0, 0]} />
        ))}
      </StyledBarChart>
    </ResponsiveContainer>
  );
};

DailyActivityChart.propTypes = {
  id: PropTypes.string.isRequired,
};