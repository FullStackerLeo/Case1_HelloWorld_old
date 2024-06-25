// root.tsx
import { Link, Outlet, } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from './error404.tsx'
import Home from '../components/Home';
import StateHooks from '../components/StateHooks/index.tsx';
import UseState from '../components/StateHooks/useState.tsx'
import UseReducer from '../components/StateHooks/useReducer.tsx'
import ReactContext from '../components/StateHooks/reactContext.tsx'
import CountProvider from '../components/StateHooks/reactContext_';
import TanStackQuery from '../components/StateHooks/tanstackquery.tsx';

export const router = createBrowserRouter([
    {
        path: "/", element: <Root />, errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home />, },
            { path: "/statehooks", element: <StateHooks />, },
            { path: "/statehooks/useState", element: <UseState />, },
            { path: "/statehooks/useReducer", element: <UseReducer />, },
            { path: "/statehooks/reactContext", element: <ReactContext />, },
            { path: "/tanstackquery", element: <TanStackQuery />, },
        ],
    },
]);

export default function Root() {
    return (
        <CountProvider>
            <div id="root">
                <div id="sidebar">
                    <h1>OmniDevX React</h1>
                    <div>
                        <form id="search-form" role="search">
                            <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
                            <div id="search-spinner" aria-hidden hidden={true} />
                            <div className="sr-only" aria-live="polite"></div>
                        </form>
                        <form method="post">
                            <button type="submit">New</button>
                        </form>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link to={"/statehooks"}>State Hooks</Link></li>
                            <li><Link to={`/tanstackquery`}>TanStack Query</Link></li>
                        </ul>
                    </nav>
                </div>
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </CountProvider>
    );
}
