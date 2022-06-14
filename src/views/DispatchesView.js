import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { calculateTotalShippingCost, fetchBoxes } from "../redux/slices/FetchBoxDispatchesSlice";
import "../style/viewStyle.css";
import { useNavigate } from "react-router-dom";

function DispatchesView() {

    const dispatch = useDispatch();
    
    const boxStatus = useSelector(state => state.boxes.status)

    const { boxes, totalShippingCost, totalWeight } = useSelector((state) => state.boxes);

    const navigate = useNavigate();

    const goToBoxFormView = () => {
        navigate("/addbox")
    }
    
    useEffect(() => {
        if(boxStatus === 'idle') {
           dispatch(fetchBoxes()); 
        }
        if(boxStatus === 'success') {
            dispatch(calculateTotalShippingCost());
        }
    }, [boxStatus, dispatch])

    return (
        <div className="table-container" data-testid="dispatchesView">
            <div data-testid="dispatches-element-1">
                <h1>Boxlist</h1>
                <table data-testid="dispatchesTable">
                    <thead>
                        <tr>
                            <th>Reciever</th>
                            <th>Weight</th>
                            <th>Box colour</th>
                            <th>Shipping cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boxes.map((box, index) => {
                            return (
                                <tr key={index}>
                                    <td>{box.name}</td>
                                    <td>{(box.weight).toFixed()}</td>
                                    <td style={{ backgroundColor: `${box.color}` }}></td>
                                    <td>{(box.shippingCost).toFixed()}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="calculations-view" data-testid="calculations">
                    <h3>Total weight from all boxes: <span>{(totalWeight).toFixed()}</span></h3>
                    <h3>Total shipping cost from all boxes: <span>{(totalShippingCost).toFixed()}</span></h3>
                </div>
                <div>
                    <button className="boxinator-button" onClick={goToBoxFormView}>Get back to the form..</button>
                </div>
            </div>
        </div>
    )
}

export default DispatchesView