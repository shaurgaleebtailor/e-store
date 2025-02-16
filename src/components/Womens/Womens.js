import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Womens = ()=>{
    const navigator = useNavigate();
    const backToStore = ()=>{
        // navigate back to store
        navigator("/")
      }
    return <Fragment>

        <h1>Womens Page</h1>
        <button onClick={backToStore}>Store</button>
    </Fragment>
}
export default Womens