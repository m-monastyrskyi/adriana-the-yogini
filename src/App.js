import React, {useEffect, useState} from 'react';
import Home from "./components/Home";
import useGetData from "./components/Firebase/useGetData";
import './i18n';
import i18n from "./i18n";

function App() {
    const [data, loading] = useGetData();
    const [language, setLanguage] = useState(i18n.language)


    useEffect(() => {
        if (i18n.language.toLowerCase().includes('en')) {
            i18n.changeLanguage('en')
        } else i18n.changeLanguage('pl')
    }, [])

    // useEffect(() => {
    //      console.log(data);
    // }, [data])

    const changeLanguage = () => {
        if (i18n.language === 'pl') {
            {
                i18n.changeLanguage('en')
            }
        } else i18n.changeLanguage('pl')
        setLanguage(i18n.language)
    }

    return (
        !loading && data
            ? <Home data={data[i18n.language]} changeLanguage={changeLanguage} language={language}/>
            : <div id="preloader">
                <div id="loader"/>
            </div>
    );
}

export default App;
