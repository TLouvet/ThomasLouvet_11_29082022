import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { VerticalBar } from '../components/VerticalBar';
import { useGetData } from '../hooks/useGetData';
import { UserPerformanceChart } from '../components/UserPerformanceChart/UserPerformanceChart';
import { DailyActivityChart } from '../components/DailyActivityChart';
import { UserGoalsPieChart } from '../components/UserGoalsPieChart';
import { UserSessionsMeanChart } from '../components/UserSessionsMeanChart';

import './style.css';
import { KeyNeeds } from '../components/KeyNeeds';
import { StyledMain, StyledSmallChartsContainer } from './Dashboard.styles';

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
				<div id="eheheh" style={{ paddingLeft: '100px', width: '100%' }}>
					<div style={{ marginBottom: '50px' }}>
						<h1 style={{ fontSize: '48px', marginBottom: '40px' }}>
							Bonjour{' '}
							{<span style={{ color: '#E60000' }}>{user?.userInfos?.firstName}</span>}
						</h1>
						<p style={{ fontSize: '18px', marginTop: 0 }}>
							Félicitation ! Vous avez explosé vos objectifs hier 👏
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
						}}
					>
						<section id="graphs" style={{ marginRight: 30 }}>
							<DailyActivityChart id={id} />
							<StyledSmallChartsContainer>
								<UserSessionsMeanChart id={id} />
								<UserPerformanceChart id={id} />
								<UserGoalsPieChart score={goodScore} />
							</StyledSmallChartsContainer>
						</section>
						<KeyNeeds data={user?.keyData} />
					</div>
				</div>
			</StyledMain>
		</>
	);
};
