// Utilizing Context.Provider and the useEffect Hook to pull images from github repo to populate data store

import React, { useState, useEffect } from 'react';

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        // url fetch for data and set allPhotos to the data
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}