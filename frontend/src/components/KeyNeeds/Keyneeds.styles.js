import styled from 'styled-components';

export const StyledSection = styled.section`
	display: flex;
	justify-content: space-around;
	@media screen and (min-width: 1200px) {
		flex-direction: column;
	}
`;
