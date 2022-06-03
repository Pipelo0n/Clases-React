import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    color: "red"
}

function tictac () {
    const element = (
        <div>
            <h1 style={style}> Reloj en React! </h1>
            <h1> son las {new Date().toLocaleTimeString()}. </h1>
            <h1> la fecha es la stge. {new Date().toLocaleDateString()}. </h1>
            {/* toLocaleTimeString, mostrará la hora. toLocaleDateString mostrará la fecha */}
        </div>
    );
    const container = document.getElementById('root');
    ReactDOM.render(element, container);
}

setInterval(tictac,1000);