import { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [selected, setSelected] = useState(null)

    const handleChange = (newState) => {
        if (selected === newState) {
            setSelected(() => (null))
        } else {
            setSelected(() => (newState))
        }
        
    }

    const cardContext = { selected, handleChange}

    return <CardContext.Provider value={cardContext}>{children}</CardContext.Provider>;
}
 