import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { calculateTotalShippingCost, calculateTotalWeight, fetchUsers } from "../redux/slices/FetchUserSlice";
import "../style/viewStyle.css";

function DispatchesView() {

    const dispatch = useDispatch();
    const boxStatus = useSelector(state => state.boxes.status)

    const { boxes, totalShippingCost, totalWeight } = useSelector((state) => state.boxes);
    
    useEffect(() => {
        if(boxStatus === 'idle') {
           dispatch(fetchUsers()); 
        }
        if(boxStatus === 'success') {
            dispatch(calculateTotalShippingCost());
        }
    }, [boxStatus, dispatch])

    return (
        <div className="table-container" data-testid="dispatches-view-test">
            <div data-testid="dispatches-element-1">
                <h1>Boxlist</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Reciever</th>
                            <th>Weight</th>
                            <th>Box colour</th>
                            <th>Shipping cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boxes.map((box) => {
                            return (
                                <tr>
                                    <td>{box.name}</td>
                                    <td>{(box.weight).toFixed()}</td>
                                    <td style={{ backgroundColor: `${box.color}` }}></td>
                                    <td>{(box.shippingCost).toFixed()}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="calculations-view">
                    <h3>Total weight from all boxes: <span>{(totalWeight).toFixed()}</span></h3>
                    <h3>Total shipping cost from all boxes :<span>{(totalShippingCost).toFixed()}</span></h3>
                </div>
            </div>

        </div>
    )
}

export default DispatchesView