import React, { useContext ,useState ,useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import ModelContext from '../context/ModelContext';
import Spinner from '../components/shared/Spinner';



const ModelScreen = () => {
  const { id: modelId } = useParams();
  const { getModel } = useContext(ModelContext);
  const [model, setModel] = useState(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back one step in history
  };

  useEffect(() => {
    const fetchModel = async () => {
      const fetchedModel = await getModel(modelId);
      setModel(fetchedModel);
    };

    fetchModel();
  }, [getModel, modelId]);
  
  return model === null ? <Spinner /> : (
    <>
      
    <div className='model-container'>
      <div className='first'>
        <img className='model-img' src={model.image} alt="" />
        <div className='details'>
            <h2  className='model-info'>{model.name}</h2>
          <h2 style={{ fontSize: '20px' }} className='model-title'>Rating:{model.rating}</h2>
          <h2 style={{ fontSize: '15px',color:'black' }} className='model-title username'>Contributed by: {model.username}</h2>
        </div>
      </div>
      <div className="second">
        <p>{model.description}</p>
      </div>
      </div>
      <button className='btn-primary' onClick={goBack}>Go Back</button>
      </>
  );
}

export default ModelScreen
