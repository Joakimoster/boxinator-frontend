import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { rgbValueConverter } from "../components/utils/RgbValueConverter";
import { createNewBox } from "../redux/slices/BoxFormSlice"
import "../style/viewStyle.css";

function BoxFormView() {

    const [ color, setColor ] = useState('#fff');

    const [ showColorPicker, setShowColorPicker ] = useState(false);

    const [ values, setValues ] = useState({ name: "", weight: 0, color: "", country: "" });

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        console.log(values);
        dispatch(createNewBox({ values }))
        handleReset();
        e.preventDefault();
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const handleReset = () => {
        setValues({name: '', weight: 0, color: '', country:''});
    }

    return (
        
        <div className="main-container" data-testid="boxFormView">
            <form onSubmit={onSubmit}>

                <div className="input-container">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                        value={values.name}
                        required
                        data-testid="inputName"
                    >
                    </input>
                </div>

                <div className="input-container">
                    <label>Weight</label>
                    <input
                        type="number"
                        min="0"
                        onKeyPress={preventMinus}
                        id="weight"
                        value={values.weight}
                        onChange={(e) => setValues({ ...values, weight: e.target.value })}
                        name="weight"
                        required
                    >
                    </input>
                </div>

                <div className="input-container">
                    <label>Box colour</label>
                    <button type="button" onClick={() => setShowColorPicker(!showColorPicker)}
                    >
                        {showColorPicker ? <label>Click to close color picker</label> : <label> Click to show colour picker</label>}
                    </button>

                    {showColorPicker ? <input
                        type="color"
                        value="color"
                        onChange={(e) => {
                            setColor(e.target.value);
                            setValues({ ...values, color: e.target.value })
                        }}
                        id="colors"
                        /> : null}
                    <h2>You picked color: {rgbValueConverter(values.color)}</h2>
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <select
                        id="dropdown"
                        onChange={(e) => setValues({ ...values, country: e.target.value })}
                        name="country"
                        required
                        value={values.country}
                    >   
                        <option disabled selected></option>
                        <option value="SWEDEN">Sweden</option>
                        <option value="CHINA">China</option>
                        <option value="BRAZIL">Brazil</option>
                        <option value="AUSTRALIA">Australia</option>
                    </select>
                </div>
                <div className="submit-button-container">
                   <button className="temp" type="submit" >Save</button> 
                </div>
                
            </form>  
        </div>
        
    )
}

export default BoxFormView;