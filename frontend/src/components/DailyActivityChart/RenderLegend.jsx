import { APP_TEXT } from "../../constants"
import { StyledBlackPoint, StyledDataContainer, StyledGraphTitle, StyledLegendContainer, StyledLegendText, StyledRedPoint } from "./DailyActivityChart.styles"

export const RenderLegend = () => {
  return (
    <StyledLegendContainer>
      <StyledGraphTitle>{APP_TEXT['barChart']['title']}</StyledGraphTitle>
      <StyledDataContainer>
        <StyledBlackPoint />
        <StyledLegendText>{APP_TEXT['barChart']['weight']}</StyledLegendText>
        <StyledRedPoint />
        <StyledLegendText>{APP_TEXT['barChart']['calories']}</StyledLegendText>
      </StyledDataContainer>
    </StyledLegendContainer>
  )
}