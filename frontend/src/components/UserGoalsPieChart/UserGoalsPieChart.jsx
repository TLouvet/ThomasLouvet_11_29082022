import { PieChart, Pie, Cell, Legend, Label } from "recharts";
import { PIE_COLORS } from "../../constants";
import PropTypes from 'prop-types';

/**
 * @param {number} score 
 * @returns 
 */
export const UserGoalsPieChart = ({ score }) => {
  const data = [
    { name: "score", value: score },
    { name: "max", value: 1.0 - score }
  ];

  const renderLegend = () => <span style={{ color: "rgba(116, 121, 140, 1)", fontWeight: 500, fontSize: 16 }}><span style={{ color: "rgba(40, 45, 48, 1)", fontSize: 26, fontWeight: 700 }}>{Number(score) * 100}%</span> de votre objectif</span>

  return (
    <PieChart width={258} height={263} style={{ backgroundColor: '#FBFBFB' }}>
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
          <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="middle" layout="vertical" wrapperStyle={{ textAlign: 'center', width: "25%" }} content={renderLegend} />
    </PieChart>
  );
}

UserGoalsPieChart.propTypes = {
  score: PropTypes.number.isRequired,
}