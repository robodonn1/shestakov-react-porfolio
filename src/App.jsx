import { useState } from 'react';
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Portfolio from './components/Portfolio'


function App() {
    const [isAbout, setIsAbout] = useState(false);

    return (
        <>
            <Header />
            <div className='Main'>
                <button className='a' onClick={() => setIsAbout(!isAbout)}>{isAbout ? (<p>скрыть обо мне</p>) : (<p>показать обо мне</p>)}</button>
                {isAbout && <About />}
                <Portfolio />
            </div>


        </>
    )
}

export default App
