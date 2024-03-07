import Model from "./Model";
// import models from "../data";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ModelContext from "../context/ModelContext";

const Models = () => {
    const { models } = useContext(ModelContext);
  return (
      <div className="grid-container">
          {models.map((item,index) => {
              return <Link to={`/model/:${item.id}`}> <Model
                  key={index}
                  img={item.image}
                  name={item.name}
              /></Link>
          })}
      
      </div>
  )
}

export default Models
