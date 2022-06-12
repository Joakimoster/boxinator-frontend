export const rgbValueConverter = (hex) => {
    
    const validHexInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!validHexInput) {
        return false;
    }

    const r = parseInt(validHexInput[1], 16);
    const g = parseInt(validHexInput[2], 16);
    const b = parseInt(validHexInput[3], 16);

    return `${r}, ${g}, ${b}`;
}

export default rgbValueConverter