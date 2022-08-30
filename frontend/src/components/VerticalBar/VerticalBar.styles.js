import styled from 'styled-components';

export const StyledAside = styled.aside`
	background-color: #020203;
	padding: 0px 25px;
	position: relative;
	left: 0;
	top: 0;
	width: 65px;
	padding-bottom: 25px;
`;

export const StyledTextContainer = styled.div`
	transform: rotate(180deg);
	display: flex;
	justify-content: center;
`;

export const StyledText = styled.p`
	writing-mode: vertical-lr;
	color: white;
	font-size: 12;
`;

export const StyledIconsContainer = styled.div`
	margin-top: 20vh;
	margin-bottom: 150px;
`;

export const StyledImageContainer = styled.div`
	width: 64px;
	height: 64px;
	background-color: white;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	cursor: pointer;
`;
