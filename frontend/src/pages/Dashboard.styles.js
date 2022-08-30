import styled from 'styled-components';

export const StyledMain = styled.main`
	display: flex;
	@media screen and (min-height: 1000px) {
		position: absolute;
		top: 93px;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;

export const StyledSmallChartsContainer = styled.div`
	display: grid;
	column-gap: 30px;
	grid-template-columns: repeat(3, 260px);
	margin-top: 30px;
	margin-bottom: 50px;
	@media screen and (max-width: 1200px) {
		margin-bottom: 0;
	}
`;
