import { PieChart } from 'recharts';
import styled from 'styled-components';

export const StyledLegend = styled.span`
	color: rgba(116, 121, 140, 1);
	font-weight: 500;
	font-size: 16px;
`;

export const StyledLegendNumber = styled.span`
	color: rgba(40, 45, 48, 1);
	font-size: 26px;
	font-weight: 700;
`;

export const StyledPieChart = styled(PieChart)`
	background-color: #fbfbfb;
	position: absolute !important;
	top: 0;
`;

export const StyledTitle = styled.p`
	margin: 0;
	z-index: 20;
	left: 25px;
	top: 25px;
	font-size: 15px;
	font-weight: 500;
	position: absolute;
`;

export const StyledContainer = styled.div`
	position: relative;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
`;
