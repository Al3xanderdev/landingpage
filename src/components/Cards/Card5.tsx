import { title } from "process";
import React from "react";
import intro_pic from "../res/photo_5307727967901838197_x.jpg"
import cards_pic from "../res/photo_5307727967901838200_x.jpg"
import people_pic from "../res/photo_5307727967901838205_x.jpg"
import screenshot from "../res/photo_5312344018362949940_y.jpg"

interface Props {
  title: string
}

const Card5 = () => {
  return (
    <div className="div">
      <div className="main">
        <div className="block1">
          <img className="block1_1" src={intro_pic} alt="" />
          <div className="block1_2">
            <div className="block1_2_inner">
            Обеспечивает прозрачность и контроль над бюджетами, расходами и финансовыми показателями.
            </div>
          </div>
        </div>
        <div className="block2">
          <div className="block2_1">
            <div className="block2_1_inner">
            Блок "Финансы" в Ellipse предоставляет инструменты для управления финансовыми аспектами вашего проекта.
            </div>
          </div>
          <img className="block2_2_2" src={cards_pic} alt=""/>
        </div>
            
        <img className="block3" src={people_pic} alt=""/>
          
      </div>
      <img className="screenshot" src={screenshot} alt="" />
    </div>
  )
}

export default Card5;