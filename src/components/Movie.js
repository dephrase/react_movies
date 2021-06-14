import React from 'react';

const Movie = ({name, children}) => {
    return (
        <div>
            <p>{children}</p>
        </div>
    )
}

export default Movie;