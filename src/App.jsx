import { paggedDataProvider } from './dataManager';
const getNextVideos = paggedDataProvider();

function App() {

    async function handleClick() {
        const data = await getNextVideos(5);
        console.log(data);
    }

    return (
        <>
            <h1>Sasta YouTube</h1>

            <button
                className='bg-white text-black m-4 p-4 border-2 border-white rounded-lg active:bg-black active:text-white'
                onClick={handleClick}
            >
                Next Videos
            </button>
        </>
    );
}

export default App;
