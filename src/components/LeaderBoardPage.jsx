import StatCards from "./StatCards";
import LeaderBoardTable from "./LeaderBoardTable";

export default function LeaderboardPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl px-6">
        <div className="mt-10 mb-10">
          <StatCards />
        </div>
        <LeaderBoardTable />
      </div>
    </div>
  );
}


