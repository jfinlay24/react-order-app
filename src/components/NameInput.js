import React from "react"

function NameInput({ nameInput, firstName, onFirstNameChanged, lastName, onLastNameChanged }) {

    return (
        <div>
            <div class="nameInput">Name input is: {nameInput}</div>
            <input
                value={firstName}
                placeholder="First Name"
                onChange={(e) => onFirstNameChanged(e.target.value)}
            />
            <tr></tr>
            <input
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => onLastNameChanged(e.target.value)}
            />
        </div>
    )
}

export default NameInput