import { useState } from "react"
import { useDispatch } from "react-redux"
import CountryDropDown from "../components/form/CountryDropDown"

function BoxFormView() {

    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [color, setColor] = useState("")

    const dispatch = useDispatch();

    const onSubmitNewBox = (e) => {
        e.preventDefault();
        name,
        weight,
        color
    }

    /*const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }*/
    return (
        <form onSubmit={onSubmitNewBox}>

            <h1>Add a new box</h1>
            <p>Welcome to boxinator application!</p>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
            </div>

            <div>
                <label>Weight</label>
                <input
                    type="text"
                    id="weight"
                    onChange={(e) => setWeight(e.target.value)}
                >
                </input>
            </div>

            <div>
                <label>Box colour</label>
                <input
                    type="color"
                    id="color"
                    onChange={(e) => setColor(e.target.value)}
                >
                </input>
            </div>

            <div>
                <label>Country</label>
                <select id="dropdown">
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