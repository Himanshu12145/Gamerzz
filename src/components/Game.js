import React from "react"
// Styling n Animation
import styled from "styled-components"
import { motion } from "framer-motion"
// Redux
import { useDispatch } from "react-redux"
import { loadDetail } from "../actions/detailAction"
import { Link } from "react-router-dom"
import { smallImage } from "../util"
import { popup } from "../animation"

const Game = ({ name, released, image, id }) => {
  const StringPathId = id.toString()
  // Load Detail Handler
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden"
    dispatch(loadDetail(id))
  }
  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={StringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${StringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${StringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  background-color: #fff;
`

export default Game
