// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import Layout from "./components/Layout.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./components/UserPage.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";

// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

  return (
    <>
        {/*<Layout>*/}
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
            {/*<OnlineStatus/>*/}
            {/*<NameChanger></NameChanger>*/}
        {/*</Layout>*/}

        <BrowserRouter>
            <Layout>
                <Routes>
                    {/*<Route path="/" element={<HomePage/>} />*/}
                    <Route index element={<HomePage />}/>

                    <Route path="examples?">
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                    </Route>
                    <Route path="users/:usersId" element={<UserPage/>}/>

                </Routes>
            </Layout>

        </BrowserRouter>
    </>
  )
}

export default App
