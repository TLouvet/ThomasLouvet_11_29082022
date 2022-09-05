import { StyledTooltipContainer, StyledTooltipValue } from "./UserSessionsMeanChart.styles";

/**
 * @param {TooltipProps} props 
 * @returns 
 */
export const RenderTooltip = (props) => {
  if (!props.active) {
    return null;
  }

  return (
    <StyledTooltipContainer >
      <StyledTooltipValue>
        {props.payload[0].value} min
      </StyledTooltipValue>
    </StyledTooltipContainer>
  );

};