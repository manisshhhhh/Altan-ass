import React ,{ useState, useContext } from 'react'
import ModelContext from '../context/ModelContext'

const AddModelScreen = () => {
  const { addModel } = useContext(ModelContext);

  const [model, setModel] = useState({
    username: "",
    name: "",
    image: "",
    description: "",
    rating:"",
  })

  function handler(event) {
        const { name, value } = event.target;
        
        setModel((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    addModel(model);

    setModel({
      username: "",
      name: "",
      image: "",
      description: "",
      rating:"",
    })
  
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
          name='username'
          placeholder='Enter the usename'
          value={model.username}
          onChange={handler}
          required
        />
      
        <input
          name='name'
          placeholder='Enter the model name'
          value={model.name}
          onChange={handler}
          required
        />
      
      <input
         name='image'
          placeholder='Enter the image url'
          value={model.image}
          onChange={handler}
          required
      />

      <input
          name='description'
          placeholder='Enter the description'
          value={model.description}
          onChange={handler}
          required
      />

      <input
          name='rating'
          placeholder='Enter the rating'
          type='number'
          value={model.rating}
          onChange={handler}
          required
      />
      
      <button type="submit" className='btn'>Add Model</button>
    </form>
  )
}

export default AddModelScreen
