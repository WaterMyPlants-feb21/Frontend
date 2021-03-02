import React from 'react'

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
      }
    
    return (
        <form className='create form container' onSubmit={onSubmit}>
            <h2>Create Account</h2> 
            <div className='form-group inputs'>
                <label>Username&nbsp;
                <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                />
                </label>
    
                <label>Phone Number&nbsp;
                <input
                    placeholder="Enter phone number"
                    value={values.phonenumber}
                    onChange={onChange}
                    name='phonenumber'
                    type='text'
                />
                </label>

                <label>password&nbsp;
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
                </label>
            </div>
            <div className='form-group submit'>
                <button disabled={disabled}>submit</button>
    
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.phonenumber}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
      )
}