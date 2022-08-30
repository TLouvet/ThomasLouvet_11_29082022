import styled from 'styled-components';

export const StyledCardContainer = styled.div`
	padding: 32px;
	padding-right: 50px;
	background-color: #fbfbfb;
	display: flex;
	align-items: center;
	border-radius: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	@media screen and (max-width: 1350px) {
		padding-left: 0;
	}
`;

export const StyledImageContainer = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 6px;
	background-color: ${(props) => props.background};
	margin-right: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledValue = styled.p`
	font-size: 20px;
	font-weight: 700;
	color: #282d30;
	margin: 0;
`;

export const StyledName = styled.p`
	color: #74798c;
	fontsize: 14px;
	margin: 0;
`;
