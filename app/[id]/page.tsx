import dayjs from "dayjs"
import {GiCrossMark} from "react-icons/gi"
import { Match, Tournament } from "../page";

async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://duel-me-esports-api.herokuapp.com/${params.id}`,
    { next: { revalidate: 30 } },
  );

  const data : Tournament = await res.json();

  return data;
}

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}){
  const {Matches} = await fetchData(params);
  return (
    <>
    
    {Matches.map(({startedAt, matchesTeam }) => {
      return(
        <div className='container'>
          <p className="title">{dayjs(startedAt).format('DD/MM/YYYY - HH:mm')}</p>
          <div className='container-match'>
            <div className="container-team" >
              <p className="title">{matchesTeam[0].team.name.toUpperCase()}</p>
              <img
                src={matchesTeam[0].team.logo}
              />
            </div>
            <div className="odds">
              <p className="title">{matchesTeam[0].odd}</p>
              <div className ="icon-wrapper">
                <GiCrossMark />
              </div>
              <p className="title">{matchesTeam[1].odd}</p>
            </div>
            <div className="container-team">
              <p className="title">{matchesTeam[1].team.name.toUpperCase()}</p>
              <img
                src={matchesTeam[1].team.logo}
              />
            </div>
          </div>
          <button className="buttons">
              Crie um duelo!
          </button>
        </div>
      )
    })}
      
    
    </>
  )
}