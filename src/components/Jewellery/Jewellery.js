import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Jewellery = ()=>{
    const navigator = useNavigate();
    const backToStore = ()=>{
        // navigate back to store
        navigator("/")
      }
    return <Fragment>

        <h1>Jewellery Page</h1>
        <button onClick={backToStore}>Store</button>
    </Fragment>
}
export default Jewellery;