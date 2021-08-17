// Utilizing Context.Provider and the useEffect Hook to pull images from github repo to populate data store

import React, { useState, useEffect } from 'react';

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        // url fetch for data and set allPhotos to the data
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    // setting favorite icon highlight within Context
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
              
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
        // console.log(newItem)
    } 
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, removeFromCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}