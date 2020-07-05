import React from 'react';
import Home from "./components/Home";
import useGetData from "./components/Firebase/useGetData";

function App() {
    const [data, loading] = useGetData();

    return (
        !loading && data
            ? <Home data={data.pl}/>
            : <div id="preloader">
                <div id="loader"/>
            </div>


    );
}

export default App;
