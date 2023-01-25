import React from 'react';
import Separator from '../components/Separator';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Separator/>

      <AboutMe/>

      <Separator/>

      <University/>

      <Separator/>

      <Udemy/>

      <Separator/>
      
    </div>
  );
}

const AboutMe = () => {
  return(
    <>
    <div className='aboutMe'>
        <h1 className="aboutMeHeader">About Me</h1>
        <p className="aboutMePara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id lectus et nisi ultricies
            ullamcorper in a tortor. Nam lobortis a justo faucibus euismod. Maecenas sed vulputate odio. 
            Aliquam non aliquam mi, id scelerisque purus. Proin eros est, egestas ac ex nec, volutpat ullamcorper eros. 
            Cras laoreet orci et elit auctor, quis finibus dolor rhoncus. Donec pharetra eros dolor, 
            sit amet cursus ligula ultricies id. Nulla lacinia blandit quam, id vehicula turpis dignissim hendrerit. 
            Nullam nisi libero, scelerisque et tincidunt in, egestas vitae ex. Ut dictum condimentum augue nec commodo. 
            Mauris posuere turpis urna, sit amet cursus neque rhoncus sit.
        </p>
    </div>


    </>
  );
}

const University = () => {
  return(
    <>
      <div className='university'>
        <h1 className="universityHeader">University</h1>
        <p className="universityPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id lectus et nisi ultricies
            ullamcorper in a tortor. Nam lobortis a justo faucibus euismod. Maecenas sed vulputate odio. 
            Aliquam non aliquam mi, id scelerisque purus. Proin eros est, egestas ac ex nec, volutpat ullamcorper eros. 
            Cras laoreet orci et elit auctor, quis finibus dolor rhoncus. Donec pharetra eros dolor, 
            sit amet cursus ligula ultricies id. Nulla lacinia blandit quam, id vehicula turpis dignissim hendrerit. 
            Nullam nisi libero, scelerisque et tincidunt in, egestas vitae ex. Ut dictum condimentum augue nec commodo. 
            Mauris posuere turpis urna, sit amet cursus neque rhoncus sit.
        </p>
    </div>
    </>
  );
}

const Udemy = () => {
  return(
    <div className='udemy'>
        <h1 className="udemyHeader">Udemy</h1>
        <p className="udemyPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id lectus et nisi ultricies
            ullamcorper in a tortor. Nam lobortis a justo faucibus euismod. Maecenas sed vulputate odio. 
            Aliquam non aliquam mi, id scelerisque purus. Proin eros est, egestas ac ex nec, volutpat ullamcorper eros. 
            Cras laoreet orci et elit auctor, quis finibus dolor rhoncus. Donec pharetra eros dolor, 
            sit amet cursus ligula ultricies id. Nulla lacinia blandit quam, id vehicula turpis dignissim hendrerit. 
            Nullam nisi libero, scelerisque et tincidunt in, egestas vitae ex. Ut dictum condimentum augue nec commodo. 
            Mauris posuere turpis urna, sit amet cursus neque rhoncus sit.
        </p>
    </div>
  );
}

export default Home
