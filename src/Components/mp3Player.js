import { useState } from 'react';
import { Button } from 'reactstrap';
import AudioPlayer from 'react-audio-player';
import '../Styling/mp3Player.css'
import pinkFloyd from '../assets/pinkFloyd.mp3'
import fooFighters from '../assets/fooFighters.mp3'
import kidCudi from '../assets/kidCudi.mp3'
import kingsOfLeon from '../assets/kingsOfLeon.mp3'

function SoundPlayer() {

const [ indexHolder, setIndexHolder ] = useState(0)

const jukeBox = [
    pinkFloyd, 
    fooFighters, 
    kidCudi, 
    kingsOfLeon
]


const nextSong = () => {
    if (indexHolder < jukeBox.length-1)
    setIndexHolder(indexHolder+1)
}

const prevSong = () => {
    if (indexHolder > 0) {
        setIndexHolder(indexHolder-1)
    }
}

    return (
        <div className="playerInterface">
            <h2>Song Title</h2>
            <AudioPlayer src={jukeBox[indexHolder]} controls />
            <br />
            <Button onClick={prevSong}>Prev</Button>
            <Button onClick={nextSong}>Next</Button>
        </div>
    )
}

export default SoundPlayer