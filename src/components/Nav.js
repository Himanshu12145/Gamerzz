import React, { useState } from "react"
// Animations
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction"
import { useDispatch } from "react-redux"
import { fadeIn } from "../animation"

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState("")
  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput("")
  }

  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    })
  }

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
        &nbsp;
        <Hello>Gamefolio</Hello>
      </Logo>
      <form className='search'>
        <input
          value={textInput}
          onChange={inputHandler}
          type='text'
          placeholder='Type your favorite Games here'
        />
        <button type='submit' onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  )
}
const StyledNav = styled(motion.nav)`
  padding: 1.4rem 5rem;
  text-align: center;
  input {
    width: 45%;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    /* background-color: black; */
    color: #414141;
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #7691ff;
    color: black;
    font-weight: bolder;
  }
`
const Logo = styled(motion.nav)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 5rem;
    width: 5rem;
  }
`
const Hello = styled(motion.nav)`
  font-size: 5rem;
  font-weight: bolder;
  cursor: pointer;
  font-family: "Times New Roman", Times, serif;

  color: #fff;
`

export default Nav
