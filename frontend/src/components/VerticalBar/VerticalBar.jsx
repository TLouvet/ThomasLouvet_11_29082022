import yoga from '../../assets/yoga.png';
import swim from '../../assets/swim.png';
import cycle from '../../assets/bycicle.png';
import halt from '../../assets/halt.png';
import {
  StyledAside,
  StyledIconsContainer,
  StyledImageContainer,
  StyledText,
  StyledTextContainer,
} from './VerticalBar.styles';
import { APP_TEXT } from '../../constants';

export const VerticalBar = () => {
  const imgs = [yoga, swim, cycle, halt];

  return (
    <StyledAside>
      <StyledIconsContainer>
        {imgs.map((img, i) => (
          <StyledImageContainer key={`nav-icon-${i}`}>
            <img src={img} alt="" />
          </StyledImageContainer>
        ))}
      </StyledIconsContainer>

      <StyledTextContainer>
        <StyledText>{APP_TEXT['copyright']}</StyledText>
      </StyledTextContainer>
    </StyledAside>
  );
};
