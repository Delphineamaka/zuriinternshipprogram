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
	  <form>
	  <label>First Name</label> 
		<input
		onChange={handleChange}
		name='fName'
		id='first_name'
		 placeholder='First Name' 
		 type='text'
		 required
			value={contact.fName}


		/> <br />
		<label>Last Name</label>
		<input 
		onChange={handleChange}
         name='lName'
		  id='last_name'
		  type='text'
			placeholder='Last Name'
			required
			value={contact.lName}
		/> <br / >
		<label>Email</label>
		<input 
		onChange={handleChange}
		name='email'
		placeholder='email'
		required
		type='email'
		value={contact.email}

		/> <br />
		<textarea 
		onChange={handleChange}
		style={{resize: 'none'}}
			name='comments'
			placeholder=' comments here...'
			cols={20}
			rows='4'
			required
			autoFocus
			value={contact.comments}
		/> <br />
		<button type='button' onClick={submitButton}>Submit</button>

	  </form>
	</div>
  )
}

export default Contact

