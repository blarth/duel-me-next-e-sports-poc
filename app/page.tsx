import dayjs from "dayjs"

import './styles.css';

export interface Team {
  matchId : number,
  teamId : number,
  odd : number,
  team : { name : string, logo : string}
}

export interface Match {
  id : number,
  apiTournamentId : number,
  name : string,
  apiMatchesId : number,
  startedAt : string,
  matchesTeam : Team[]
}

export interface Tournament {
  id : number,
  name : string,
  finishedAt : string,
  Matches : Match[]
}
async function getData() {
    const res = await fetch("https://duel-me-esports-api.herokuapp.com/") 
    const data = await res.json();
    const filteredTournaments = data.filter((tournament : Tournament) => dayjs().isBefore(tournament.finishedAt) )
    return filteredTournaments
  }

export default async function Page(){
  const tournaments = await getData()
  
  return (
  <div className="container">
    <p className="text">Tournaments available</p>
    {tournaments.map((el) => <a href={`${el.id}`}>{el.name}</a>)}
  </div>
    )
}

