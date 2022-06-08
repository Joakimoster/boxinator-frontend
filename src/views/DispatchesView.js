import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createNewBox, getAllBoxes } from "../redux/slices/BoxFormSlice"
import { fetchUsers } from "../redux/slices/FetchUserSlice";

function DispatchesView() {

    const dispatch = useDispatch();
    const { boxes } = useSelector((state) => state.boxes);
    
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
                {boxes && boxes.map((box, i) => <h1 key={i}>{box.name}</h1>)}
            </table>
        </div>
    )
}

export default DispatchesView