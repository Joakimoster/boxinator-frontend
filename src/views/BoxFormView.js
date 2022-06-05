import { useState } from "react"
import CountryDropDown from "../components/form/CountryDropDown"

function BoxFormView() {

    const [ formData, setFormData ] = useState({
        name: '',
        weight: '',
        color: '',
        select: ''
    });

    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <form>

            <h1>Add a new box</h1>
            <p>Welcome to boxinator application!</p>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={onInputChange}
                >
                </input>
            </div>

            <div>
                <label>Weight</label>
                <input
                    type="text"
                    id="weight"
                    onChange={onInputChange}
                >
                </input>
            </div>

            <div>
                <label>Box colour</label>
                <input
                    type="color"
                    id="color"
                    onChange={onInputChange}
                >
                </input>
            </div>

            <div>
                <label>Country</label>
                <select id="dropdown" onChange={onInputChange}>
                    <option value="Sweden">Sweden</option>
                    <option value="China">China</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Australia">Australia</option>
                </select>
            </div>
            
            <button type="submit">Save</button>
        </form>
    )
}

export default BoxFormView