import React, {useState} from 'react';

const FunctionalComponent = ({couleur})=>{
    const [color,setColor] = useState(couleur);

    const changecolor = () => {
        const newColor = color === 'red' ? '#'+ Math.floor(Math.random() * 256)+Math.floor(Math.random() * 256)+Math.floor(Math.random() * 256) : '#'+ Math.floor(Math.random() * 256)+Math.floor(Math.random() * 256)+Math.floor(Math.random() * 256);
        setColor(newColor);
    };

    return (
        <div>
            <div style={{color}}>
                je  suis un composant
            </div>
            <button onMouseOver={changecolor}>Changer la couleur</button>
        </div>
    );
};

export default FunctionalComponent;