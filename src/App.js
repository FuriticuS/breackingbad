import React, {useEffect, useState} from 'react';
import {block} from 'bem-cn';
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import {fetchCharacters} from "./service";

import spinner from './img/spinner.gif';

import './App.css';
import axios from "axios";

const cn = block('container');

const App = () =>{

    // хуки для отображения элементов, загрузки
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //хуки получения запросов к API
    useEffect(()=> {
        const fetchAPI = async () => {
            setItems(await fetchCharacters());
            setIsLoading(false);
        }
        fetchAPI();
    },[]);

    // хуки для поиска совпадений по имени
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');

    const url = `https://www.breakingbadapi.com/api/characters?name=${query}`;

    useEffect(()=> {
        const fetchAPI = async () => {
            let result = await axios(url);

            setResult(result.data.map((items) => {
                    return items.name;
                }
            ))
            setItems(result.data);
            return result.data;
        }
        fetchAPI();
    },[query]);

    //вывод полученных данных
    const itemList = items.map((item) => {

        return (
            <li className="cards" key={item.char_id}>
                <div className="card-inner">
                    <div className="card-front">
                        <img src={item.img} alt="photo-card-characters"/>
                    </div>
                    <div className="card-back">
                        <p><span className="card-title">Номер:</span> {item.char_id}</p>
                        <p><span className="card-title">Имя актера:</span> {item.name}</p>
                        <p><span className="card-title">Имя персонажа:</span> {item.nickname}</p>
                        <p><span className="card-title">Дата рождения:</span> {item.birthday}</p>
                    </div>
                </div>
            </li>
        )
    });


    return (
        <div className={cn()}>
            <Header/>

            <Search getQuery={(q) => setQuery(q)} result={result}/>

            {/*---- загрузка с api картинок и инфы*/}
            {
                isLoading ? <img src={spinner} alt="load" style={{width:'200px', margin: 'auto', display:'block'}}/> : <ul className={cn("list")}>{itemList}</ul>
            }

        </div>
    );
}

export default App;
