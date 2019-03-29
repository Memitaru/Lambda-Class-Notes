import React from 'react';
import {Link} from 'react-router-dom';

function routeToAvenger(props, avenger){
  props.history.push(`/avengers/${avenger.id}`)
}

function AvengersList(props) {
    return (
      <div className="characters-list-wrapper">
        {props.avengers.map(avenger => (
                <div className="character-card" key={avenger.id} onClick={() => routeToAvenger(props, avenger)}>
                    <img src={avenger.thumbnail} alt={avenger.name} />
                    <h2>{avenger.name}</h2>
                    <p>({avenger.nickname})</p>
                </div>
        ))}
      </div>
    );
  }
  export default AvengersList;