import { useState } from "react"

export const ColorPicker = () => {

    const [ color, setColor ] = useState('#fff');

    const [ showColorPicker, setShowColorPicker ] = useState(false);

    return (
        
        <div>
            <label>Box colour</label>

            <button type="button" onClick={() => setShowColorPicker(!showColorPicker)}
            
            >
                {showColorPicker ? <label>Click to close color picker</label> : <label> Click to show colour picker</label>}
            </button>

            {showColorPicker ? <input type={"color"} value={color} onChange={setColor} id="colors" /> : null}

            <h2>You picked {color}</h2>
        </div>
    )
}