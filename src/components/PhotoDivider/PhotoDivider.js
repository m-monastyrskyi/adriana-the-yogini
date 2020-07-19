import React, {useEffect} from 'react';
import {Parallax} from "react-parallax";

const PhotoDivider = ({photo}) => {
    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            console.log(window.innerHeight,window.innerWidth);
            console.log(Math.round(window.innerWidth / 9));
        })
    })
    return (
        <section>
            <Parallax bgImage={photo} strength={Math.round(window.innerWidth / 4)} bgImageStyle={{top: `-${Math.round(window.innerWidth /10)}px`}}>
                <div style={{ height: "50vh" }}>

                </div>
            </Parallax>

        </section>
    );
};

export default PhotoDivider;