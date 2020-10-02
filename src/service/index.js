import axios from 'axios';

const url = `https://www.breakingbadapi.com/api`
const characters = `${url}/characters`;

export const fetchCharacters = async () => {
    try{
        const result = await axios(characters);

        result.data.map((items) => ({
            id: items.id,
            name: items.name,
            birthday: items.birthday,
            img: items.img,
            nickname: items.nickname
        }))

        return result.data;
    }
    catch (error) {console.log(error);}
}
