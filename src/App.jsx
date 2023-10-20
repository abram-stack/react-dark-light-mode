import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section>
          <h2>Low impact website:</h2>
          <ul>
            <li>Lazyloading: any images won't load before they are actively in user's viewport height</li>
            <li>Proper Image format for less amount of bytes used</li>
            <li>Fonts.. yes you read it right, custom fonts can be a factor for more carbon footprint. Let's limit that</li>
            <li>Optimize the using of renewable energy sources on every components </li>
            <li>Stores data using the cache, and Edge network</li>
            <li>Aware the user of the impact of using the internet</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App
