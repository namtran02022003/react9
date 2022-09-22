import './App.css';
function App(){
    return (
        <div>
        <div className="content-image">
          <img src="https://www.w3schools.com/w3images/app.jpg" width="100%" />
          <div className="text-icon">
            <div className="text-icon-content">
              <h1>Take photos with our app</h1>
              <hr />
              <p>Super simple installment: free of charge</p>
              <p>
                <button className="button-header">Download
                  <i className="fa fa-android" />
                  <i className="fa fa-apple" />
                  <i className="fa fa-windows" />
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="content-app">
          <div className="menu-left">
            <h1 style={{fontSize: '64px', margin: 0}}>The App</h1>
            <h1 style={{fontSize: '64px', margin: 0, color: 'green'}}>Why buy it?</h1>
            <p><b style={{fontSize: '24px'}}>Take photos like a pro.</b>You should buy this app because lorem ipsum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              <button className="button-menu">
                <i className="fa fa-download" /> Download Application
              </button>
            </p>
            <p>Available for
              <i className="fa fa-android text-green" />
              <i className="fa fa-apple w3-xlarge" />
              <i className="fa fa-windows  text-blue" />
            </p>
          </div>
          <div className="menu-right">
            <img src="https://www.w3schools.com/w3images/img_app.jpg" className width={335} height={471} style={{maxWidth: '100%', float: 'right'}} />
          </div>
        </div>
        <div className="content-app-small">
          <div className="menu-small">
            <div className="menu-left-small">
              <img src="https://www.w3schools.com/w3images/app5.jpg" style={{width: '335px', height: '471px', maxWidth: '100%', borderRadius: '5px'}} />
            </div>
            <div className="menu-right-small">
              <h1 style={{margin: 0, fontSize: '64px'}}>Clarity</h1>
              <h2 style={{color: 'red', fontSize: '50px', margin: 0}}>Pixels, who?</h2>
              <p><b style={{fontSize: '24px'}}>A revolution in resolution.</b>Sharp and clear photos with the world's best
                photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
        <div className="content-icon">
          <h1 style={{fontSize: '64px', margin: 0}}>Features</h1>
          <p>This app is just so lorem ipsum.</p>
          <div className="div-flex">
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
          </div>
          <div className="div-flex">
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
          </div>
          <div className="div-flex">
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
            <div className="menu-flex">
              <p style={{margin: 0}} className="div-font"><i className="fa fa-bolt " /></p>
              <p style={{margin: 0}}>Fast</p>
            </div>
          </div>
        </div>
        <h1 style={{fontSize: '64px', margin: '30px 0 0 0', textAlign: 'center'}}>Pricing</h1>
        <p style={{textAlign: 'center'}}>Choose a pricing plan that fits your needs.</p>
        <div className="menu-flex2">
          <div className="menu-flex2-small">
            <div className="content-menu-flex-small">
              <h2 style={{margin: 0, padding: '30px 0', backgroundColor: '#616161', color: '#fff', borderBottom: '1px solid #ddd'}}>
                Basic</h2>
              <p><b>250</b> Photos</p>
              <hr />
              <p><b>250</b> Photos</p>
              <hr />
              <p><b>250</b> Photos</p>
              <hr />
              <p><b>250</b> Photos</p>
              <hr />
              <h2 style={{margin: 0, padding: '30px 0', color: 'rgb(134, 132, 132)'}}>$ 25</h2>
              <hr style={{marginBottom: 0}} />
              <p style={{margin: 0, padding: '20px 0', backgroundColor: '#f1f1f1'}}>
                <button className="button-flex"><i className="fa fa-download" />
                  Download
                </button>
              </p>
            </div>
          </div>
          <div className="menu-flex2-small">
            <div className="content-menu-flex-small">
              <h2 style={{margin: 0, padding: '30px 0', backgroundColor: 'red', color: '#fff', borderBottom: '1px solid #ddd'}}>Premium
              </h2>
              <p><b>250</b> Photos</p>
              <hr />
              <p><b>250</b> Photos</p>
              <hr />
              <p><b>250</b> Photos</p>
              <hr />
              <p><b>250</b> Photos</p>
              <hr />
              <h2 style={{margin: 0, padding: '30px 0', color: 'rgb(134, 132, 132)'}}>$ 25</h2>
              <hr style={{marginBottom: 0}} />
              <p style={{margin: 0, padding: '20px 0', backgroundColor: '#f1f1f1'}}>
                <button className="button-flex"><i className="fa fa-download" />
                  Download
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p><i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
          </p>
          <p>Powered by<a href="#"> w3.css</a></p>
        </div>
      </div>
    )
}
export default App;