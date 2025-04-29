import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Electronics.scss";

const Electronics = ()=>{
    const navigator = useNavigate();
    const backToStore = ()=>{
        // navigate back to store
        navigator("/")
      }
    return <Fragment>

        <h1>Electronics Page</h1>
        <div id="back-to-store">
        <button onClick={backToStore}>&larr; Store</button>
        </div>
    </Fragment>
}
export default Electronics;