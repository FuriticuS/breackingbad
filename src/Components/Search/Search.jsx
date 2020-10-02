import React, {useState} from 'react';
import {block} from 'bem-cn';

const cn = block('search');

const Search = ({getQuery}) => {

    //хук для поиска по слову
    const [text, setText] = useState('');

    const onChanged = (e) => {
        setText(e)
        getQuery(e);
    }

    return (
        <section className={cn()}>
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search characters"
                    value={text}
                    onChange={(e) => onChanged(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    );
};

export default Search;
