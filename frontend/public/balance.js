function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <div class="createcard">
      <status>
      {status}
      </status>
      <body class="body">
      {show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
      </body>
    </div>
    // <Card
    //   bgcolor="info"
    //   header="Balance"
    //   status={status}
    //   body={show ?
    //     <BalanceForm setShow={setShow} setStatus={setStatus}/> :
    //     <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    // />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Your Booking has been Successfully</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
        
      }}>
        Check book again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [name, setName] = React.useState('');
  const [model, setmodel] = React.useState('');  


  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>

    email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>
    Model<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter model" 
      value={model} 
      onChange={e => setmodel(e.currentTarget.value)} 
      /><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Booking Car
    </button>

  </>);
}