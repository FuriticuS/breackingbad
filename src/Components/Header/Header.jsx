import React from 'react';
import {block} from 'bem-cn';

import logo from '../../img/logo.png';

const cn = block('center');

const Header = () => {
    return (
        <header className={cn()}>
            <img src={logo} alt="logo"/>
        </header>
    );
};

export default Header;
