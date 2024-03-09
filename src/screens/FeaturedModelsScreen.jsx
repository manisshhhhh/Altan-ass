import { useContext } from "react"
import ModelContext from "../context/ModelContext";
import { Link } from "react-router-dom";
import Model from "../components/Model";
import Spinner from '../components/shared/Spinner'

const FeaturedModelsScreen = () => {
  const { featuredModels , featuredLoading} = useContext(ModelContext);

  
  return featuredLoading ? <Spinner/> :  (
    <>
      <h1 style={{color:'black' , margin:'30px'}}>Top rated Models by users</h1>
       <div className="feature-container">
          {featuredModels.map((item,index) => {
              return <Link to={`/model/${item.id}`}> <Model
                  key={index}
                  img={item.image}
                  name={item.name}
              /></Link>
          })}
      </div>
      </>
  )
  
}

export default FeaturedModelsScreen
