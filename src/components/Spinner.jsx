import spinnerIcon from "/icons/spinner.svg";

function Spinner({ size = 40 }) {
    return (
        <div className="bg-transparent animate-spin"
            style={{ width: size, height: size }}
        >
            <img 
                src={spinnerIcon}
                className="w-full h-full"
            />
        </div>
    );
}

export default Spinner;