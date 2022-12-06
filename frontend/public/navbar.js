function NavBar(){   
  const [user, setUser] = React.useState();  
  setInterval(() => {
    const user = localStorage.getItem("Name");
    setUser(user);
  },500);
  return(
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="" target="_blank"><img style={{ width: "75px" }} src="car.png"></img></a>      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <br/>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Booking Car</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Price</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">All Data</a>
          </li>   
          
        </ul>            
      </div>    
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">          
            <label>{user}</label>
          </li>         
          
        </ul>
          
        </div>  
        <a className="navbar-brand" href=""><img style={{ width: "75px"}} src="car.png"></img></a>
    </nav>
  );
}