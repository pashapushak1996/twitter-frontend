import { Routes, Route } from 'react-router-dom';

import { Home, SignIn } from "./pages";

function App() {


    return (<div>
        <Routes>
            <Route path={ '/signIn' } element={ <SignIn/> }/>
            <Route path={ '/home' } element={ <Home/> }/>
        </Routes>
    </div>)
}

export default App;
