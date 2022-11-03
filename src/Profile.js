import React from 'react';
import Del from './Asset/Del.png'
import ZuriButton from './ZuriButton';

function Profile() {
  return (
	<div className='Profile'>
	   <img id='profile__img' src={Del} alt=' ' />
	   <h1>Delphine</h1>
	  <ZuriButton />
	</div>
  )
}

export default Profile
