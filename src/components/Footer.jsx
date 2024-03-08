const Footer = () => {
    let year = new Date().getFullYear();
    
    return (
      <div className="footer-container">
          <footer>atlan ©{year}</footer>
      </div>
  )
}

export default Footer
