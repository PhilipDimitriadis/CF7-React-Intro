type ButtonProps = {
    onclick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}

const CounterButton = ({onclick, disabled = false, label, addClass = "bg-cf-dark-gray"}: ButtonProps) => {
    return (
        <>
            <button
                className={"disabled:bg-gray-600 text-white py-2 px-4 rounded " + addClass}
                onClick={onclick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default CounterButton;