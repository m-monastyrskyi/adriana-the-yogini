import {useState, useEffect} from 'react';
import database from "./firebase";

const UseGetData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ref = database.ref('info');

        ref.on("value", function (snapshot) {
            setData(snapshot.val());
            setLoading(false);
           // console.log(snapshot.val());

        }, function (error) {
            console.log("Error: " + error.code);
        });

    }, []);
    return [data, loading];
};

export default UseGetData;