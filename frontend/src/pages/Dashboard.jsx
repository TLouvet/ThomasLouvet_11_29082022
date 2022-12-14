import { Header } from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { VerticalBar } from '../components/VerticalBar';
import { useGetData } from '../services/useGetData';
import { UserPerformanceChart } from '../components/UserPerformanceChart';
import { DailyActivityChart } from '../components/DailyActivityChart';
import { UserGoalsPieChart } from '../components/UserGoalsPieChart';
import { UserSessionsMeanChart } from '../components/UserSessionsMeanChart';

import { KeyNeeds } from '../components/KeyNeeds';
import { StyledGraphSection, StyledMain, StyledMainTitle, StyledRightBottomPart, StyledRightPartContainer, StyledRightUpperPart, StyledSmallChartsContainer, StyledUserName, StyledWelcomeSentence } from './Dashboard.styles';
import { APP_TEXT } from '../constants';

export const Dashboard = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useGetData(id);
  const goodScore = user?.score || user?.todayScore; // Data has different format between different users
  const navigate = useNavigate();
  if (!id || isLoading) {
    return <div></div>;
  } else if (!user?.id) {
    navigate('/404');
  }

  return (
    <>
      <Header id={id} />
      <StyledMain>
        <VerticalBar />
        <StyledRightPartContainer>
          <StyledRightUpperPart>
            <StyledMainTitle>{APP_TEXT["hello"]} {<StyledUserName>{user?.userInfos?.firstName}</StyledUserName>}</StyledMainTitle>
            <StyledWelcomeSentence>{APP_TEXT["welcome"]}</StyledWelcomeSentence>
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
