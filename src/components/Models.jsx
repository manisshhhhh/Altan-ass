import Model from "./Model";
import { useContext ,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import ModelContext from "../context/ModelContext";
import { useInfiniteQuery } from "react-query";
import { useIntersection } from "@mantine/hooks";


const Models = () => {
    const { models } = useContext(ModelContext);

    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['query'],
        async ({ pageParam = 1 }) => {
            // Since models are coming from ModelContext, you don't need to fetch them separately
            const startIndex = (pageParam - 1) * 3;
            const endIndex = pageParam * 3;
            const slicedModels = models.slice(startIndex, endIndex);
            return slicedModels;
        },
        {
            getNextPageParam: (_, allPages) => {
                return allPages.length + 1;
            },
            initialData: {
                pages: [models.slice(0, 3)],
                pageParams: [1],
            },
        }
    );

    const lastModelRef = useRef(null)
    const { ref, entry } = useIntersection({
        root: lastModelRef.current,
        threshold:1
    })

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage()
    },[entry,fetchNextPage])

    const _models = data?.pages.flatMap((page)=>page)

   
    return (
        <>
            <div className="grid-container">
                {_models?.map((item, index) => {
                    if(index === _models.length-1)return (<Link key={index} ref={ref} to={`/model/${item.id}`}>
                            <Model
                                img={item.image}
                                name={item.name}
                            />
                        </Link>)
                    return (<Link key={index} to={`/model/${item.id}`}>
                            <Model
                                img={item.image}
                                name={item.name}
                            />
                        </Link>)
                })}
             
            </div>
        
        <button className='btn-primary' onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage
                    ? 'Loading more...'
                    : (data.pages.length ?? 0) < 4
                        ? 'Load more'
                        : 'Nothing to load'}
            </button>
            </>
       )
            
}

export default Models;

