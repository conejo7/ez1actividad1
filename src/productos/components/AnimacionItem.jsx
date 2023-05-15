import React from 'react';

export const AnimacionItem = ({title, url ,id}) => {
    return (
        <div className="card-grid">
            <img src={ url } alt={ title } />
            <p>Disfruta de nuestra calidad</p>
        </div>
    );
};
