import header_img from '../assets/logo20.png'

function Header (){
    return (
        <div className="landing-page">
        <header>

          <div className="container non_header" >
            <img className='img_header' src={header_img} alt="" />
            <ul className="links">
             <li> <a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contacts">Contact Us</a></li>
              {/* <li><a href="/login">Login</a></li> */}
              <li><a href="/register">Get Started</a></li>
            </ul>
          </div>
        </header>
       
      </div>
    )
}


export default Header