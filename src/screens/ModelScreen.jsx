import React, { useContext ,useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ModelContext from '../context/ModelContext';
import Spinner from '../components/shared/Spinner';

const ModelScreen = () => {
  const { id: modelId } = useParams();
  const { getModel } = useContext(ModelContext);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const fetchModel = async () => {
      const fetchedModel = await getModel(modelId);
      setModel(fetchedModel);
    };

    fetchModel();
  }, [getModel, modelId]);
  
  return model===null ? <Spinner /> : (
    <div className='model-container'>
      <div className='first'>
        <img className='model-img' src={model.image} alt="" />
        <div className='details'>
          <h2 className='model-info'>{model.name}</h2>
          <h2 style={{ fontSize: '20px' }} className='model-title'>Rating:{model.rating}</h2>
          <h2 style={{ fontSize: '15px' }} className='model-title username'>Contributed by: {model.username}</h2>
        </div>
      </div>
      <div className="second">
        <p>{model.description}</p>
      </div>
    </div>
  );
}

export default ModelScreen
