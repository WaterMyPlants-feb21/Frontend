import React from 'react'

export default function loginForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {

    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    const {name, value} = evt.target
    // c) use the `update` callback coming in through props
    update(name, value)
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    evt.preventDefault()
    // c) use the `submit` callback coming in through props
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
              <input 
                name='username' 
                type='text' 
                value={values.username} 
                onChange={onChange} 
                placeholder=''
                maxLength='30'
              />
        </label>

        <label>Phone Number
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            name='phoneNumber' 
            type='phoneNumber' 
            value={values.phone} 
            onChange={onChange} 
            placeholder=''
          />
        </label>

        <label>Password
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            name='password' 
            type='password' 
            value={values.password} 
            onChange={onChange} 
            placeholder='*******'
          />
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
