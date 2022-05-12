import React from "react";
import people from "../data/db.json"
import max from 'ml-array-max';

const BestPlayers = ({dataFromParent}) => {
    const myData = [].concat(people)
    .sort((a, b) =>  max(b.scores) >  max(a.scores) ? 1 : -1)
    return ( 
        
        <div>
    {myData.map((item, i) => 
    <>
        <h2 className="scores">TOP {i+1}:</h2>
        <div key={i} style={{ color: 'white'}}> {item.username}, Score: {max(item.scores)} </div>
    </>
    )}
        <div>
  {/*people.filter(person => 
    person.rate > 4000).map(filteredPerson => (
    <li>
      {filteredPerson.username}
    </li>
    ))*/}
    <div>
    {dataFromParent}
    </div>

  
</div>
</div>


     );
}
 
export default BestPlayers ;