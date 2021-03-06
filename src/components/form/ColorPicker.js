import { useState } from "react"
import { rgbValueConverter } from "../utils/RgbValueConverter";

export const ColorPicker = ({ label, inputProps, onChange, value }) => {

    const [ showColorPicker, setShowColorPicker ] = useState(false);

    return (
        
        <div className="color-picker-div">
            <button type="button" onClick={() => setShowColorPicker(!showColorPicker)}
            >
                {showColorPicker ? <label>Click to close color picker{label}</label> : <label>Click to show colour picker</label>}
            </button>

            {showColorPicker ? <input
                type="color"
                {...inputProps}
                onChange={onChange}
                value={value}
                id="colors"
                data-testid="inputColor"
                required
            /> : null}
            <h2>You picked color in rgb value: {rgbValueConverter(value)}</h2>
        </div>
    )
}