import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useGetData } from "../../hooks/useGetData";
import { renderLegend, renderTooltip } from "./utils";

/**
 * @param {string} id 
 * @returns 
 */
export const DailyActivityChart = ({ id }) => {
  const { data: dataset, isLoading } = useGetData(id, "activity");

  if (isLoading) {
    return <></>
  }

  return (
    <ResponsiveContainer width="100%" height={320} key="daily">
      <BarChart
        style={{ backgroundColor: '#FBFBFB', borderRadius: '5px' }}
        data={dataset.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickFormatter={(_, i) => i + 1} />
        <YAxis yAxisId="right" dataKey="kilogram" orientation="right" domain={[dataMin => dataMin - 2, dataMax => dataMax + 2]} />
        <YAxis yAxisId="left" dataKey="calories" hide={true} />
        <Tooltip wrapperStyle={{ background: "blue" }} content={renderTooltip} />
        <Legend verticalAlign="top" align="left" content={renderLegend} />
        <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} margin={{ right: 20 }} />
        <Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}