import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {

    return (
        <>
            <Header />

            <main className="p-2 sm:mt-12 md:mt-14 sm:mb-12 md:mb-0 md:ml-16" >
                <Outlet />
            </main>

            <NavBar />
        </>
    );
}

export default App;