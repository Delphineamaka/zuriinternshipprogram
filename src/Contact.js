import React, { useState } from 'react'

function Contact() {
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: "",
		comments: ""
	})

	function handleChange(event){
		const {name, value} = event.target;
		setContact((prevValue) =>{
			return {
				...prevValue,
				[name]: value
			}
			
		})
	}

	function submitButton(event){
     setContact({
		fName: "",
		  lName: "",
		  email: "",
		  comments: ""
	 })
	 alert('you have submitted')
	event.preventDefault()
	}

  return (
	<div className='container'>
	<h1>Contact Me</h1>
	<h4>Hi there, contact me to ask me about anything you have in mind.</h4>
	  <form>

	  <label>First Name</label> 
	      <br />  
		<input
		onChange={handleChange}
		name='fName'
		id='first_name'
		placeholder='Enter your First Name' 
		type='text'
	    required
		value={contact.fName}

		/>  
	 <br /> <br />
        <label>Last Name </label>
		    <br /> 
		<input 
		  onChange={handleChange}
          name='lName'
		  id='last_name'
		  type='text'
		  placeholder='Enter Your Last Name'
		  required
		  value={contact.lName}
				 
		/>  
	      
	  
		<br /><br />
		<label>Email</label> <br />
		<input 
		id='email'
		onChange={handleChange}
		name='email'
		placeholder='yourname@email.com'
		required
		type='email'
		value={contact.email}/> <br /> <br />
		<label> Message</label>  <br/> 
		<textarea 
		id='message'
		onChange={handleChange}
		style={{resize: 'none'}}
			name='comments'
			placeholder='Send me a message and I will reply you as soon as possible...'
			cols={40}
			rows='4'
			required
			autoFocus
			value={contact.comments}/>  <br />
		<input type='checkbox'
		className='checked' 
		required />
		<label>
         You agree to providing your data to Delphine who may contact you.</label>  <br />
		<button type='submit' id='btn__submit' onClick={submitButton}>Send message</button>

	  </form>
	</div>
  )
}

export default Contact

