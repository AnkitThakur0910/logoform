import './App.css';
import Home from './components/Home';


function App() {
  
  function changebackground()
  {
    document.getElementsByClassName('install-b')[0].classList.add('cg-bg');
    document.getElementsByClassName('i-b')[0].classList.add('cg-fc');
  }

  function backtonormal()
  {
    document.getElementsByClassName('install-b')[0].classList.remove('cg-bg');
    document.getElementsByClassName('i-b')[0].classList.remove('cg-fc');
  }
  function changebackground2()
  {
    document.getElementsByClassName('install-c')[0].classList.add('cg-bg2');
    
  }

  function backtonormal2()
  {
    document.getElementsByClassName('install-c')[0].classList.remove('cg-bg2');
    
  }
 function shownav()
 {
 
    document.getElementsByClassName('navbar2')[0].classList.add('r3')
    
 }

 
 
  return (
    <div className="App">
      <div style={{display : "block",boxSizing : "border-box"}}>
      <svg onClick={()=>shownav()} style={{float : "right",fontSize : "24px"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="cursor-pointer r1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
      <div className='r2' style = {{height : "75px",alignItems : "center",backgroundColor : "rgba(250,250,250,.95)",width : "100%",justifyContent:"center",position : "fixed",zIndex:"10000000"}}>
        <div className = "navbar" >
          <span  href='/'>
          <img style={{height:"8rem", width :"8rem",color :"transparent",marginTop:"5px",marginRight : "2rem"}} src='https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg' alt='logo'/>
          </span>
          
          <span href='/products' style={{paddingRight : "0.5rem",textTransform: "capitalize"}}>
           Products
          </span>
          <i className="fa fa-angle-down" style={{fontSize:"0.953rem",marginRight:"3rem"}}></i>
         
          <span href='/pricing' style={{marginRight:"3rem",textTransform: "capitalize"}}>
            Pricing
          </span>
          <span href='/Guides' style={{marginRight:"3rem",textTransform: "capitalize"}}>
            Guides
          </span>
          <span href='/Templates' style={{marginRight:"3rem",textTransform: "capitalize"}}>
            Templates
          </span>
          <div style={{display : "flex",boxSizing : "border-box",justifyContent:"center",alignItems:"center",marginLeft: "auto"}}>
           <button onMouseOver={()=>changebackground()} onMouseOut = {()=>backtonormal()} className = "install-b"><span className='i-b' style={{fontSize : "16px",fontWeight: 600,letterSpacing: "-.02em"}}>Install Now</span></button>
           <button onMouseOver={()=>changebackground2()} onMouseOut = {()=>backtonormal2()} className = "install-c"><span className='i-c' style={{fontSize : "16px",fontWeight: 600,letterSpacing: "-.02em"}}>BoloForms Premium</span></button>
          
          </div>
        </div>
     
        
      </div>
      <div className = "navbar2" >
          <span  href='/'>
          <img style={{height:"8rem", width :"8rem",color :"transparent",marginTop:"5px",marginRight : "2rem"}} src='https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg' alt='logo'/>
          </span>
          
          <span href='/products' style={{paddingRight : "0.5rem",textTransform: "capitalize"}}>
           Products
          </span>
          <i className="fa fa-angle-down" style={{fontSize:"0.953rem",marginRight:"3rem"}}></i>
         
          <span href='/pricing' style={{marginRight:"3rem",textTransform: "capitalize"}}>
            Pricing
          </span>
          <span href='/Guides' style={{marginRight:"3rem",textTransform: "capitalize"}}>
            Guides
          </span>
          <span href='/Templates' style={{marginRight:"3rem",textTransform: "capitalize"}}>
            Templates
          </span>
          <div style={{display : "flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",gap : "2.2rem"}}>
           <button onMouseOver={()=>changebackground()} onMouseOut = {()=>backtonormal()} className = "install-b"><span className='i-b' style={{fontSize : "16px",fontWeight: 600,letterSpacing: "-.02em"}}>Install Now</span></button>
           <button onMouseOver={()=>changebackground2()} onMouseOut = {()=>backtonormal2()} className = "install-c"><span className='i-c' style={{fontSize : "16px",fontWeight: 600,letterSpacing: "-.02em"}}>BoloForms Premium</span></button>
          
          </div>
        </div>
      <Home className = "r5"></Home>

      </div>
     
     
    </div>
   
  );
}

export default App;
