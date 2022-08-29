import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { DAYS } from "../../constants";
import { useGetData } from "../../hooks/useGetData";

export const UserSessionsMeanChart = ({ id }) => {
  const { data, isLoading } = useGetData(id, "average-sessions");

  if (isLoading) {
    return <></>;
  }

  return (
    <div style={{ position: "relative" }}>
      <h2 style={{ position: 'absolute', top: 15, left: 35, width: '57%', lineHeight: '24px', zIndex: 10, fontSize: 15, fontWeight: 500, color: 'white', opacity: 0.8, }}>Durée moyenne des sessions</h2>
      <LineChart
        width={258}
        height={263}
        data={data.sessions}
        style={{ backgroundColor: 'red', borderRadius: "5px" }}
        margin={{
          left: 5,
          top: 5,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis padding={{ left: 10, right: 15 }} dataKey="day" tickFormatter={formatTicks} tick={{ stroke: "white", strokeWidth: 1, fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis tick={false} axisLine={false} tickLine={false} tickSize={0} hide={true} domain={[0, dataMax => dataMax + 60]} />
        <Tooltip content={<RenderTooltip />} />
        <Line type="monotone" dataKey="sessionLength" strokeWidth={2} stroke="white" dot={false} activeDot={{ stroke: "white", r: 4, fill: "white" }} />
      </LineChart>
    </div>
  );
}


const formatTicks = (value) => DAYS[value - 1];

const RenderTooltip = (props) => {
  if (props.active) {
    return (
      <div style={{ padding: '1px 10px', backgroundColor: 'white', color: 'black' }}>
        <p style={{ fontSize: 8, fontWeight: 500 }}>{props.payload[0].value} min</p>
      </div>
    )
  }

  return null;
}