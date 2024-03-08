import React,{useContext} from 'react'
import Models from "../components/Models";
import ModelContext from '../context/ModelContext';
import Spinner from '../components/shared/Spinner';


const HomeScreen = () => {
  const { isLoading } = useContext(ModelContext);

  return isLoading ? <Spinner/> :(
    <div>
      <h1 className="title">Latest Models</h1>
      <Models/>
    </div>
  )
}

export default HomeScreen
