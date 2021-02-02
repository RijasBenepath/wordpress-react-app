import react from 'react'



class Header extends react.Component {
    constructor( props) {
        super( props);
    }

    render() {
        return(
          <header id="header" class="headerSection">
            <nav class="navbar navbar-expand-md navbar-light fixed-top">
              <div class="container">
                <a class="navbar-brand mr-md-auto" href="#"><img src="theme/assets/images/logo.jpg" alt="Lifeonic" /></a>
                <button class="navbar-toggler menu-icon" onclick="menuToggler()" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav mb-2 mb-md-0">
                    <li class="nav-item active">
                      <a class="nav-link" aria-current="page" href="#about-us">About Us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#our-services">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#our-departments">Departments</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#information">Investment</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#footer">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        )
    }
}

export default Header