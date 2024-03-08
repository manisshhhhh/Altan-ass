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
            description: 'Image recognition, a vital aspect of computer vision, automatically identifies and categorizes objects or patterns in digital images. It s essential in healthcare, automotive, retail, and security.Algorithms analyze pixel data to extract features for classification.Object detection locates multiple objects, crucial for autonomous vehicles.Image classification assigns labels to images, aiding medical diagnoses and retail inventory.Segmentation delineates object boundaries, important in medical imaging and augmented reality.Challenges include image variability and computational costs.Deep learning, particularly Convolutional Neural Networks(CNNs), dominates image recognition, with transfer learning adapting pre- trained models.Its a powerful technology advancing with computer vision and machine learning innovations.',
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

    const getModel = (id) => {
        return models.find((model) => model.id === id);
    }

    return <ModelContext.Provider value={{
        models,
        addModel,
        getModel,
    }}>
        {children}
    </ModelContext.Provider>
}

export default ModelContext;