// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props

  const camelCaseData = {
    id: recentMatch.id,
    umpires: recentMatch.umpires,
    result: recentMatch.result,
    manOfTheMatch: recentMatch.man_of_the_match,
    date: recentMatch.date,
    venue: recentMatch.venue,
    competingTeam: recentMatch.competing_team,
    competingTeamLogo: recentMatch.competing_team_logo,
    firstInnings: recentMatch.first_innings,
    secondInnings: recentMatch.second_innings,
    matchStatus: recentMatch.match_status,
  }
  const {result, competingTeam, competingTeamLogo, matchStatus} = camelCaseData
  const wonLost = matchStatus === 'Won' ? 'match-won-style' : 'match-lost-style'
  return (
    <li className="MatchCard-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo-img"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={wonLost}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
