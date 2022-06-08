// Base Url
const base_url = "https://api.rawg.io/api/";

// Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

const CurrentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();
const CurrentDate = `${CurrentYear}-${CurrentMonth}-${CurrentDay}`;
const lastYear = `${CurrentYear - 1}-${CurrentMonth}-${CurrentDay}`;
const nextYear = `${CurrentYear + 1}-${CurrentMonth}-${CurrentDay}`;

// console.log(CurrentDate);

// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_YOUR_API}&dates=${lastYear},${CurrentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_YOUR_API}&dates=${CurrentDate},${nextYear}&ordering=-added&page_size=20`;
const new_games = `games?key=${process.env.REACT_APP_YOUR_API}&dates=${lastYear},${CurrentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_YOUR_API}`;
// Game ScreenShots
// https://api.rawg.io/api/games/287342/screenshots?key=e9bd9989725b4722be69626aee357a9b
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_YOUR_API}`;
// Searched Game
// https://api.rawg.io/api/games?search=spiderman&page_size=9&key=e9bd9989725b4722be69626aee357a9b
export const searchedGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=12&key=${process.env.REACT_APP_YOUR_API}`;
