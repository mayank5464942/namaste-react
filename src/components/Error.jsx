import { useRouteError } from "react-router"

const Error=()=>{
    const routerError=useRouteError();
    console.log(routerError);
    return (
        <div className="error">
            <h3>OOps</h3>
            <h3>Something Went wrong!!</h3>
            <h3>Status:{routerError.status}</h3>
        </div>
    )
}

export default Error;