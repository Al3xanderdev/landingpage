import { title } from "process";
import React from "react";
import intro_pic from "../res/photo_5307727967901838170_x.jpg"
import cards_pic from "../res/photo_5307727967901838179_x.jpg"
import people_pic from "../res/photo_5307727967901838180_x.jpg"

interface Props {
  title: string
}

const Card3 = () => {
  return (
    <div className="main">
      <div className="block1">
        <img className="block1_1" src={intro_pic} alt="" />
        <div className="block1_2">
          <div className="block1_2_inner">
          Обеспечивает доступ к актуальной информации для всех участников проекта.
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="block2_1">
          <div className="block2_1_inner">
          Блок «Документооборот» обеспечивает централизованное хранение, управление и отслеживание всех документов, связанных с проектом.
          </div>
        </div>
        <img className="block2_2" src={cards_pic} alt=""/>
      </div>
          
      <img className="block3" src={people_pic} alt=""/>
        
    </div>
  )
}

export default Card3;