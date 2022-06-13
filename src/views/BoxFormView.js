import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { rgbValueConverter } from "../components/utils/RgbValueConverter";
import { createNewBox } from "../redux/slices/BoxFormSlice"
import "../style/viewStyle.css";
import { ColorPicker } from "../components/form/ColorPicker";

function BoxFormView() {

    const navigate = useNavigate();

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

    const goToBoxesScreen = () => {
        navigate("/listboxes")
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
        <div>
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
                        data-testid="inputColor"
                        /> : null}
                    <h2>You picked color: {rgbValueConverter(values.color)}</h2>
        </div>
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <select
                        id="dropdown"
                        onChange={(e) => setValues({ ...values, country: e.target.value })}
                        name="country"
                        required
                        value={values.country}
                        data-testid="inputCountry"
                    >   
                        <option disabled selected></option>
                        <option data-testid="option1" value="SWEDEN">Sweden</option>
                        <option data-testid="option2" value="CHINA">China</option>
                        <option data-testid="option3" value="BRAZIL">Brazil</option>
                        <option data-testid="option4" value="AUSTRALIA">Australia</option>
                    </select>
                </div>
                <div className="submit-button-container">
                   <button className="boxinator-button" type="submit">Save</button> 
                </div>
                <div>
                    <button onClick={goToBoxesScreen}>To boxlist</button>
                </div>
                
            </form>  
        </div>
        
    )
}

export default BoxFormView;