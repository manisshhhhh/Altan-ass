import { createContext, useState } from "react";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {


    const [models, setModels] = useState([
        {
            id: 1,
            name: 'Image Recognition',
            image: '/images/image1.jpg',
            description: 'Description for Product 5',
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Natural Language Processing (NLP)',
            image: '/images/image2.jpg',
            description: 'Description for Product 3',
            rating: 4.2,

        },
        {
            id: 3,
            name: 'Speech Recognition',
            image: '/images/image3.png',
            description: 'Description for Product 4',
            rating: 4.0,

        },
    ])

    return <ModelContext.Provider value={{
        models,
    }}>
        {children}
    </ModelContext.Provider>
}

export default ModelContext;