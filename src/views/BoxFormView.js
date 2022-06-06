import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createNewBox } from "../redux/slices/boxFormSlice"

function BoxFormView() {

    const [ values, setValues ] = useState({ name: "", weight: null, color: "", shippingCost: null });

    const { box, loading } = useSelector((state) => ({...state.app}))

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewBox({values}))
        setValues({ name: "", weight: null, color: "", shippingCost: null });
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
                    required
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
                    required
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
                    id="color"
                    required
                    onChange={(e) => setValues({...values, color: e.target.value })}
                    value={values.color}
                    name="color"
                >
                </input>
            </div>

            <div>
                <label>ShippingCost</label>
                <input
                    type="number"
                    id="shippingCost"
                    required
                    onChange={(e) => setValues({...values, shippingCost: e.target.value })}
                    value={values.shippingCost}
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
            
            <button type="sumbit">Save</button>
        </form>
    )
}

export default BoxFormView;