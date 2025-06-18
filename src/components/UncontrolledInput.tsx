import {useRef} from "react";

const UncontrolledInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    //
    // }

    const handleClick = () => {
        alert(`Value: ${inputRef.current?.value}`);
    }

    return (
        <>
            <div className="text-center mt-8 space-x-4">
                <input
                    // value={name}
                    ref={inputRef}
                    // onChange={handleChange}
                    type="text"
                    className="border rounded px-4 py-2"
                />
                <button
                    onClick={handleClick}
                    className="bg-cf-dark-red text-white px-4 py-2 rounded">
                    Show value
                </button>
            </div>
        </>
    )
}

export default UncontrolledInput;