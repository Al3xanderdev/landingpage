import { title } from "process";
import React from "react";
import intro_pic from "../res/photo_5307727967901838112_y.jpg"
import cards_pic from "../res/photo_5307727967901838164_y.jpg"
import people_pic from "../res/photo_5307727967901838168_x.jpg"
import screenshot from "../res/photo_5312344018362949934_y.jpg"

interface Props {
  title: string
}

const Card2 = () => {
  return (
    <div className="div">
      <div className="main">
        <div className="block1">
          <img className="block1_1" src={intro_pic} alt="" />
          <div className="block1_2_2">
            <div className="block1_2_2_inner">
            Этот модуль предоставляет интуитивно понятный интерфейс для создания, назначения и отслеживания задач.
            </div>
          </div>
        </div>
        <div className="block2">
          <div className="block2_1">
            <div className="block2_1_inner">
            В блоке «Этапы» пользователи смогут эффективно управлять своими проектами, используя такие функции, как диаграммы Ганта, канбан-доски и детальные таблицы задач.
            </div>
          </div>
          <img className="block2_2" src={cards_pic} alt=""/>
        </div>
            
        <img className="block3" src={people_pic} alt=""/>
          
      </div>
      <img className="screenshot" src={screenshot} alt="" />
    </div>
  )
}

export default Card2;