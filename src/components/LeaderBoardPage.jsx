import StatCards from "./StatCards";
import LeaderBoardTable from "./LeaderBoardTable";

export default function LeaderboardPage() {
  return (
    <div className="leaderboardpage-root">
      <div className="leaderboardpage-container">
        <StatCards />
        <LeaderBoardTable />
      </div>
    </div>
  );
}


