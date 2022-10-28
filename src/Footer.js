import React from 'react';
import zurilogo from './Asset/zurilogo.png'
import goodlogo from './Asset/goodlogo.png'
function Footer() {
  return (
	
	<footer>
	<div className='footerr'>
	   <img className='footer__icon' src={goodlogo} alt='' />
		<p >HNG Internship 9 Frontend Task</p>
		  <img className='footer__icon' src={zurilogo} alt='' /> 
	   </div>
	</footer>
	
  )
}

export default Footer
