import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {

    return (
        <>
            <Header />

            <main className="sm:mt-12 md:mt-14" >
                <Outlet />
            </main>
        </>
    );
}

export default App;