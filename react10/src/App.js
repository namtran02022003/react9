import './App.css';


function App(){
    return (
        <div>
        <div className="header">
          <div className="menu-header">
            <a style={{backgroundColor: 'rgb(54, 150, 54)'}} href="#" className="menu-a-header">
              <i className="fa fa-home w3-margin-right" />
              logo
            </a>
            <a href="#" className="menu-a-header">team</a>
            <a href="#" className="menu-a-header">work</a>
            <a href="#" className="menu-a-header">price</a>
            <a href="#" className="menu-a-header">contact</a>
            <a href="#" className="menu-a-header">Dropdown </a>
          </div>
          <div className="menu-header">
            <a href="#" className="menu-a-header"><i className="fa fa-search" /></a>
          </div>
        </div>
        <div className="image-header">
          <img src="https://www.w3schools.com/w3images/sailboat.jpg" width="100%" style={{maxHeight: '600px'}} />
          <span className="span-header">
            LEARN W3.CSS
          </span>
        </div>
        <h2 style={{marginTop: '50px'}} className="center">OUR TEAM</h2>
        <p className="center">Meet the team - our office rats:</p>
        <div className="menu-float">
          <div className="menu-float-small">
            <p>
              <img className="hover" src="https://www.w3schools.com/w3images/avatar.jpg" style={{width: '45%', borderRadius: '50%'}} />
            </p>
            <h3 className="center">Johnny Walker</h3>
            <p>Web Designer</p>
          </div>
          <div className="menu-float-small">
            <p>
              <img className="hover" src="https://www.w3schools.com/w3images/avatar.jpg" style={{width: '45%', borderRadius: '50%'}} />
            </p>
            <h3 className="center">Johnny Walker</h3>
            <p>Web Designer</p>
          </div>
          <div className="menu-float-small">
            <p>
              <img className="hover" src="https://www.w3schools.com/w3images/avatar.jpg" style={{width: '45%', borderRadius: '50%'}} />
            </p>
            <h3 className="center">Johnny Walker</h3>
            <p>Web Designer</p>
          </div>
          <div className="menu-float-small">
            <p>
              <img className="hover" src="https://www.w3schools.com/w3images/avatar.jpg" style={{width: '45%', borderRadius: '50%'}} />
            </p>
            <h3 className="center">Johnny Walker</h3>
            <p>Web Designer</p>
          </div>
        </div>
        <div className="div-color">
          <div style={{padding: '64px 0'}} className="menu-float div-padding">
            <div style={{color: '#fff', backgroundColor: '#333333'}} className="menu-samll4">
              <h2>Our Work</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="menu-samll4">
              <div className="content-menu-small4">
                <img src="https://www.w3schools.com/w3images/snow.jpg" width="100%" />
                <div className="div-padding">
                  <h3>Customer 1</h3>
                  <h4>Trade</h4>
                  <p>blablabla</p>
                  <p>blablabla</p>
                  <p>blablabla</p>
                  <p>blablabla</p>
                </div>
              </div>
            </div>
            <div className="menu-samll4">
              <div className="content-menu-small4">
                <img src="https://www.w3schools.com/w3images/snow.jpg" width="100%" />
                <div className="div-padding">
                  <h3>Customer 1</h3>
                  <h4>Trade</h4>
                  <p>blablabla</p>
                  <p>blablabla</p>
                  <p>blablabla</p>
                  <p>blablabla</p>
                </div>
              </div>
            </div>
            <div className="menu-samll4">
              <div className="content-menu-small4">
                <img src="https://www.w3schools.com/w3images/snow.jpg" width="100%" />
                <div className="div-padding">
                  <h3>Customer 1</h3>
                  <h4>Trade</h4>
                  <p>blablabla</p>
                  <p>blablabla</p>
                  <p>blablabla</p>
                  <p>blablabla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{marginTop: '50px'}} className="center">PRICING</h2>
        <p className="center">Choose a pricing plan that fits your needs.</p>
        <div className="menu-float div-padding">
          <div className="menu-float3">
            <ul className="content-menu-float3">
              <li className="list-menu-li basic">
                basic
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <h1 className="center">
                  <i className="fa fa-usd" />
                  10
                </h1>
              </li>
              <li className="list-menu-li button">
                <button className="button-li">
                  <i className="fa fa-check" />
                  sign up
                </button>
              </li>
            </ul>
          </div>
          <div className="menu-float3">
            <ul className="content-menu-float3">
              <li className="list-menu-li pro">
                pro
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <h1 className="center">
                  <i className="fa fa-usd" />
                  10
                </h1>
              </li>
              <li className="list-menu-li button">
                <button className="button-li">
                  <i className="fa fa-check" />
                  sign up
                </button>
              </li>
            </ul>
          </div>
          <div className="menu-float3">
            <ul className="content-menu-float3">
              <li className="list-menu-li basic">
                Premium
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <b>10GB</b>
                Storage
              </li>
              <li className="list-menu-li">
                <h1 className="center">
                  <i className="fa fa-usd" />
                  10
                </h1>
              </li>
              <li className="list-menu-li button">
                <button className="button-li">
                  <i className="fa fa-check" />
                  sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div style={{backgroundColor: '#f0f0f0', padding: '64px 0'}} className="div-padding">
          <div className="menu-float">
            <div className="menu40 div-padding">
              <h2 style={{marginBottom: 0}}>Contact Us</h2>
              <div style={{width: '200px', height: '5px', backgroundColor: '#777'}} />
              <h2>Address</h2>
              <p>Swing by for a cup of coffee, or whatever.</p>
              <p><i className="fa f fa-map-marker " />&nbsp;&nbsp;Chicago, US</p>
              <p><i className="fa f fa-phone " />&nbsp;&nbsp;+00 1515151515</p>
              <p><i className="fa f fa-envelope-o " />&nbsp;&nbsp;test@test.com</p>
            </div>
            <div className="menu60 div-padding">
              <form>
                <label>name</label>
                <input type="text" />
                <label>email</label>
                <input type="text" />
                <label>message</label>
                <input type="text" />
                <input style={{width: '24px', height: '24px', position: 'relative', top: '6px'}} type="checkbox" />
                <label>I Like it!</label>
                <button className="button-right">send</button>
              </form>
            </div>
          </div>
        </div>
        <img src="https://www.w3schools.com/w3images/map.jpg" width="100%" />
        <div className="footer">
          <h2>Follow Us</h2>
          <p>
            <a href="#" className="a-footer">
              <i className="fa fa-facebook" />
            </a>
            <a href="#" className="a-footer">
              <i className="fa fa-twitter" />
            </a>
            <a href="#" className="a-footer">
              <i className="fa fa-google-plus" />
            </a>
            <a href="#" className="a-footer">
              <i className="fa fa-instagram" />
            </a>
            <a href="#" className="a-footer">
              <i className="fa fa-linkedin" />
            </a>
          </p>
          <p>Powered by<a href="#">w3.css</a> </p>
        </div>
      </div>
    )
}
export default App;