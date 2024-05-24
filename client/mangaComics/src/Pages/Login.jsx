import imgenFondo from '../assets/fondos/mangas.jpg'

const Login = () =>{

    const handeleChange = ()=>{
        const login = document.querySelector('.login-form');
        login.classList.add('inactive')

        const content = document.querySelector('.content');
        content.style['flex-direction'] = 'row-reverse';
    }
    return(
        <div className="login-container">
            <div className="content">
                <div className="login-img">
                    <img src={imgenFondo} alt="imagen fondo"/>
                </div>
                <form className="login-form">
                    <div className="login-form-title">
                        <i className='bx bxs-book'></i>
                        <h1>MangaComics</h1>
                    </div>
                    <div className='login-form-group'>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <div className="form-group-input">
                            <i className='bx bx-envelope'></i>
                            <input type="text" id='email'/>
                        </div>
                    </div>
                    <div className='login-form-group'>
                        <label htmlFor="password">
                            Password:
                        </label>
                        <div className="form-group-input">
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" id='password' />
                        </div>
                    </div>
                    <input type="submit" value="Login" className='login-form-submit' />
                    <small>¿Aun no tienes cuenta? <button className='register' type='button' onClick={handeleChange}>Registrate aqui</button></small>
                </form>
            </div>
        </div>
    )
}

export default Login