import React from "react";
import { consts } from "react-elastic-carousel";

import leftArrow from '../../assets/images/left-arrow.svg'
import rightArrow from '../../assets/images/right-arrow.svg'
import leftArrowBlue from '../../assets/images/left-arrow-blue.svg'
import rightArrowBlue from '../../assets/images/right-arrow-blue.svg'

import './style.css'

export const customArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? leftArrow : rightArrow
  return (
    <button onClick={onClick} disabled={isEdge} className='arrow'>
      <img src={pointer} alt="pointer" />
    </button>
  )
}
export const customArrowBlue = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? leftArrowBlue : rightArrowBlue
  return (
    <button onClick={onClick} disabled={isEdge} className='arrow'>
      <img src={pointer} alt="pointer" />
    </button>
  )
}
