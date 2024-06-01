// Write your code here
// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {blogData} = props
  const {id, teamImageUrl, name} = blogData

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="ipl-card-container">
        <img className="card-image" src={teamImageUrl} alt={name} />
        <p className="card-teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
