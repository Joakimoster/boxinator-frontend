import React from "react";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { rgbValueConverter } from "../components/utils/RgbValueConverter";
import { createNewBox } from "../redux/slices/BoxFormSlice"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { ColorPicker } from "../components/form/ColorPicker";

function BoxFormView() {

    const [ initialState, setInitialState ] = useState(0);

    const [ color, setColor ] = useState('#fff');

    const [ showColorPicker, setShowColorPicker ] = useState(false);

    const [ values, setValues ] = useState({ name: "", weight: 0, color: "", country: "SWEDEN" });

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        console.log(values); 
        dispatch(createNewBox({ values }))
        setValues({name: '', weight: 0, color: '', country:''});
        e.preventDefault();
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const handleOnChange = (e) => {
        setInitialState(e.target.value);
    }

    const handleReset = () => {
        setInitialState(0);
    }

    return (
        
        <form onSubmit={onSubmit}>
            <h1>Add a new box</h1>
            <p>Welcome to boxinator application!</p>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setValues({...values, name: e.target.value })}
                    value={values.name}
                    required
                >
                </input>
            </div>

            <div>
                <label>Weight</label>
                <input
                    type="number"
                    min="0"
                    onKeyPress={preventMinus}
                    id="weight"
                    value={values.weight}
                    onChange={(e)=> {handleOnChange(e); setValues({...values, weight: e.target.value})}}
                    name="weight"
                    required
                >
                </input>
            </div>

            <div>
                <label>Box colour</label>
                <button type="button" onClick={() => setShowColorPicker(!showColorPicker)}
                >
                    {showColorPicker ? <label>Click to close color picker</label> : <label> Click to show colour picker</label>}
                </button>

                {showColorPicker ? <input 
                type="color" 
                value= "color" 
                onChange={(e) => {setColor(e.target.value); 
                    setValues({ ...values, color: e.target.value})}} 
                    id="colors" /> : null}
                <h2>You picked color: { rgbValueConverter (values.color)}</h2>
            </div>

            {/*<div>
                <label>Box colour</label>
                <input
                    type="text"
                    id="colorText"
                    placeholder="Click to show color picker"
                    value={values.color}
                    required
                >
                </input>
                <input
                    type="color"
                    id="color"
                    onChange={(e) => setValues({ ...values, color: rgbValueConverter(e.target.value) })}
                    value={values.color}
                    name="color"
                    required
                >
                </input>
            </div>*/}

            <div>
                <label>Country</label>
                <select
                    id="dropdown"
                    onChange={(e) => setValues({ ...values, country: e.target.value })}
                    name="country"
                    required
                    value={values.country}
                >
                    <option value="SWEDEN">Sweden</option>
                    <option value="CHINA">China</option>
                    <option value="BRAZIL">Brazil</option>
                    <option value="AUSTRALIA">Australia</option>
                </select>
            </div>

            <button type="submit" onClick={handleReset} >Save</button>
        </form>
    )
}

export default BoxFormView;