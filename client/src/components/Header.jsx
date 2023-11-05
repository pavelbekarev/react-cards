import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from "./../assets/img/persik.png";

export function Header() {
    const number = useSelector(state => state.number.number);

    return (
        <div className="header">
            <h1>
                <Link className='header__link' to="/">
                    <img 
                        style={{width: 65, height: 65}} 
                        src={Logo} alt="" 
                        className='header__logo'
                    />
                    Флеш-карточки
                </Link>
            </h1>
            <nav className='main-menu'>
                <ul>
                    <li>
                        <Link className='main-menu__link' to="/admin">Создать сет</Link>
                    </li>
                </ul>
            </nav>

            <p style={{color: 'white'}}>Количество просмотренных карточек : {number}</p>
        </div>
    );
}