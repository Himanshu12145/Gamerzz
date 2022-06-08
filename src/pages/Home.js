import React, { useEffect } from "react"
import GameDetail from "../components/GameDetail"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"
// Components
import Game from "../components/Game"
// Styling n Animation
import styled from "styled-components"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { useLocation } from "react-router-dom"
import { fadeIn } from "../animation"
import github from "../img/github.png"

const Home = () => {
  // get the current location
  const location = useLocation()
  const pathId = location.pathname.split("/")[2]

  // FETCH the games
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  // Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  )
  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='switch'>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className='searched'>
            <GamesUI>Searched Games</GamesUI>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <GamesUI>Upcoming Games</GamesUI>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <GamesUI>Popular Games</GamesUI>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <GamesUI>New Games</GamesUI>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
      <Footer>
        Made with ❤ by Himanshu
        <img
          src={github}
          alt='github'
          href='https://github.com/Himanshu12145/Gamerzz'
        />
      </Footer>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
const GamesUI = styled(motion.div)`
  color: #fff;
  font-size: 3.5rem;
  padding: 2rem;
  /* text-align: right; */
  font-family: "Times New Roman", Times, serif;
  font-weight: bolder;
`
const Footer = styled(motion.div)`
  color: #000;
  font-size: 2.1rem;
  padding: 3rem;
  text-align: center;
  /* font-family: "Times New Roman", Times, serif; */
  font-weight: bolder;
  img {
    display: inline;
    padding-left: 0.5rem;
  }
`

export default Home
