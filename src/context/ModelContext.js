import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {


    const [models, setModels] = useState([
        {
            id: 1,
            username: "john",
            name: 'Image Recognition',
            image: '/images/image1.jpg',
            description: 'Description for Product 5',
            rating: 4.5,
        },
        {
            id: 2,
            username: 'Manish',
            name: 'Natural Language Processing (NLP)',
            image: '/images/image2.jpg',
            description: 'Description for Product 3',
            rating: 4.2,

        },
        {
            id: 3,
            username: 'David',
            name: 'Speech Recognition',
            image: '/images/image3.png',
            description: 'Description for Product 4',
            rating: 4.0,

        },
        {
            id: 4,
            username: 'Jhonsan',
            name: 'Speech Recognition',
            image: 'https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
            description: 'Description for Product 4',
            rating: 4.0,
        }
    ])

    const addModel = (newModel) => {
        newModel.id = uuidv4();
        setModels([newModel, ...models]);
    }

    return <ModelContext.Provider value={{
        models,
        addModel,
    }}>
        {children}
    </ModelContext.Provider>
}

export default ModelContext;