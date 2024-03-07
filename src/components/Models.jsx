import Model from "./Model";
import models from "../data";
import { Link } from "react-router-dom";

const Models = () => {
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
