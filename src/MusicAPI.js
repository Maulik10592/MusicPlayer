import axios from 'axios';

function MusicAPI() {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/albums/',
        params: {
            ids: '3IBcauSj5M2A6lTeffJzdv'
        },
        headers: {
            'x-rapidapi-key': 'e01d730154mshb3713b70c3d86b6p16500cjsn1beb876cff66',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
export default MusicAPI;