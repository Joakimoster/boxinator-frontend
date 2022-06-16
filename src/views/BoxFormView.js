import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewBox } from "../redux/slices/FormBoxSlice"
import "../style/viewStyle.css";
import { ColorPicker } from "../components/form/ColorPicker";
import { CountryDropDown } from "../components/form/CountryDropDown";

function BoxFormView() {

    const [ color, setColor ] = useState('#fff');

    const [ values, setValues ] = useState({ name: "", weight: 0, color: "", country: "" });

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (values.color === "") {
            alert('Please choose a color from the picker..')
        } else {
            dispatch(createNewBox({ values }))
            handleReset();
            alert('Success! You may now see the box you saved in the Boxlist')
        }
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    }

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
                        data-testid="inputWeight"
                    >
                    </input>
                </div>

                <div className="input-container">
                    <label>Box colour</label>
                    <ColorPicker
                        value={values.color}
                        onChange={(e) => {
                            setColor(e.target.value);
                            setValues({ ...values, color: e.target.value })
                        }}
                        inputProps={{ type: 'color' }}
                    />
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <CountryDropDown
                        value={values.country}
                        onChange={(e) => setValues({ ...values, country: e.target.value })}
                        inputProps={{ type: 'select' }}
                    />
                </div>

                <div className="submit-button-container">
                   <button className="boxinator-button" type="submit">Save</button> 
                </div>   
            </form>  
        </div>
        
    )
}

export default BoxFormView;