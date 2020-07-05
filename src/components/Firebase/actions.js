//import React from 'react';
import database from "./firebase";
import content from "./content.json";

export const writeDefaultInfo = () => {
    const ref = database.ref('info');
    console.dir( content);
    ref.on("value", function (snapshot) {
    }, function (error) {
        console.log("Error: " + error.code);
    });
    ref.set(content);
}
