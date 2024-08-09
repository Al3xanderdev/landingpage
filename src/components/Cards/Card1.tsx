import { title } from "process";
import React from "react";
import intro_pic from "../res/photo_5307727967901837939_y.jpg"
import cards_pic from "../res/photo_5307727967901837963_y.jpg"
import people_pic from "../res/photo_5307727967901837960_y.jpg"

interface Props {
  title: string
}

const Card1 = () => {
  return (
    <div className="main">
      <div className="block1">
        <img className="block1_1" src={intro_pic} alt="" />
        <div className="block1_2">
          <div className="block1_2_inner">
          Здесь также отображается основная начальная информация и все изменения и задачи на сегодня.
          </div>
        </div>
      </div>
      <div className="block2">
        <div className="block2_1">
          <div className="block2_1_inner">
          Этот блок представляет собой основной экран, где пользователи могут видеть общий прогресс проекта, описание подрядчиков и компаний, связанных с проектом.
          </div>
        </div>
        <img className="block2_2" src={cards_pic} alt=""/>
      </div>
          
      <img className="block3" src={people_pic} alt=""/>
        
    </div>
  )
}

export default Card1;