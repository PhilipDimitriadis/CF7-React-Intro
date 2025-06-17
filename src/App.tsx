// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import Layout from "./components/Layout.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./components/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";
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
                <Routes>
                    {/*<Route path="/" element={<HomePage/>} />*/}
                    <Route element={<RouterLayout/>}>
                        {/*<Route index element={<HomePage />}/>*/}
                        <Route index element={<FocusInput/>}/>
                    </Route>
                    {/*<Route path="examples?" >*/}
                    <Route path="examples" element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplesPage/>}/>
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                        <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                    </Route>
                    <Route path="users/:usersId" element={<UserPage/>}/>
                    <Route path="users" element={<UserPage/>}/>
                    {/*<Route path="files/*" element={<FilePage/>}/>*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
