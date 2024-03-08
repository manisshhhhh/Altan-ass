const Footer = () => {
    let year = new Date().getFullYear();
    
    return (
      <div className="footer-container">
          <footer>Atlan ©{year}</footer>
      </div>
  )
}

export default Footer
