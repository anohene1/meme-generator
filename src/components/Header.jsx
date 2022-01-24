import trollFace from '../images/troll-face.png';

function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <img src={trollFace} alt="header icon" className="logo--icon"/>
                <span className="logo--text">Meme Generator</span>
            </div>
            <p>React Course - Project 3</p>
        </header>
    );
}

export default Header;