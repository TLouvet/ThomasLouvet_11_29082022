import { BarChart } from 'recharts';
import styled from 'styled-components';

export const StyledBarChart = styled(BarChart)`
	background-color: #fbfbfb;
	border-radius: 5px;
`;

export const StyledTooltipContainer = styled.div`
  width: 40px;
  background-color: red;
  color: white;
  text-align: center;
  padding: 3px 10px;
`;

export const StyledTooltipText = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const StyledLegendContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

export const StyledDataContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledGraphTitle = styled.p`
  font-size: 15px;
  color: #20253A;
  font-weight: 500;
`;

export const StyledBlackPoint = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: #282D30;
  margin-right: 10px; 
`;

export const StyledRedPoint = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: #E60000;
  margin-right: 10px; 
  margin-left: 30px;
`;

export const StyledLegendText = styled.p`
  margin: 0;
  color: #74798C;
  font-size: 14px;
`;