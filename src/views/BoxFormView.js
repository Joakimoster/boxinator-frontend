import { useState } from "react"
import { useDispatch } from "react-redux"
import CountryDropDown from "../components/form/CountryDropDown"
import { addBox } from "../redux/actions/apiAction"

function BoxFormView() {
    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [color, setColor] = useState("")
    const dispatch = useDispatch();
    const handleTextChange = event => {
        const {target: {name, value}} = event;
        this.useState({ [name]: value})
    }
    const onSubmitNewBox = (e) => {
        e.preventDefault();
    }

    const initialFormState = {
        name: "",
        weight: null,
        color: "",
        shippingCost: null
    }

    const [box, setBox] = useState(initialFormState);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setBox({ ...box, [name]: value });
    }
    const saveBox = () => {
        const { name, weight, color, shippingCost} = box;

        dispatch(addBox(name, weight, color, shippingCost))
        .then(data => {
            setBox({
                name: data.name,
                weight: data.weight,
                color: data.color,
                shippingCost: data.shippingCost
            });
            setSubmitted(true);
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
    }
    const newBox = () => {
        setBox(initialFormState);
        setSubmitted(false);
    }

    return (
        <form>

            <h1>Add a new box</h1>
            <p>Welcome to boxinator application!</p>

            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    required
                    value={box.name}
                    onChange={handleInputChange}
                    name="name"
                >
                </input>
            </div>

            <div>
                <label htmlfor="weight">Weight</label>
                <input
                    type="text"
                    id="weight"
                    required
                    value={box.weight}
                    onChange={handleInputChange}
                    name="weight"
                >
                </input>
            </div>

            <div>
                <label htmlFor="Box color">Box colour</label>
                <input
                    type="text"
                    id="color"
                    required
                    value={box.color}
                    onChange={handleInputChange}
                    name="color"
                >
                </input>
            </div>

            <div>
                <label htmlfor="shippingCost">ShippingCost</label>
                <input
                    type="text"
                    id="shippingCost"
                    required
                    value={box.shippingCost}
                    onChange={handleInputChange}
                    name="shippingCost"
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
            
            <button onClick={saveBox}>Save</button>
        </form>
    )
}

export default BoxFormView;