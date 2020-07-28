import React from 'react'
import Card from '../card/card.component'
import './card-list.style.css'
const Cardlist = (props) => (
    (
        <div className="Cardlist">
           {props.monsterName.map(el => (
               <Card key={el.id} monster={el}/>
           ))}
        </div>
    )
)

export default Cardlist