export const rgbValueConverter = (hex) => {
    
    const validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!validHEXInput) {
        return false;
    }

    const r = parseInt(validHEXInput[1], 16);
    const g = parseInt(validHEXInput[2], 16);
    const b = parseInt(validHEXInput[3], 16);

    return `${r}, ${g}, ${b}`;
}

export default rgbValueConverter