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

  console.log("re-render");

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

    // Count words in the description
    const wordCount = model.description.split(/\s+/).filter(word => word !== '').length;

    // Check if the word count is less than 100
    if (wordCount < 50) {
      alert("Description should be at least 50 words long.");
      return;
    }

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
        type='text'
        placeholder='Enter the usename'
        value={model.username}
        onChange={handler}
        pattern="[A-Za-z ]+"
        title="Please enter only alphabetical characters"
        required
        />
      
        <input
        name='name'
         type='text'
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
          pattern="https?://.*"
          title="Please enter a valid URL starting with http:// or https://"
          required
      />

      <input
          name='description'
          placeholder='Enter the description'
          value={model.description}
          onChange={handler}
          // minLength="100"
          required
      />

      <input
          name='rating'
          placeholder='Enter the rating'
          type='number'
          value={model.rating}
          onChange={handler}
          min="0"
          max="10"
          required
      />
      
      <button type="submit" className='btn'>Add Model</button>
    </form>
  )
}

export default AddModelScreen
