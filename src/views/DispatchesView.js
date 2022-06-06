import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createNewBox, getAllBoxes } from "../redux/slices/BoxFormSlice"

function DispatchesView() {

    const box = useSelector((state) => state.box);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBoxes());
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
                    {box.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.weight}</td>
                            <td>{item.color}</td>
                            <td>{item.shippingCost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DispatchesView