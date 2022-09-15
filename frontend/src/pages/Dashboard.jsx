import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { VerticalBar } from '../components/VerticalBar';
import { useGetData } from '../hooks/useGetData';
import { UserPerformanceChart } from '../components/UserPerformanceChart';
import { DailyActivityChart } from '../components/DailyActivityChart';
import { UserGoalsPieChart } from '../components/UserGoalsPieChart';
import { UserSessionsMeanChart } from '../components/UserSessionsMeanChart';

import { KeyNeeds } from '../components/KeyNeeds';
import { StyledGraphSection, StyledMain, StyledMainTitle, StyledRightBottomPart, StyledRightPartContainer, StyledRightUpperPart, StyledSmallChartsContainer, StyledUserName, StyledWelcomeSentence } from './Dashboard.styles';

export const Dashboard = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useGetData(id);
  const goodScore = user?.score || user?.todayScore; // Data has different format between different users

  if (!id || isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Header id={id} />
      <StyledMain>
        <VerticalBar />
        <StyledRightPartContainer>
          <StyledRightUpperPart>
            <StyledMainTitle>
              Bonjour {<StyledUserName>{user?.userInfos?.firstName}</StyledUserName>}
            </StyledMainTitle>
            <StyledWelcomeSentence>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </StyledWelcomeSentence>
          </StyledRightUpperPart>
          <StyledRightBottomPart>
            <StyledGraphSection key='graphs'>
              <DailyActivityChart id={id} />
              <StyledSmallChartsContainer>
                <UserSessionsMeanChart id={id} />
                <UserPerformanceChart id={id} />
                <UserGoalsPieChart score={goodScore} />
              </StyledSmallChartsContainer>
            </StyledGraphSection>
            <KeyNeeds data={user?.keyData} />
          </StyledRightBottomPart>
        </StyledRightPartContainer>
      </StyledMain>
    </>
  );
};
