import React from 'react';
import Home from "./components/Home";
import useGetData from "./components/Firebase/useGetData";
import data from './components/Firebase/content.json'

function App() {
    //const [data, loading] = useGetData();

    return (
        <Home data={data.pl}/>
        // !loading && data
        //     ? <Home data={data.pl}/>
        //     : <div id="preloader">
        //         <div id="loader"/>
        //     </div>
    );
}

export default App;
