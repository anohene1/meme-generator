import {useState, useEffect} from 'react';

function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage:'https://i.imgflip.com/30b1gx.jpg',
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => setAllMemes(response.data.memes))
    }, []);

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    function getMemeImage(e) {
        e.preventDefault();
        const url = allMemes[getRandomNumber(allMemes.length)].url;
        setMeme(prevMeme => ({...prevMeme, randomImage: url}));
    }


    function handleChange(event) {
       const {name, value} = event.target;
       setMeme(prevMeme => ({
           ...prevMeme,
           [name]: value,
       }));
    }


    return (
        <main className='meme'>
            <form className='form'>
                <input type="text" className='form--input' placeholder='Top text' onChange={handleChange} value={meme.topText} name='topText'/>
                <input type="text" className='form--input' placeholder='Bottom text' onChange={handleChange} value={meme.bottomText} name='bottomText'/>
                <button className='form--button' onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div className="image--container">
                <span className="top-text">{meme.topText}</span>
                <span className="bottom-text">{meme.bottomText}</span>
                <img src={meme.randomImage} alt="meme" className='meme--image'/>
            </div>
        </main>
    );
}

export default Meme;