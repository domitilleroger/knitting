import React from 'react';

import './Header.scss';
import routes from 'routes';

function Header() {
  return (
    <div className="header">
      <a className="header__link" href={routes.home}>Home</a>
      <a className="header__link" href={routes.knitting}>Knit</a>
      <a className="header__link" href={routes.bujo}>Bujo</a>
    </div>
  );
}

export default Header;
