import React from "react";
import ReactDOM from "react-dom/client";
import stores from "./components/store";
import {Provider} from "react-redux";
import CoinCreate from "./components/CoinCreate";

function App()
{
    return(
        <>
        <Provider store={stores}>
            <CoinCreate/>
        </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App/>)