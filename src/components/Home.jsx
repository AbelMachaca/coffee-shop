function Home () {
  return (
    <>

      <div>
        {/* home section */}
        <section id='home'>
          <div className='position-relative overflow-hidden p-3 p-md-5  text-center bg-body-tertiary'>
            <div className='content  p-lg-5 mx-auto my-5 '>
              <h1 className='display-3 fw-bold'>Comienza el Día con un <br /> Café Recién Hecho</h1>
              <h4 className='fw-normal  mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, fugit
                <br />ipsum dolor sit amet consectetur.
              </h4>
              <button id='btn'>Compra Ahora</button>
            </div>
          </div>
        </section>
        {/* home section */}
        {/* about section */}
        <div className='about' id='about'>
          <div className='container'>
            <div className='heading'>About <span>Us</span></div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270238/Coffee%20Shop/about_oi0w3u.png' alt='una taza de cafe' />
                </div>
              </div>
              <div className='col-md-6'>
                <h3>¿Qué Hace Especial a Nuestro Café?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima numquam porro consequuntur ipsum, nulla aliquam amet quam consequatur expedita.
                  <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus dicta quia maxime! Suscipit rerum similique non perferendis maiores rem, cumque explicabo exercitationem deserunt illum in aperiam natus impedit recusandae?
                  <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem voluptates harum, quis excepturi voluptatum!
                </p>
                <button id='about-btn'>Conoce Más</button>
              </div>
            </div>
          </div>
        </div>
        {/* about section */}
        {/* top cards */}
        <section className='top-cards'>
          <div className='heading2'>Top <span>Categories</span></div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270243/Coffee%20Shop/c1_af0yp2.png' alt='una taza de cafe' />
                </div>
              </div>
              <div className='col-md-4 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270254/Coffee%20Shop/c2_vejlmt.png' alt='una taza de cafe' />
                </div>
              </div>
              <div className='col-md-4 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270252/Coffee%20Shop/c3_tvanlm.png' alt='una taza de cafe' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* top cards */}
        {/* menu */}
        <section className='menu' id='menu'>
          <div className='container'>
            <div className='heading3'>Menu</div>
          </div>
          <div className='container' id='container2'>
            <div className='row'>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270240/Coffee%20Shop/m1_vmxlnr.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$99 <strike>$100</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270243/Coffee%20Shop/m2_agorfu.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$90 <strike>$110</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270249/Coffee%20Shop/m3_zlh2zr.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$100 <strike>$200</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270253/Coffee%20Shop/m4_ed1bh3.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$120 <strike>$150</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row' style={{ marginTop: 50 }}>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270253/Coffee%20Shop/m5_qv5svz.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$200 <strike>$300</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270243/Coffee%20Shop/m6_dj3izd.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$30 <strike>$50</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270244/Coffee%20Shop/m7_uj29bi.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$100 <strike>$200</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270244/Coffee%20Shop/m8_hx3ayf.png' alt='una taza de cafe' />
                  <div className='card-body'>
                    <div className='star text-center'>
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                      <i className='fa-regular fa-star' />
                    </div>
                    <h3>Coffee</h3>
                    <p>$120 <strike>$150</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* menu */}
        {/* product */}
        <section id='product' className='product'>
          <div className='container'>
            <div className='heading4'>Products</div>
          </div>
          <div className='container' id='container3'>
            <div className='row'>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270248/Coffee%20Shop/morenita_sg9r49.png' alt='cafe la Morenita' />
                  <div className='card-body'>
                    <h3>Morenita</h3>
                    <p>$120 <strike>$150</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270239/Coffee%20Shop/dolca_sbprpa.png' alt='cafe Dolca' />
                  <div className='card-body'>
                    <h3>Dolca</h3>
                    <p>$250 <strike>$350</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270239/Coffee%20Shop/hispanos_htq1ap.png' alt='cafe Hispanos' />
                  <div className='card-body'>
                    <h3>Hispanos</h3>
                    <p>$130 <strike>$150</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270248/Coffee%20Shop/virginia_qqtezi.png' alt='cafe La virginia' />
                  <div className='card-body'>
                    <h3>LaVirginia</h3>
                    <p>$120 <strike>$150</strike> <span><i className='fa-solid fa-cart-shopping' /></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* product */}
        {/* our gallary */}
        <div className='container' id='gallary'>
          <h1>Our <span>Gallary</span></h1>
          <div className='row' style={{ marginTop: 30 }}>
            <div className='col-md-4 py-3 py-md-0'>
              <div className='card'>
                <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270238/Coffee%20Shop/cof2_sjohkl.jpg' alt='una taza de cafe' />
              </div>
            </div>
            <div className='col-md-4 py-3 py-md-0'>
              <div className='card'>
                <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270243/Coffee%20Shop/cof3_yr0pqm.jpg' alt='una taza de cafe' />
              </div>
            </div>
            <div className='col-md-4 py-3 py-md-0'>
              <div className='card'>
                <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270239/Coffee%20Shop/cof4_akje13.jpg' alt='una taza de cafe' />
              </div>
            </div>
          </div>
          <div className='row' style={{ marginTop: 30 }}>
            <div className='col-md-4 py-3 py-md-0'>
              <div className='card'>
                <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270271/Coffee%20Shop/image4_zfp1sa.png' alt='una taza de cafe' />
              </div>
            </div>
            <div className='col-md-4 py-3 py-md-0'>
              <div className='card'>
                <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270254/Coffee%20Shop/image5_ngrio1.png' alt='una taza de cafe' />
              </div>
            </div>
            <div className='col-md-4 py-3 py-md-0'>
              <div className='card'>
                <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270275/Coffee%20Shop/image6_obcq2f.png' alt='una taza de cafe' />
              </div>
            </div>
          </div>
        </div>
        {/* our gallary */}
        {/* contact */}
        <section className='contact' id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 '>
                <div className='heading6'>Contact <span>Us</span></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis
                  <br />ipsum dolor sit amet consectetur.
                </p>
                <input className='form-control' type='text' placeholder='Name' aria-label='default input example' /><br />
                <input className='form-control' type='email' placeholder='Email' aria-label='default input example' /><br />
                <input className='form-control' type='number' placeholder='Number' aria-label='default input example' /><br />
                <button id='contact-btn'>Enviar Mensaje</button>
              </div>
              <div className='col-md-5' id='col'>
                <h1>Info</h1>
                <p><i className='fa-regular fa-envelope' /> example@gmail.com</p>
                <p><i className='fa-solid fa-phone' /> +5491199999999</p>
                <p><i className='fa-solid fa-building-columns' /> Buenos Aires, CABA</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, culpa</p>
              </div>
            </div>
          </div>
        </section>
        {/* contact */}
        {/* blogs */}
        <section className='blogs' id='blogs'>
          <h1>Latest <span>Blogs</span></h1>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270238/Coffee%20Shop/b1_xdlukr.png' alt='imagen de blog' />
                  <div className='card-body'>
                    <h3>Lorem, ipsum dolor</h3>
                    <h5>Admin / 30 Marzo 2024</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis aperiam magnam nostrum quae distinctio, id minima repellat eveniet quaerat.</p>
                    <button id='blogbtn'>Leer Más</button>
                  </div>
                </div>
              </div>
              <div className='col-md-4 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270238/Coffee%20Shop/b2_xh28fy.png' alt='imagen de blog' />
                  <div className='card-body'>
                    <h3>Lorem, ipsum dolor</h3>
                    <h5>Admin / 30 Marzo 2024</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis aperiam magnam nostrum quae distinctio, id minima repellat eveniet quaerat.</p>
                    <button id='blogbtn'>Leer Más</button>
                  </div>
                </div>
              </div>
              <div className='col-md-4 py-3 py-md-0'>
                <div className='card'>
                  <img src='https://res.cloudinary.com/dsuuinvqp/image/upload/v1715270238/Coffee%20Shop/b3_ggbl0j.png' alt='imagen de blog' />
                  <div className='card-body'>
                    <h3>Lorem, ipsum dolor</h3>
                    <h5>Admin / 30 Marzo 2024</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis aperiam magnam nostrum quae distinctio, id minima repellat eveniet quaerat.</p>
                    <button id='blogbtn'>Leer Más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blogs */}
      </div>

    </>

  )
}

export default Home
