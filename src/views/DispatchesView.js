import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { calculateTotalShippingCost, calculateTotalWeight, fetchUsers } from "../redux/slices/FetchUserSlice";
import { increment } from "../redux/slices/ValueIncrementSlice"

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
        <div className="dispatches-view-container">
            {<div>
                <button onClick={() => dispatch(increment())}
                >
                    Increment value
                </button>
            </div>}

            <table className="table">
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
                               <td>{box.weight}</td>
                               <td>{box.color}</td>
                               <td>{box.shippingCost}</td>
                               <td>{+(box.weight * box.country).toFixed(2)}</td>
                           </tr>
                       );
                   })}
                </tbody>
            </table>
            <div>
                <h3>Total weight from all boxes:<span>{totalWeight}</span></h3>
                <h3>Total shipping cost from all boxes:<span>{+(totalShippingCost).toFixed(2)}</span></h3>
            </div>
        </div>
    )
}

export default DispatchesView