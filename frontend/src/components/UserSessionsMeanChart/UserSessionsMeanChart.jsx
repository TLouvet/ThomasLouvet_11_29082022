import { useState } from 'react';
import {
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ReferenceArea,
} from 'recharts';
import { DAYS } from '../../constants';
import { useGetData } from '../../hooks/useGetData';
import {
	StyledChartTitle,
	StyledLineChart,
} from './UserSessionsMeanChart.styles';

export const UserSessionsMeanChart = ({ id }) => {
	const { data, isLoading } = useGetData(id, 'average-sessions');
	const [currentX, setCurrentX] = useState(8);

	if (isLoading) {
		return null;
	}

	return (
		<div style={{ position: 'relative' }}>
			<StyledChartTitle>Durée moyenne des sessions</StyledChartTitle>
			<StyledLineChart
				width={258}
				height={263}
				data={data.sessions}
				margin={{ bottom: 5 }}
				onMouseMove={(e) => setCurrentX(e.activeLabel)}
				onMouseLeave={() => setCurrentX(8)}
			>
				<CartesianGrid strokeDasharray="0 1" />
				<XAxis
					padding={{ left: 5, right: 5 }}
					dataKey="day"
					tickFormatter={formatTicks}
					tick={{ stroke: 'white', strokeWidth: 0.2, fontSize: 10 }}
					tickLine={false}
					axisLine={false}
					tickMargin={10}
				/>
				<YAxis
					tick={false}
					axisLine={false}
					tickLine={false}
					tickSize={0}
					hide={true}
					domain={[-10, (dataMax) => dataMax + 60]}
				/>
				<Tooltip content={<RenderTooltip />} />
				<Line
					type="natural"
					dataKey="sessionLength"
					strokeWidth={2}
					stroke="white"
					dot={false}
					activeDot={{ stroke: 'white', r: 4, fill: 'white' }}
				/>
				<ReferenceArea x1={currentX} fill="rgba(150,0,0,0.9)" />
			</StyledLineChart>
		</div>
	);
};

const formatTicks = (value) => DAYS[value - 1];

const RenderTooltip = (props) => {
	if (props.active) {
		return (
			<div
				style={{ padding: '1px 10px', backgroundColor: 'white', color: 'black' }}
			>
				<p style={{ fontSize: 12, fontWeight: 500 }}>
					{props.payload[0].value} min
				</p>
			</div>
		);
	}

	return null;
};
