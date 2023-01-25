import React from 'react'

import './MiniNavbar.css'
import Separator from './Separator'

const MiniNavbar = () => {
  return (
    <>
    <Separator/>
    <div className='miniNavbar'>
      <ul className='projects'>
        <li className='headingWebDev'>
          Web Dev
        </li>

        <li className='headingGames'>
          Games
        </li>
      </ul>
    </div>
    <Separator/>
    </>
  );
}

export default MiniNavbar
