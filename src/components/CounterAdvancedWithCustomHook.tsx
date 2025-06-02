import CounterButton from "./CounterButton.tsx";
// import {useCounter} from "../hooks/useCounter.ts";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";

const CounterAdvancedWithCustomHook = () => {

    // custom hook function
    const { count, lastAction, time, increase, decrease, reset } = useAdvancedCounter();

    return (
        <>
            <div className="space-y-4 pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onclick={increase} label="Increase" />
                    <CounterButton onclick={decrease} disabled={count === 0} label="Decrease" />
                    <CounterButton onclick={reset} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red" />
                </div>
            </div>
            <p className="text-center pt-8">Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
        </>
    )
}

export default CounterAdvancedWithCustomHook;