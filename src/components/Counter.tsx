import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onclick={increaseCount} label="Increase" />
                    <CounterButton onclick={decreaseCount} disabled={count === 0} label="Decrease" />
                    <CounterButton onclick={resetCount} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red" />
                </div>
            </div>
        </>
    )
}

export default Counter;