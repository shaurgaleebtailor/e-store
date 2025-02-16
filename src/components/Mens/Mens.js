import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Mens = ()=>{
    const navigator = useNavigate();
    const backToStore = ()=>{
        // navigate back to store
        navigator("/")
      }
    return <Fragment>

        <h1>Mens Page</h1>
        <button onClick={backToStore}>Store</button>
    </Fragment>
}
export default Mens