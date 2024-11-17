import { useState } from 'react'

function BetterSignupForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', password: '' })

    const handleChange = (event) => {
        const changedElement = event.target.name;
        const changedValue = event.target.value;
        setFormData(oldForm => {
            return { ...oldForm, [changedElement]: changedValue };
        })
    }

    function submitForm() {
        console.log(formData.firstName, formData.lastName, formData.password)
    }

    return (
        <div>
            <label htmlFor="firstName">Write first name</label>
            <input type="text" placeholder="firstName" value={formData.firstName} onChange={handleChange} id="firstName" name="firstName"></input>
            <label htmlFor="lastName">Write last name</label>
            <input type="text" placeholder="lastName" value={formData.lastName} onChange={handleChange} id="lastName" name="lastName"></input>
            <label htmlFor="password">Write password</label>
            <input type="password" placeholder="password" value={formData.password} onChange={handleChange} id="password" name="password"></input>
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}

export default BetterSignupForm;