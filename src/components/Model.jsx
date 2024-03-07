const Model = (props) => {
  return (
    <div className="model-item">
          <img className="model-image" src={props.img} alt="" />
          <h3 className="model-title">{props.name}</h3>
    </div>
  )
}

export default Model
