import {
	StyledCardContainer,
	StyledImageContainer,
	StyledName,
	StyledValue,
} from './DailyNeedCard.style';

export const DailyNeedCard = ({ image, background, value, name }) => {
	return (
		<StyledCardContainer>
			<StyledImageContainer background={background}>
				<img src={image} alt="" />
			</StyledImageContainer>
			<div>
				<StyledValue>{value}</StyledValue>
				<StyledName>{name}</StyledName>
			</div>
		</StyledCardContainer>
	);
};
