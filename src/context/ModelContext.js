import { createContext, useState, useEffect } from "react";


const ModelContext = createContext();

export const ModelProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [models, setModels] = useState([]);
    const [featuredModels, setFeaturedModels] = useState([]);

    useEffect(() => {
        fetchModels();
    }, [])

    // fetch Models 
    const fetchModels = async () => {
        const response = await fetch(`/models`)

        const data = await response.json();
        setModels(data);
        setIsLoading(false);
        fetchFeaturedModels();
    }

    // fetch featured Models 
    const fetchFeaturedModels = async () => {
        const response = await fetch(`/models?_sort=-rating&_limit=3`);

        const data = await response.json();
        setFeaturedModels(data);
    }


    const addModel = async (newModel) => {
        const response = await fetch('/models', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newModel)
        })

        const data = await response.json();

        setModels([data, ...models]);
    }

    const getModel = async (id) => {
        try {
            const response = await fetch(`/models/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch model');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching model:', error);
        }
    }



    return <ModelContext.Provider value={{
        models,
        addModel,
        getModel,
        isLoading,
        featuredModels,
    }}>
        {children}
    </ModelContext.Provider>
}

export default ModelContext;