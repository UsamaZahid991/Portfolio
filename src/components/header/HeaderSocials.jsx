import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/usama-zahid-723591148'><BsLinkedin/></a>
        <a href='https://github.com/usama-trs'><FaGithub/></a>
        <a href='https://dribble.com'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials