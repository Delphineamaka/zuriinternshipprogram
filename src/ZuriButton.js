 import React from 'react';
 import {Link } from 'react-router-dom';
 
 
 
 function ZuriButton() {
   return (
	<section >
	   
	   <a target='_blank' rel="noreferrer" id='twitter__link' href='https://twitter.com/Delphine5012?t=uoQ0pWHasuRYvbdnaqfadQ&s=03'>Twitter link</a>
	    <a id='btn__zuri' target='_blank' rel="noreferrer" href = 'https: //training.zuri.team/'>Zuri team</a> 

	   <a id='book__python' href='http://books.zuri.team' target='_blank' rel="noreferrer">Zuri Books</a> 
	  
	   <a  id = 'book__python' target='_blank' rel="noreferrer"   href="http://books.zuri.team">Python Books</a> 
	   
	   <a  id='pitch' target='_blank' rel="noreferrer" href='https://background.zuri.team/' > background check for coders</a>

	 <a id='book__design' target='_blank' rel="noreferrer" href='https://
	 books.zuri.team/design-rules'>Design</a> 
	  
		<a id='contact'  ><Link to='/Contact' id='contact'>Contact</Link></a>
	    
	</section>

   )
 }
 
 export default ZuriButton
 