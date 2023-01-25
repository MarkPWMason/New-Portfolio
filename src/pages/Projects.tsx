import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Project from '../components/Project'

import { IProject } from '../../interfaces/project.interface'
import { ISkillsSelect } from '../../interfaces/skillsSelect.interface'

const projectsRes: IProject[] = [
  {
    title: 'Test',
    image: 'test.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id lectus et nisi ultricies
    ullamcorper in a tortor. Nam lobortis a justo faucibus euismod. Maecenas sed vulputate odio. 
    Aliquam non aliquam mi, id scelerisque purus. Proin eros est, egestas ac ex nec, volutpat ullamcorper eros. 
    Cras laoreet orci et elit auctor, quis finibus dolor rhoncus. Donec pharetra eros dolor, 
    sit amet cursus ligula ultricies id. Nulla lacinia blandit quam, id vehicula turpis dignissim hendrerit. 
    Nullam nisi libero, scelerisque et tincidunt in, egestas vitae ex. Ut dictum condimentum augue nec commodo. 
    Mauris posuere turpis urna, sit amet cursus neque rhoncus sit.`,
    link: 'https://www.google.co.uk/',
    skills: ['HTML', 'CSS', 'Javascript'],
  },

  {
    title: 'Test1',
    image: 'test.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id lectus et nisi ultricies
    ullamcorper in a tortor. Nam lobortis a justo faucibus euismod. Maecenas sed vulputate odio. 
    Aliquam non aliquam mi, id scelerisque purus. Proin eros est, egestas ac ex nec, volutpat ullamcorper eros. 
    Cras laoreet orci et elit auctor, quis finibus dolor rhoncus. Donec pharetra eros dolor, 
    sit amet cursus ligula ultricies id. Nulla lacinia blandit quam, id vehicula turpis dignissim hendrerit. 
    Nullam nisi libero, scelerisque et tincidunt in, egestas vitae ex. Ut dictum condimentum augue nec commodo. 
    Mauris posuere turpis urna, sit amet cursus neque rhoncus sit.`,
    link: 'https://www.google.co.uk/',
    skills: ['SASS', 'CSS', 'Javascript'],
  }
];

const defaultSkills: ISkillsSelect[] = [
  {value: 'Javascript', label: 'Javascript'},
  {value: 'CSS', label: 'CSS'},
  {value: 'HTML', label: 'HTML'},
  {value: 'C#', label: 'C#'},
];

const Projects = () => {

  const [filter, setFilter] = useState<any>(defaultSkills);
  console.log(filter);

  const filtered = projectsRes.filter(p => {
  let searchedForSkill = false;
  if(filter != null){
    filter.forEach((f: ISkillsSelect) =>{
      p.skills.forEach(s => {
        if(s === f.value){
          searchedForSkill = true;
        };
      });
    });
  }
      if(searchedForSkill){
        return p;
      }
      return false;
  });

  return (
    <div className='Projects'>
      <SearchBar setFilter={setFilter} filter={filter} skills={defaultSkills}/>
      {
        filtered.map((p, index) =>{
         return (<Project index={index} title={p.title} image={p.image} description={p.description} link={p.link} skills={p.skills}/>)
        })
      }

    </div>
  )
    
}

export default Projects
