// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
import NameChanger from "./components/NameChanger.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";

// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

  return (
    <>
        <Layout>
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Component with Props"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title="Is a Arrow Component with Props"*/}
            {/*    description="This is a description"*/}
            {/*/>*/}
            {/*<ClassComponentWithState/>*/}

            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook></CounterWithCustomHook>*/}
            {/*<CounterAdvancedWithCustomHook></CounterAdvancedWithCustomHook>*/}
            {/*<CounterWithReducer></CounterWithReducer>*/}
            {/*<Todo></Todo>*/}
            <NameChanger></NameChanger>
        </Layout>
    </>
  )
}

export default App
