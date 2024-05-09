function Header () {
  return (
    <>

      {/* navbar */}
      <nav className='navbar navbar-expand-lg' id='navbar'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#' id='logo'><img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270239/Coffee%20Shop/logo_n01nml.png' alt='logo de coffee shop' /></a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span><i className='fa-solid fa-bars' style={{ color: 'white', fontSize: 23 }} /></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>About</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#menu'>Menu</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#product'>Product</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#gallary'>Gallary</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>Contact</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#blogs'>Blogs</a>
              </li>
            </ul>
            <form className='d-flex'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success' type='submit'>Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* navbar */}

    </>
  )
}

export default Header
