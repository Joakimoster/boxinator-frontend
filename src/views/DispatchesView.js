import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/slices/FetchUserSlice";

function DispatchesView() {

    const dispatch = useDispatch();
    const { boxes } = useSelector((state) => state.boxes);

    const { totalWeight } = useSelector((state) => state.incrementer.totalWeight);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (
        <div className="dispatches-view-container">
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
                   {boxes && boxes.map((box) => {
                       return (
                           <tr>
                               <td>{box.name}</td>
                               <td>{box.weight}</td>
                               <td>{box.color}</td>
                               <td>{box.shippingCost}</td>
                           </tr>
                       );
                   })}
                </tbody>
            </table>
            <div>
                <h3>Total weight from all boxes:</h3>
                <h3>Total shipping cost from all boxes: </h3>
            </div>
        </div>
    )
}

export default DispatchesView