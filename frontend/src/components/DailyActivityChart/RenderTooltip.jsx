import { APP_TEXT } from "../../constants";
import { StyledTooltipContainer, StyledTooltipText } from "./DailyActivityChart.styles";

/**
 * @param {TooltipProps} props 
 * @returns 
 */
export const RenderTooltip = (props) => {
  if (!props.active) {
    return null;
  }

  return (
    <StyledTooltipContainer>
      <StyledTooltipText>{props.payload[0].value}{APP_TEXT['units']['kg']}</StyledTooltipText>
      <StyledTooltipText>{props.payload[1].value}{APP_TEXT['units']['kcal']}</StyledTooltipText>
    </StyledTooltipContainer>
  );
}
