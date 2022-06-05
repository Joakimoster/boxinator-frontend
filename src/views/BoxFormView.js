import CountryDropDown from "../components/form/CountryDropDown"

function BoxFormView() {

    return (
        <form>

            <h1>Add a new box</h1>
            <p>Welcome to boxinator application!</p>

            <div>
                <label>Name</label>
                <input type="text" id="name"></input>
            </div>

            <div>
                <label>Weight</label>
                <input type="text" id="weight"></input>
            </div>

            <div>
                <label>Box colour</label>
                <input type="color" id="color"></input>
            </div>

            <div>
                <CountryDropDown/>
            </div>
            
            <button type="submit">Save</button>
        </form>
    )
}

export default BoxFormView