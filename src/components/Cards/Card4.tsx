import { title } from "process";
import React from "react";
import intro_pic from "../res/photo_5307727967901838182_x.jpg"
import cards_pic from "../res/photo_5307727967901838190_x.jpg"
import people_pic from "../res/photo_5307727967901838192_y.jpg"

interface Props {
  title: string
}

const Card4 = () => {
  return (
    <div className="main">
      <div className="block1">
        <img className="block1_1" src={intro_pic} alt="" />
        <div className="block1_2_2">
          <div className="block1_2_4_inner">
          Блок "Коммуникация" в Ellipse предназначен для эффективного взаимодействия между участниками проекта.
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="block2_1_4">
          <div className="block2_1_inner">
          Он включает в себя все необходимые инструменты для общения, обмена информацией и совместной работы, что делает процесс управления проектами более прозрачным и организованным.
          </div>
        </div>
        <img className="block2_2" src={cards_pic} alt=""/>
      </div>
          
      <img className="block3" src={people_pic} alt=""/>
        
    </div>
  )
}

export default Card4;