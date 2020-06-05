import React from 'react';
import logo from './assets/yoga-white.png';

function App() {

    return (
        <>
            <div className="container">
                <img src={logo} height="200px" />
                <div className="text">
                    <h1>ADRIANA – THE YOGINI</h1>
                    <h2>Hatha Yoga & Relaxation Classes</h2>
                    <h3>O MNIE</h3>
                    <p>
                        Zwykształcenia jestem historyczką sztuki oraz dyplomowaną instruktorką hatha jogi i relaksacji.
                        Przygodę z jogą rozpoczęłam w 2014 r. Pasja z czasem przerodziła się w sposób na życie. Chętnie
                        pomagam stawiać pierwsze kroki na macie. Ważne jest dla mnie indywidualne podejście oraz
                        słuchanie ciała – zarówno jego potrzeb, jak i ograniczeń – dlatego lubię pracować w małych
                        grupach. Chciałabym wprowadzać w życie innych więcej świadomego, miękkiego ruchu z uwagą na
                        oddechu i poszanowaniu ciała, więcej odprężenia i relaksu. Poza jogą tańczę i jeżdżę na rowerze.
                        Jestem miłośniczką podróży, poznawania nowych kultur, kina, zdrowego jedzenia i planszówek.
                        Kocham słońce, piękne zapachy i wszelkie rytuały.
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
