import { LineChart } from 'recharts';
import styled from 'styled-components';

export const StyledChartTitle = styled.h2`
	position: absolute;
	top: 15px;
	left: 35px;
	width: 57%;
	line-height: 24px;
	z-index: 10;
	font-size: 15px;
	font-weight: 500;
	color: white;
	opacity: 0.8;
`;

export const StyledLineChart = styled(LineChart)`
	background-color: red;
	border-radius: 5px;
`;

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledTooltipContainer = styled.div`
  padding: 1px 10px;
  background-color: white; 
  color: black;
`;

export const StyledTooltipValue = styled.p`
  font-size: 12px;
  font-weight: 500;
`;