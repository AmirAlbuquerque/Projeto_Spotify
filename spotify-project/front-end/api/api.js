import axios from "axios";

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

const artistArray = responseArtists.data;
const songsArray = responseSongs.data;

export { artistArray };
export { songsArray };
