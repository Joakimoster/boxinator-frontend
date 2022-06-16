import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { calculateTotalShippingCostAndTotalWeight, fetchBoxes } from "../redux/slices/FetchBoxDispatchesSlice";
import "../style/viewStyle.css";

function DispatchesView() {

    const dispatch = useDispatch();

    const { boxes, totalShippingCost, totalWeight } = useSelector((state) => state.boxes);
    
    useEffect(() => {
        dispatch(fetchBoxes());
    }, [dispatch])

    useEffect(() => {
        dispatch(calculateTotalShippingCostAndTotalWeight()); 
    }, [boxes])

    return (
        <div className="table-container" data-testid="dispatchesView">
            <div data-testid="dispatches-element-1">
                <h2>Current Boxlist, showing name of the reciever, the boxes weight, color and the shipping cost</h2>
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
                    <h2>Total weight from all boxes: <span>{(totalWeight).toFixed()}</span></h2>
                    <h2>Total shipping cost from all boxes: <span>{(totalShippingCost).toFixed()}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default DispatchesView