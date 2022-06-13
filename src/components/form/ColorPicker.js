import { useState } from "react"
import { rgbValueConverter } from "../utils/RgbValueConverter";

export const ColorPicker = (values) => {

    const [ color, setColor ] = useState('#fff');

    const [ showColorPicker, setShowColorPicker ] = useState(false);

    return (
        
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
                        }}
                        id="colors"
                        data-testid="inputColor"
                        /> : null}
                    <h2>You picked color: {rgbValueConverter(values.color)}</h2>
        </div>
    )
}