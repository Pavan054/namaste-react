// React Router is giving one hook i.e, useRouteError. With this we can display
// some extra details about the error on error page
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oooooooopppsssssssss!</h1>
            <h2>Something went wrong ☹️</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}

export default Error;
