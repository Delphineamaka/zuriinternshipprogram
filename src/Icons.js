import React from 'react'
import giticon from './Asset/giticon.png';
import slack from './Asset/slack.png'

function Icons() {
  return (
	<div>
	  <div className='icons'>
		 <a target='_blank' rel="noreferrer" href='https://github.com/account'><img src={slack} alt='' /></a> 
		 <a  target='_blank' rel="noreferrer" href='https://github.com/account'><img src={giticon} alt=' ' /></a> 
	 </div>

	</div>
  )
}

export default Icons
