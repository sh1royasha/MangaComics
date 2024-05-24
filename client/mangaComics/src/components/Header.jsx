import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [isActive, setIsActive] = useState({
        cart: false,
        user: false
    });

    const [active,setActive] = useState('')
    
    const handeleClick = (icon) =>{
        setIsActive(prevState => ({
            ...prevState,
            [icon]: !prevState[icon]
        }));
    }

    const handleItemClick = (itemName) => {
        setActive(itemName);
    };
    
    // console.log(active)
    return(
        <nav className="header">
            <div className="header-icon">
                <div className="btn-menu">
                    <button>
                        <i className='bx bx-menu'></i>
                    </button>
                </div>
                <div className="icon-title">
                    <i className='bx bxs-book'></i>
                    <h1>MangaComics</h1>
                </div>
            </div>
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to='/main/home' onClick={() => handleItemClick('Home')}  className={active === 'Home' ? 'active' : ''}>Home</Link>
                </li>
                <li className="menu-item">
                    <Link to='/main/mangas' onClick={() => handleItemClick('Mangas')}  className={active  === 'Mangas' ? 'active' : ''}>Mangas</Link>
                </li>
                <li className="menu-item">
                    <Link to='' onClick={() => handleItemClick('Comics')}  className={active  === 'Comics' ? 'active' : ''}>Comics</Link>
                </li>
                <li className="menu-item">
                    <Link to='' onClick={() => handleItemClick('Books')}  className={active  === 'Books' ? 'active' : ''}>Books</Link>
                </li>
                <li className="menu-item">
                    <Link to='' onClick={() => handleItemClick('Contact')}  className={active  === 'Contact' ? 'active' : ''}>Contact</Link>
                </li>
            </ul>
            <div className="menu-login">
                <div className="login-register">
                    <Link to='/login' >
                        <button>Login</button>
                    </Link>
                    <Link to='/register'>    
                        <button>Register</button>
                    </Link>                    
                </div>
                <div className="user">
                    <button onClick={() => handeleClick('cart')} >
                        {isActive.cart ? (
                            <i className='bx bxs-cart'></i> 
                        ): (
                            <i className='bx bx-cart'></i>
                        )}
                    </button>
                    <button onClick={() => handeleClick('user')}>
                        {isActive.user ? (
                            <i className='bx bxs-user'></i> 
                        ): (
                            <i className='bx bx-user'></i>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;