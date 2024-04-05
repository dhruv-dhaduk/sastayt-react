import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {

    return (
        <>
            <Header />

            <main className="sm:mt-12 md:mt-14" >
                <Outlet />
            </main>

            <NavBar />
        </>
    );
}

export default App;