import Playlist from 'react-mp3-player';
import '../Styling/mp3Player.css'
import songfile from '../assets/pinkFloyd.mp3'

const tracks = [{
    img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name: 'MP3',
    desc: 'pink floyd: wish you were here', src:{songfile}
}]

const soundPlayer = () => {
    return (
        <div className="playerInterface">
            <h2>Mp3 Player</h2>
            <Playlist tracks={tracks}/>
        </div>
    )
}

export default soundPlayer