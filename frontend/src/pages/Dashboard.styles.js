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
  justify-content: space-between;
	margin-top: 30px;
	margin-bottom: 20px;
	@media screen and (max-width: 1200px) {
		margin-bottom: 0;
	}
`;

export const StyledRightPartContainer = styled.div`
  padding-left: 100px; 
  width:100%;
  @media screen and (max-width: 1350px) {
    padding-left: 40px;
  }
`;

export const StyledRightUpperPart = styled.div`
  margin-bottom: 50px;
`;

export const StyledRightBottomPart = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledMainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
`;

export const StyledUserName = styled.span`
  color: #E60000;
`;

export const StyledWelcomeSentence = styled.p`
  font-size: 18px;
  margin-top: 0;
`;

export const StyledGraphSection = styled.section`
  margin-right: 30px;
  min-width: 840px;
  width: 75%;
  @media screen and (max-width: 1199px) {
    width: 95%;
  }
  @media screen and (max-width: 1350px){
    margin: 0;
  }
`;