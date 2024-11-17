import { useState } from 'react'

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateLastName = (event) => {
        setLastName(event.target.value);
    }

    function submitForm() {
        console.log(firstName, lastName)
    }

    return (
        <div>
            <label htmlFor="firstName">Write first name</label>
            <input type="text" placeholder="firstName" value={firstName} onChange={updateFirstName} id="firstName"></input>
            <label htmlFor="lastName">Write last name</label>
            <input type="text" placeholder="lastName" value={lastName} onChange={updateLastName} id="lastName"></input>
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}

export default SignupForm;