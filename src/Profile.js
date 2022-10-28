import React from 'react';
import Del from './Asset/Del.png'

function Profile() {
  return (
	<div className='Profile'>
	   <img id='profile__img' src={Del} alt=' ' />
	   <h1>Delphine</h1>
	   {/* <h2>Delp</h2> */}
	</div>
  )
}

export default Profile
