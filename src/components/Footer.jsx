function Footer () {
  return (
    <>
      <div>
        {/* footer */}
        <footer id='footer'>
          <div className='footer-logo text-center'><img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270239/Coffee%20Shop/logo_n01nml.png' alt='logo coffe shop' /></div>
          <div className='socail-links text-center'>
            <a href='https://github.com/AbelMachaca' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-github' /></a>
            <a href='https://www.linkedin.com/in/abelmachaca/' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-linkedin' /></a>
          </div>
          <div className='credite text-center'>
            Desarrollador <a href='#'> Abel Machaca</a>
          </div>
        </footer>
        {/* footer */}
        <a href='#' className='arrow'><i><img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270248/Coffee%20Shop/up-arrow_afz3io.png' alt='imagen de una flecha para ir arriba' width='50px' /></i></a>
      </div>

    </>
  )
}

export default Footer
