import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import HomePage from "./pages/HomePage.jsx";
import PlayerPage from "./pages/PlayerPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <App /> }>
            <Route path="/" element={ <HomePage /> } />
            <Route path="videos/:id" element={ <PlayerPage /> }  />
            <Route path="*" element={ <h1>404 Not Found</h1> } />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
