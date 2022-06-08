import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { rgbValueConverter } from "../components/utils/RgbValueConverter";
import { ColorPicker } from "../components/form/ColorPicker";
import { createNewBox } from "../redux/slices/BoxFormSlice"

function BoxFormView() {

    const [ values, setValues ] = useState({ name: "", weight: null, color: "", country: "" });

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewBox({values}))
        setValues({ name: "", weight: null, color: "", country: "" });
        console.log(values);
    }

    return (
        <form onSubmit={handleOnSubmit}>

            <h1>Add a new box</h1>
            <p>Welcome to boxinator application!</p>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setValues({...values, name: e.target.value })}
                    value={values.name}
                    name="name"
                >
                </input>
            </div>

            <div>
                <label>Weight</label>
                <input
                    type="number"
                    id="weight"
                    onChange={(e) => setValues({...values, weight: e.target.value })}
                    value={values.weight}
                    name="weight"
                >
                </input>
            </div>

            <div>
                <label>Box colour</label>
                <input
                    type="text"
                    id="colorText"
                    value={values.color}
                    placeholder="Click to show color picker">
                </input>
                <input
                    type="color"
                    id="color"
                    onChange={(e) => setValues({ ...values, color: rgbValueConverter(e.target.value) })}
                    value={values.color}
                    name="color"
                >
                </input>
            </div>

            <div>
                <label>Country</label>
                <select
                    id="dropdown"
                    onChange={(e) => setValues({ ...values, country: e.target.value })}
                    name="country"
                >
                    <option value="SWEDEN">Sweden</option>
                    <option value="CHINA">China</option>
                    <option value="BRAZIL">Brazil</option>
                    <option value="AUSTRALIA">Australia</option>
                </select>
            </div>
            
            <button type="sumbit">Save</button>
        </form>
    )
}

export default BoxFormView;