import StatCards from "./StatCards";
import LeaderBoardTable from "./LeaderBoardTable";
import {
  LeaderboardPageWrapper,
  MainArea
} from "../styles/LeaderboardPage.styles";

export default function LeaderboardPage() {
  return (
    <LeaderboardPageWrapper>
      <MainArea>
        <StatCards />
        <LeaderBoardTable />
      </MainArea>
    </LeaderboardPageWrapper>
  );
}
