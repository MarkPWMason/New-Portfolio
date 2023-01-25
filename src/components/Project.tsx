import React from 'react'
import {IProject} from '../../interfaces/project.interface'
import './Project.css'


const Project = (props: IProject) => {
  return (
    <div className='projectRoot' key={props.index}>
        <div className='projectTitle'>{props.title}</div>
        <div className='projectContainer'>
            <div className='projectImage'><img src={props.image} alt="Project" className='image'/></div>
            <div className='projectDesc'>{props.description}</div>
        </div>
        <div className='projectLink'> <a href={props.link}> Project</a></div>
        <div>{props.skills}</div>
    </div>
  )
}

export default Project