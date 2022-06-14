export const CountryDropDown = ({ inputProps, onChange, value }) => {

    return (
        <select
            id="dropdown"
            onChange={onChange}
            name="country"
            required
            value={value}
            data-testid="inputCountry"
            defaultValue=""
        >
            <option value="" disabled>Choose a country</option>
            <option data-testid="option1" value="SWEDEN">Sweden</option>
            <option data-testid="option2" value="CHINA">China</option>
            <option data-testid="option3" value="BRAZIL">Brazil</option>
            <option data-testid="option4" value="AUSTRALIA">Australia</option>
        </select>
    )
}