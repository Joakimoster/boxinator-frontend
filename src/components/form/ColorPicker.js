import { useState } from "react"

export const ColorPicker = () => {
    const [ color, setColor ] = useState('#fff');
    const [ showColorPicker, setShowColorPicker ] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
            >
                {showColorPicker ? ' Close color picker' : 'Pick a color'}
            </button>
            {showColorPicker && (
                <input type="color"
                    color={color}
                    onChange={updatedColor => setColor(updatedColor)}
                />
            )}

            <h2>You picked {color}</h2>
        </div>
    )
}