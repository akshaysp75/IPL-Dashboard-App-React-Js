// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const camelCaseData = {
    id: latestMatchDetails.id,
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = camelCaseData

  return (
    <li className="latestMatch-container">
      <div className=" logo-nameDate-container">
        <div className="name-date-container">
          <p className="heading-style">{competingTeam}</p>
          <p className="heading-style">{date}</p>
          <p className="para-style">{venue}</p>
          <p className="para-style">{result}</p>
        </div>
        <img
          className="logo-image"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="innings-info-container">
        <p className="inningStyle">FirstInnings</p>
        <p className="inningStyle">{firstInnings}</p>
        <p className="inningStyle">SecondInnings</p>
        <p className="inningStyle">{secondInnings}</p>
        <p className="inningStyle">ManOfTheMatch</p>
        <p className="inningStyle">{manOfTheMatch}</p>
        <p className="inningStyle">Umpires</p>
        <p className="inningStyle">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
