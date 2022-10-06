import CartWidget from '../CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
        <nav className="nav">
          <div className="nav__brand">
            <NavLink className="nav__link" to ='/'>MiMarca</NavLink>
            </div>
            <ul className="nav__list">
              <li>
                <NavLink className="nav__link" to='/categoria/cursos'>Cursos</NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to='/categoria/proximos'>Próximos Cursos</NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to='cart'>
                    <CartWidget />
                </NavLink>
              </li>
            </ul>
        </nav>
      </div>
    )
}

export default NavBar;