// import axios from 'axios';

// function MusicAPI() {

//     const options = {
//         method: 'GET',
//         url: 'https://spotify23.p.rapidapi.com/albums/',
//         params: {
//             ids: '3IBcauSj5M2A6lTeffJzdv'
//         },
//         headers: {
//             'x-rapidapi-key': 'e01d730154mshb3713b70c3d86b6p16500cjsn1beb876cff66',
//             'x-rapidapi-host': 'spotify23.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// export default MusicAPI;

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "9ada91b1eb5f4e7cb560d0574d358a64";
const redirectUrl = "https://mv-music-player.vercel.app/";
const scope = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_url=${redirectUrl}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;

