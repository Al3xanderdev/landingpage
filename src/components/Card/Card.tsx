import { title } from "process";
import React from "react";

interface Props {
  title: string
}

const Card = ({title}: Props) => {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  )
}

export default Card;