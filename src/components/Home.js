import React, { useEffect } from 'react'
import './style.css'
function Home() {

    function scrolling()
    {
        let flag=0
        let x = document.getElementsByClassName('over-a')[0].scrollLeft.toFixed();
      let id = setInterval(() => {

          if(flag===0)
          {
            flag++;
          }
          else{
          let x2 = document.getElementsByClassName('over-a')[0].scrollLeft.toFixed();
          if(x===x2)
          {
            console.log("my")
            clearInterval(id)
          }
          x=x2
          }
            
           
        document.getElementsByClassName('over-a')[0].scrollBy(200, 0);
       
          
        }, 3000)
    }
    function func1(i) {
        document.getElementsByClassName('desc')[i].classList.add('desc2');
        document.getElementsByClassName('f-s')[i].classList.add('des')
    }

    function func2(i) {
        document.getElementsByClassName('desc')[i].classList.remove('desc2');
        document.getElementsByClassName('f-s')[i].classList.remove('des')
    }

    function elevation(i)
    {
        document.getElementsByClassName('elev')[i].classList.add('elev2');
    }
    function delevate(i)
    {
        document.getElementsByClassName('elev')[i].classList.remove('elev2');
    }
    
    useEffect(() => {
        let flag=0
        let x = document.getElementsByClassName('over-a')[0].scrollLeft.toFixed();
      let id = setInterval(() => {

          if(flag===0)
          {
            flag++;
          }
          else{
          let x2 = document.getElementsByClassName('over-a')[0].scrollLeft.toFixed();
          if(x===x2)
          {
            console.log("my")
            clearInterval(id)
          }
          x=x2
          }
            
           
        document.getElementsByClassName('over-a')[0].scrollBy(200, 0);
       
          
        }, 3000)

       
    })

    function showtext1(i)
    {
        document.getElementsByClassName('d1')[i].classList.add('fa-angle-down2')
        document.getElementsByClassName('d1')[i].classList.remove('fa-angle-down')

        document.getElementsByClassName('d2')[i].classList.add('fa-angle-up')
        document.getElementsByClassName('d2')[i].classList.remove('fa-angle-up2')

        document.getElementsByClassName('ts')[i].classList.add('st2');
        document.getElementsByClassName('ts')[i].classList.remove('st');
       
    }
    function hidetext(i)
    {
        document.getElementsByClassName('d1')[i].classList.add('fa-angle-down')
        document.getElementsByClassName('d1')[i].classList.remove('fa-angle-down2')

        document.getElementsByClassName('d2')[i].classList.add('fa-angle-up2')
        document.getElementsByClassName('d2')[i].classList.remove('fa-angle-up')
        document.getElementsByClassName('ts')[i].classList.add('st');
        document.getElementsByClassName('ts')[i].classList.remove('st2');
    }
    return (
        <div style={{ display: "block", boxSizing: "border-box", paddingTop: "3rem", paddingLeft: "5rem", paddingRight: "5rem", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", position: "fixed", top: "35%", left: "1%" }}>

                <div onMouseOut={() => func2(0)} onMouseOver={() => func1(0)} className='bg-g' style={{ display: "flex", alignItems: "center", height: "10px", width: "10px", borderRadius: "50%", marginTop: "2rem", }}>
                    <div className='desc' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.1rem" }}>
                        <svg style={{ color: "white" }} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M2.284 22.158c.001.95.679 1.752 1.62 1.792 1.31.055 2.623.022 3.935.022.954 0 1.786-.865 1.76-1.954-.029-1.221.018-2.445.029-3.667l.045-4.988c.003-.305.046-.362.335-.44a4.242 4.242 0 0 1 2.013-.067c1.23.262 2.129 1.21 2.261 2.46.066.62.07 1.249.078 1.874.025 1.64.038 3.28.054 4.921.01 1.087.796 1.877 1.883 1.882 1.171.006 2.342.008 3.513.007 1.106-.002 1.895-.778 1.898-1.883.007-3.371.007-6.742.01-10.113 0-.052 0-.105-.005-.156-.03-.355-.169-.658-.483-.838a2.638 2.638 0 0 0-.695-.291 7.484 7.484 0 0 0-2.887-.123c-.743.113-1.476.293-2.213.442-.97.196-1.946.28-2.934.178-1.268-.129-2.37-.666-3.402-1.38a32.36 32.36 0 0 0-1.494-.984c-.62-.38-1.314-.505-2.03-.544-.77-.043-1.536-.063-2.293.111-.59.136-.899.479-.966 1.077a3.438 3.438 0 0 0-.021.379m7.337-6.184a3.675 3.675 0 1 0-7.35-.031 3.675 3.675 0 0 0 7.35.03zm8.335-1.81a3.673 3.673 0 0 0-3.69 3.652 3.672 3.672 0 0 0 3.67 3.697 3.678 3.678 0 0 0 3.68-3.665 3.677 3.677 0 0 0-3.66-3.685Z"></path></svg>
                        <span className='f-s' style={{ color: "white" }}>Our Costumers</span>
                    </div>

                </div>
                <div onMouseOut={() => func2(1)} onMouseOver={() => func1(1)} className='bg-g' style={{ display: "flex", alignItems: "center", height: "10px", width: "10px", borderRadius: "50%", marginTop: "2rem", }}>
                    <div className='desc' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.1rem" }}>
                        <svg style={{ color: "white" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path></svg>
                        <span className='f-s' style={{ color: "white" }}>How To Use</span>
                    </div>

                </div>
                <div onMouseOut={() => func2(2)} onMouseOver={() => func1(2)} className='bg-g' style={{ display: "flex", alignItems: "center", height: "10px", width: "10px", borderRadius: "50%", marginTop: "2rem", }}>
                    <div className='desc' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.1rem" }}>
                        <svg style={{ color: "white" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path></svg>
                        <span className='f-s' style={{ color: "white" }}>Features</span>
                    </div>

                </div>
                <div onMouseOut={() => func2(3)} onMouseOver={() => func1(3)} className='bg-g' style={{ display: "flex", alignItems: "center", height: "10px", width: "10px", borderRadius: "50%", marginTop: "2rem", }}>
                    <div className='desc' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.1rem" }}>
                        <svg style={{ color: "white" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></svg>
                        <span className='f-s' style={{ color: "white" }}>Support</span>
                    </div>

                </div>
            </div>
            <div className='Home-f r7' style={{ marginTop: "150px", width: "100%" }}>
                <div style={{ display: "block", boxSizing: "border-box", width: "100%", marginBottom: "4rem", paddingRight: "3rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
                        <h4 style={{ fontSize: "2.2rem", fontWeight: "600", lineHeight: "55px", textTransform: "capitalize", marginBottom: "0.25rem" }}>
                            Transform Google Forms Into Interactive Workflows
                        </h4>
                        <p style={{ lineHeight: "30px", marginBottom: "2rem", fontSize: "1.17rem" }}>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
                        <button style={{ display: "flex", justifyContent: "center ", alignItems: "center", backgroundColor: "#915bff", border: "none", borderRadius: "10px", paddingTop: "1.1rem", paddingBottom: "1.1rem", width: "50%" }}>
                            <svg style={{ fontSize: "1.25rem", marginRight: "1rem", color: "white" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-lg md:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
                            <span style={{ wordSpacing: "0.2em", letterSpacing: "0.025em", fontSize: "1.25rem", color: "white" }}>
                                Install for Free
                            </span></button>
                    </div>

                </div>

                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%" }}>
                    <iframe src='https://www.youtube.com/embed/riiUkCRpIio' title="boloform" loading='lazy' allow='autoplay; encrypted-media; accelerometer; picture-in-picture' style={{ width: "525px", height: "300px", borderRadius: "10px", border: "4px solid #915bff" }}></iframe>
                </div>

                <div style={{ display: "block", boxSizing: "border-box" }}>

                </div>
            </div>
            <div className="description-1">
                <div style={{ display: "block", boxSizing: "border-box", paddingBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "2.0rem", fontWeight: "600" }}>BoloForms Is Used By</h2>
                </div>
                <div onScroll={()=>scrolling()} className='over-a' style={{ display: "flex", width: "100%" }}>
                    <div className='trans-img' style={{ display: "flex", justifyContent: "center", padding: "1rem", maxWidth: 250, height: 250, borderRadius: "10px", border: "1px solid rgba(211,211,211,0.4)", marginRight: "1.5rem" }}>
                        <img src='https://www.boloforms.com/_next/static/media/1.890362c3.svg' alt='crumbl' />
                    </div>
                    <div className='trans-img' style={{ display: "flex", justifyContent: "center", padding: "1rem", maxWidth: 250, height: 250, borderRadius: "10px", border: "1px solid rgba(211,211,211,0.4)", marginRight: "1.5rem" }}>
                        <img src='https://www.boloforms.com/_next/static/media/2.0b0df285.svg' alt='bank raya' />
                    </div>
                    <div className='trans-img' style={{ display: "flex", justifyContent: "center", padding: "1rem", maxWidth: 250, height: 250, borderRadius: "10px", border: "1px solid rgba(211,211,211,0.4)", marginRight: "1.5rem" }}>
                        <img src='https://www.boloforms.com/_next/static/media/3.8cf4b5f3.svg' alt='uber' />
                    </div>
                    <div className='trans-img' style={{ display: "flex", justifyContent: "center", padding: "1rem", maxWidth: 250, height: 250, borderRadius: "10px", border: "1px solid rgba(211,211,211,0.4)", marginRight: "1.5rem" }}>
                        <img src='https://www.boloforms.com/_next/static/media/4.b84353dc.svg' alt='Hubspot' />
                    </div>
                    <div className='trans-img' style={{ display: "flex", justifyContent: "center", padding: "1rem", maxWidth: 250, height: 250, borderRadius: "10px", border: "1px solid rgba(211,211,211,0.4)", marginRight: "1.5rem" }}>
                        <img src='https://www.boloforms.com/_next/static/media/5.9b049047.svg' alt='bank' />
                    </div>
                </div>
            </div>
            <div className='description-2'>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "2.2rem", fontWeight: "500", margin: "0" }}>How does BoloForms work?</h3>
                    <p>Set up your first workflow in just 3 easy steps.</p>
                    <div className='r7' style={{ display: "flex",justifyContent : "center",alignItems : "center" }}>
                        <div style={{ display: "flex", flexDirection: "column",justifyContent : "center",alignItems : "center" }}>
                            <div>
                             <img onMouseOver={()=>elevation(0)} onMouseOut = {()=>delevate(0)} className='elev' style={{height : "auto",maxWidth : "100%"}}  src='https://www.boloforms.com/_next/static/media/2.2709e204.svg' alt='approval workflow' /></div>
                             <h3 style={{fontSize : "1.6rem",fontWeight : "500px"}}>Step 1:</h3>
                             <p style={{fontSize : "1.1rem"}}>Choose a template or add questions to create your Google Form.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column",justifyContent : "center",alignItems : "center" }}>
                        <div>
                             <img onMouseOver={()=>elevation(1)} onMouseOut = {()=>delevate(1)} className='elev' style={{height : "auto",maxWidth : "100%"}} src='https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg' alt='approval workflow' /></div>
                             <h3 style={{fontSize : "1.6rem",fontWeight : "500px"}}>Step 2:</h3>
                             <p style={{fontSize : "1.1rem"}}>Enable Single/Multi Step approval and add necessary approvers!</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column",justifyContent : "center",alignItems : "center" }}>
                        <div>
                             <img onMouseOver={()=>elevation(2)} onMouseOut = {()=>delevate(2)} className='elev' style={{height : "auto",maxWidth : "100%"}} src='https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg' alt='approval workflow' /></div>
                             <h3 style={{fontSize : "1.6rem",fontWeight : "500px"}}>Step 3:</h3>
                             <p style={{fontSize : "1.1rem"}}>Now you can enable the workflow and share the Google Form.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-3 r7'>
                <div style={{display : "flex",justifyContent : "center",alignItems : "center"}}>
               <img style={{height : "8rem",width : "8rem",borderRadius : "9999px"}} src='https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg' alt="women-imag"/>
                </div>
                <div style={{display : "flex",justifyContent : "center",alignItems : "flex-start",flexDirection : "column",paddingLeft : "3rem"}}>
                    <div style={{display:"flex",gap:"0.3rem",marginBottom : "0.4rem"}}>
                <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 </div>
                 <p style={{fontSize : "1.13rem",marginBottom : "0.4rem"}}>"Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!"</p>
                 <h3 style={{fontSize : "1.13rem",fontWeight : "500"}}>Repa Mandala</h3>
               </div>
            </div>
            <div className='description-4'>
                 <div className='r7' style={{display : "flex",justifyContent:"center",alignItems : "center",gap : "1.3rem"}}>
                   <button className='b-pad'>
                   <svg style={{marginRight : "1rem",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="mr-4 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg>
                    <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "white",textTransform : "capitalize"}}>Install For Free</span>
                   </button>
                 
                 <button className='b-pad2'>
                 <svg style={{marginRight : "1rem",fontSize : "1.4rem"}}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
                  <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "#915bff",textTransform : "capitalize"}}>BoloForms Premium</span>
                   </button>
            </div></div>
            <div className='r7' style={{display : "flex",justifyContent : "center",alignItems : "center",marginBottom : "6rem"}}>
            <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginRight : "2rem"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>Trusted by 50000+ Businesses</p>
                 </div>
                 <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginRight : "2rem"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>30 Days Money Back Guarantee
</p>
                 </div>
                 <div style={{display : "flex",justifyContent : "center",alignItems : "center"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>1-1 Zoom & WhatsApp Onboarding</p>
                 </div>
            </div>
            <div style={{display : "flex",flexDirection : "column",alignItems : "center",width : "100%"}}>
            <h1 style={{fontSize : "2.4",margin : "0"}}>Features</h1>
            <p style={{paddingBottom : "4rem"}}>Everything that your organisation will love, & more.</p>
            <div className='r7' style={{display : "flex",justifyContent : "space-between",alignItems : "center" }}>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img  style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Get started in less than 5 minutes.</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</p>
             </div>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Multi-level workflows</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.</p>
             </div>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Dynamic Reciepients</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>Approvers can be selected based on the answers to a form response or entered manually by the requestor.</p>
             </div>
            </div>
            <div style={{display : "flex",flexWrap : "wrap",justifyContent : "space-between",alignItems : "center" }}>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img  style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Role Based Workflows</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.</p>
             </div>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Conditional Logic</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.</p>
             </div>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_instaaccess.e822dad7.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>One-click Approvals</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>Notification emails are sent to users and can be approved with a single click.</p>
             </div>
            </div>
            <div style={{display : "flex",flexWrap : "wrap",justifyContent : "space-between",alignItems : "center" }}>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img  style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Responsive design</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.</p>
             </div>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Enterprise grade security</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.</p>
             </div>
             <div style={{display : "flex",flexDirection : "column",width : "370px",marginRight : "1rem",marginBottom : "3rem",paddingRight:"2rem",paddingLeft : "2rem",marginLeft : "1rem"}}>
             <img style={{marginBottom : "1.5rem",maxWidth : "10%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg' alt="rocket" />
             <h2 style={{margin : "0",fontSize : "1.5rem",lineHeight : "1.6rem",fontWeight : "700"}}>Custom Dashboard</h2>
             <p style={{fontSize : "1.1rem",lineHeight : "1.5rem"}}>Track approvals of various forms from a single place! See the approval process for each request in real-time</p>
             </div>
            </div>
            </div>
            <div className='description-3 r7'>
                <div style={{minWidth:"8rem",height : "8rem",borderRadius : "500px",overflow : "hidden"}}>
               <img style={{height : "100%",maxWidth : "100%",width:"100%",objectFit : "cover"}} src='https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg' alt="women-imag"/>
                </div>
                <div style={{display : "flex",justifyContent : "center",alignItems : "flex-start",flexDirection : "column",paddingLeft : "3rem"}}>
                    <div style={{display:"flex",gap:"0.3rem",marginBottom : "0.4rem"}}>
                <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 </div>
                 <p style={{fontSize : "1.13rem",marginBottom : "0.4rem"}}>"Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"</p>
                 <h3 style={{fontSize : "1.13rem",fontWeight : "500"}}>Alaa Khaled</h3>
               </div>
            </div>
            <div className='description-4'>
                 <div className='r7' style={{display : "flex",justifyContent:"center",alignItems : "center",gap : "1.3rem"}}>
                   <button className='b-pad'>
                   <svg style={{marginRight : "1rem",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="mr-4 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg>
                    <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "white",textTransform : "capitalize"}}>Install For Free</span>
                   </button>
                 
                 <button className='b-pad2'>
                 <svg style={{marginRight : "1rem",fontSize : "1.4rem"}}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
                  <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "#915bff",textTransform : "capitalize"}}>BoloForms Premium</span>
                   </button>
            </div></div>
            <div className='r7' style={{display : "flex",justifyContent : "center",alignItems : "center",marginBottom : "6rem"}}>
            <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginRight : "2rem"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>Trusted by 50000+ Businesses</p>
                 </div>
                 <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginRight : "2rem"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>30 Days Money Back Guarantee
</p>
                 </div>
                 <div style={{display : "flex",justifyContent : "center",alignItems : "center"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>1-1 Zoom & WhatsApp Onboarding</p>
                 </div>
            </div>
            <div className='description-3 r7'>
                <div style={{minWidth:"150px",height : "150px",borderRadius : "500px",overflow : "hidden",maxWidth : "150px",justifyContent : "center",alignItems : "center"}}>
               <img style={{height : "100%",width:"auto"}} src='https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg' alt="men-imag"/>
                </div>
                <div style={{display : "flex",justifyContent : "center",alignItems : "flex-start",flexDirection : "column",paddingLeft : "3rem"}}>
                    <div style={{display:"flex",gap:"0.3rem",marginBottom : "0.4rem"}}>
                <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 </div>
                 <p style={{fontSize : "1.13rem",marginBottom : "0.4rem"}}>"Easy to use interface and timely support...looking for more features"</p>
                 <h3 style={{fontSize : "1.13rem",fontWeight : "500"}}>Deepak S (Solero Corporation)</h3>
               </div>
            </div>
            <div className='r7' style={{display : "flex",width : "100%",marginTop : "1rem",marginBottom : "3rem"}}>
             <div style={{display : "flex",justifyContent : "space-between",width : "50%",alignItems : "flex-start",flexDirection : "column",position : "relative"}}>
                <div className='s-before'></div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "88px",height : "100%",backgroundColor : "#faf1e1",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#C72C91",backgroundColor : "#f7dff5",borderRadius : "8px",border : "none",fontSize : "1rem",justifyContent : "center",alignItems : "center"}}>
            <svg style={{color : "#C72C91",paddingRight : "0.6rem",fontSize : "1rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                  Approval Management 
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "120px",height : "100%",backgroundColor : "#DCF5DE",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#0966FF",backgroundColor : "#EBF3FF",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{color : "inherit",paddingRight : "0.6rem",fontSize : "1rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Sales Quotation Apporval 
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "88px",height : "100%",backgroundColor : "#f2f1fb",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#F58224",backgroundColor : "#f9f1e1",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Registration Management
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "100px",height : "100%",backgroundColor : "#ffe7e5",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#60ba63",backgroundColor : "#DCF5DE",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Performance Appraisal Request
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "60px",height : "100%",backgroundColor : "#f2f1fb",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#C72C91",backgroundColor : "#f7dff5",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Quality Sales leads
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "60px",height : "100%",backgroundColor : "#faf1e1",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#C72C91",backgroundColor : "#f7dff5",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Expense Approval
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#7E7EDE",backgroundColor : "#EDECF9",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Customer Request Approval 
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "60px",height : "100%",backgroundColor : "#faf1e1",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#7E7EDE",backgroundColor : "#EDECF9",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Field Request 
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#F58224",backgroundColor : "#f9f1e1",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Travel request
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "60px",height : "100%",backgroundColor : "#f7dff5",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#0966FF",backgroundColor : "#EBF3FF",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Vendor Registration
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#60ba63",backgroundColor : "#DCF5DE",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            IT Change Management 
            </div>
              </div>
              <div style={{display : "flex",margin:"0.4rem"}}>
            <div style={{display : "flex",width : "60px",height : "100%",backgroundColor : "#faf1e1",borderRadius : "8px",marginRight : "0.3rem"}}>
             
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#F75A43",backgroundColor : "#FFE7E5",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Purchase order
            </div>
            <div style={{marginRight : "0.3rem",fontSize : "1rem",display : "flex",paddingLeft : "1rem",paddingRight : "1rem",paddingTop : "0.7rem",paddingBottom : "0.7rem",color : "#C72C91",backgroundColor : "#faf1e1",borderRadius : "8px",border : "none",justifyContent : "center",alignItems : "center"}}>
            <svg style={{fontSize : "1rem",color : "inherit",paddingRight : "0.6rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
            Purchase order 
            </div>
              </div>
              
             </div>
             <div style={{display : "flex",width : "50%",flexDirection : "column",paddingRight : "6rem",justifyContent : "center",alignItems : "flex-start",paddingLeft : "6rem"}}>
                <h2 style={{fontSize : "2.2rem",fontWeight : "600",lineHeight : "2.7rem",marginBottom : "0.5rem"}}>An End-To-End Workflow Platform For All Your Business Needs</h2>
                <p style={{fontSize : "1.15rem",lineHeight : "1.8rem",margin : "0",marginBottom : "1.2rem"}}>1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</p>
                <button className='b-pad'>
                 <svg style={{marginRight : "1rem",fontSize : "1.4rem"}}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
                  <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "white",textTransform : "capitalize"}}>BoloForms Premium</span>
                   </button>
             </div>
            </div>
            <div style={{display : "flex",flexDirection : "column",justifyContent : "center",alignItems : "center",paddingLeft : "13rem",paddingRight : "13rem",paddingTop : "4rem",paddingBottom : "4rem",backgroundColor:"#915bff",marginTop  : "5rem",marginLeft : "-5rem",marginRight : "-5rem"}}>
                <h3 style={{margin : "0",textAlign : "center",color: "white",fontSize : "1.2rem",marginBottom : "1.5rem"}}>
                “ Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software! "
                </h3>
                <div style={{display:"flex",gap:"0.3rem",marginBottom : "3rem"}}>
                <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 </div>
                 <div style={{display : "flex"}}>
                    <div style={{marginRight : "1.2rem",display : "block",boxSizing : "border-box",width : "100px",height : "100px",overflow : "hidden",borderRadius : "9999px",border : "2px solid white"}}>
                 <img style={{width : "100%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/patrick.4de6d5b1.jpeg' alt='men' /></div>
                
                 <div style={{display : "flex",alignItems : "flex-start",flexDirection : "column",justifyContent : "center"}}>
                   <h3 style={{margin : "0px",color : "white",marginBottom : "0.2rem"}}>Patrick Nyama,</h3>
                   <p style={{margin : "0"}}>Edmonton CA</p>
                 </div>
                 </div>
            </div>
            <div style={{display : "flex",paddingTop : "3rem",paddingBottom : "1rem",paddingLeft : "1rem",paddingRight : "1rem",width : "100%",marginTop : "3rem",border : "1px solid lightgray",borderRadius : "15px"}}>
             <div style={{display : "flex",flexDirection : "column",justifyContent : "center",alignItems : "center",width : "100%"}}>
                <h1 style={{margin : "0",fontSize : "2rem",lineHeight : "1.2rem",marginBottom : "0.9rem"}}>Fully Automated Workflows</h1>
                <p style={{margin : "0",fontSize : "1.3rem"}}>No more painful manual approval management and wasting countless hours.</p>
                <div className='r7' style={{display : "flex",marginTop : "3.0rem"}}>
                <div style={{display : "flex",padding : "1.4rem",flexDirection : "column",background : "linear-gradient(90deg,rgba(252,241,251,0),#f7dff5)",borderRadius : "15px"}}>
                 <div style={{display:"flex",paddingRight:"6rem",paddingleft : "6rem",paddingTop : "0.8rem",paddingBottom : "0.8rem",backgroundColor : "white",marginBottom : "1.3rem",borderRadius : "15px"}}>
                  <img style={{marginRight : "0.4rem",marginLeft : "0.5rem"}} src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt = "checkbox"/>
                  <h4 style={{color:'rgb(107 114 128)',margin : "0",fontWeight : "600"}}>Leave Application</h4>
                 </div>
                 <div style={{display:"flex",paddingRight:"6rem",paddingleft : "6rem",paddingTop : "0.8rem",paddingBottom : "0.8rem",backgroundColor : "white",marginBottom : "1.3rem",borderRadius : "15px"}}>
                  <img style={{marginRight : "0.4rem",marginLeft : "0.5rem"}} src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt = "checkbox"/>
                  <h4 style={{color:'rgb(107 114 128)',margin : "0",fontWeight : "600"}}>Purchase order</h4>
                 </div>
                 <div style={{display:"flex",paddingRight:"6rem",paddingleft : "6rem",paddingTop : "0.8rem",paddingBottom : "0.8rem",backgroundColor : "white",marginBottom : "1.3rem",borderRadius : "15px"}}>
                  <img style={{marginRight : "0.4rem",marginLeft : "0.5rem"}} src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt = "checkbox"/>
                  <h4 style={{color:'rgb(107 114 128)',margin : "0",fontWeight : "600"}}>Fulfillment</h4>
                 </div>
                </div>
                <div style={{display : "flex",height : "100%",justifyContent : "center",alignItems : "center"}}>
                <img style={{maxWidth : "100%",height : "9rem",color : "transparent",width : "600px"}} src = "https://www.boloforms.com/_next/static/media/approvals.73c8d904.svg" alt="logo" />
                </div>
                <div style={{display : "flex",padding : "1.4rem",flexDirection : "column",background : "linear-gradient(270deg,rgba(236,243,255,0),#ecf3ff)",borderRadius : "15px"}}>
                 <div style={{display:"flex",paddingRight:"8rem",paddingleft : "6rem",paddingTop : "0.8rem",paddingBottom : "0.8rem",backgroundColor : "white",marginBottom : "1.3rem",borderRadius : "15px"}}>
                  <img style={{marginRight : "0.4rem",marginLeft : "0.5rem"}} src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt = "checkbox"/>
                  <h4 style={{color:'rgb(107 114 128)',margin : "0",fontWeight : "600"}}>Approve</h4>
                 </div>
                 <div style={{display:"flex",paddingRight:"8rem",paddingleft : "6rem",paddingTop : "0.8rem",paddingBottom : "0.8rem",backgroundColor : "white",marginBottom : "1.3rem",borderRadius : "15px"}}>
                  <img style={{marginRight : "0.4rem",marginLeft : "0.5rem"}} src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt = "checkbox"/>
                  <h4 style={{color:'rgb(107 114 128)',margin : "0",fontWeight : "600"}}>Reject</h4>
                 </div>
                 <div style={{display:"flex",paddingRight:"8rem",paddingleft : "6rem",paddingTop : "0.8rem",paddingBottom : "0.8rem",backgroundColor : "white",marginBottom : "1.3rem",borderRadius : "15px"}}>
                  <img style={{marginRight : "0.4rem",marginLeft : "0.5rem"}} src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt = "checkbox"/>
                  <h4 style={{color:'rgb(107 114 128)',margin : "0",fontWeight : "600"}}>Send Pdf</h4>
                 </div>
                </div>
                </div>
                <p style={{fontSize:"1.4rem",lineHeight : "1.2rem",marginTop:"2rem"}}>BoloForms workflows acts as a glue holding together all your approval processes.</p>
                
             </div>
             </div>
             <div className='description-3 r7'>
                <div style={{minWidth:"150px",height : "150px",borderRadius : "500px",overflow : "hidden",maxWidth : "150px",justifyContent : "center",alignItems : "center"}}>
               <img style={{height : "100%",width : "auto"}} src='https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg' alt="men-imag"/>
                </div>
                <div style={{display : "flex",justifyContent : "center",alignItems : "flex-start",flexDirection : "column",paddingLeft : "3rem"}}>
                    <div style={{display:"flex",gap:"0.3rem",marginBottom : "0.4rem"}}>
                <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 </div>
                 <p style={{fontSize : "1.13rem",marginBottom : "0.4rem"}}>"I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"</p>
                 <h3 style={{fontSize : "1.13rem",fontWeight : "500"}}>Raman R</h3>
               </div>
            </div>
            <div className='description-4'>
                 <div className='r7' style={{display : "flex",justifyContent:"center",alignItems : "center",gap : "1.3rem"}}>
                   <button className='b-pad'>
                   <svg style={{marginRight : "1rem",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="mr-4 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg>
                    <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "white",textTransform : "capitalize"}}>Install For Free</span>
                   </button>
                 
                 <button className='b-pad2'>
                 <svg style={{marginRight : "1rem",fontSize : "1.4rem"}}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
                  <span style={{letterSpacing : "0.025em",wordSpacing : "0.2em",fontSize : "1.3rem",fontWeight : "600",color : "#915bff",textTransform : "capitalize"}}>BoloForms Premium</span>
                   </button>
            </div></div>
            <div className='r7' style={{display : "flex",justifyContent : "center",alignItems : "center",marginBottom : "6rem"}}>
            <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginRight : "2rem"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>Trusted by 50000+ Businesses</p>
                 </div>
                 <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginRight : "2rem"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>30 Days Money Back Guarantee
</p>
                 </div>
                 <div style={{display : "flex",justifyContent : "center",alignItems : "center"}}>
            <svg style={{color : "rgb(22,163,174)",fontSize : "1.4rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="mr-2 text-2xl text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
                 <p style={{fontSize : "0.875rem",color : "rgb(75,85,99)",fontWeight : "500",lineHeight : "1.25rem"}}>1-1 Zoom & WhatsApp Onboarding</p>
                 </div>
            </div>
            <div className='description-3 r7'>
                <div style={{minWidth:"150px",height : "150px",borderRadius : "500px",overflow : "hidden",maxWidth : "150px",justifyContent : "center",alignItems : "center"}}>
               <img style={{height : "100%",width : "auto"}} src='https://www.boloforms.com/_next/static/media/john.39efe227.jpeg' alt="men-imag"/>
                </div>
                <div style={{display : "flex",justifyContent : "center",alignItems : "flex-start",flexDirection : "column",paddingLeft : "3rem"}}>
                    <div style={{display:"flex",gap:"0.3rem",marginBottom : "0.4rem"}}>
                <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "1.5rem",color : "orange"}}></i>
                 </div>
                 <p style={{fontSize : "1.13rem",marginBottom : "0.4rem"}}>"Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."</p>
                 <h3 style={{fontSize : "1.13rem",fontWeight : "500"}}>John M.</h3>
               </div>
            </div>
            <div className='description-6 r7' style={{display : "flex",padding : "2rem",marginleft : "1rem",marginRight : "1rem"}}>
            <div style={{display : "flex",minWidth:"150px",height : "150px",borderRadius : "500px",overflow : "hidden",maxWidth : "150px",justifyContent : "center",alignItems : "center"}}>
               <img style={{height : "100%",width : "auto"}} src='https://www.boloforms.com/_next/static/media/moneyback-gurantee.8417d885.png' alt="men-imag"/>
                </div>
                <div style={{display : "flex",flexDirection : "column",justifyContent : "flex-start",alignItems : "flex-start",marginLeft : "1.3rem"}}>
                 <p  style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>MY 100% NO-RISK DOUBLE-GUARANTEE</p>
                 <h2 style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.</h2>
                 <p style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>Here's why I'm offering this -</p>
                 <p style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.</p>
                <p style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!</p>
                <p style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>Start with automating small workflow and then gradually you will love it!!</p>
                <p style={{fontSize: "1.2rem",lineHeight : "1.7rem"}}>Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!</p>
                <div style={{display : "flex",width : "70px",height : "50px",justifyContent : "flex-start",alignItems : "center"}}>
                <img style={{height : "100%",width : "auto"}} src='https://www.boloforms.com/_next/static/media/paresh-signature.ffbb67b9.png' alt="sign"/></div>
                <h3 style={{marginBottom : "0",marginTop : "0"}}>Paresh Deshmukh</h3>
                <h5 style={{marginTop : "0"}}>Co-Founder BoloForms</h5>
                </div>
            </div>
            <div style={{display : "flex",flexDirection : "column",marginTop : "3rem",justifyContent : "center",alignItems : "center",padding : "1rem"}}>
            
             <div style={{display:"flex",gap:"1rem",marginBottom : "0.4rem"}}>
                <i className='fa fa-star' style={{fontSize : "2rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "2rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "2rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "2rem",color : "orange"}}></i>
                 <i className='fa fa-star' style={{fontSize : "2rem",color : "orange"}}></i>
                 </div>
         <h1 style={{fontSize : "2.3rem",lineHeight : "1.3rem",marginTop : "2rem"}}>Award-winning support.</h1>
         <p style={{fontSize : "1.3rem",lineHeight : "1.3rem",marginTop : "0",marginBottom : "1.2rem"}}>Best-in-class support. We’re always here to help – here’s how to connect.</p>
         <div className='r7' style={{display : "flex",width : "100%",paddingTop : "2rem",paddingBottom : "2rem"}}>
         <div className='d' style={{display : "flex",flexDirection : "column",padding : "2rem 1rem 2rem 1rem",justifyContent : "center",alignItems : "center",marginRight : "1.6rem",marginBottom : "1.6rem"}}>
         <div style={{marginBottom : "2rem"}}>
         <img style={{maxWidth : "100%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/live-chat-support.8700dc17.png' alt='girl' /> 
         </div>
         <h1 style={{fontSize : "1.8rem",lineHeight : "1.3rem",marginTop : "2rem"}}>? Whatsapp chat</h1>
         <p style={{fontSize : "1.1rem",lineHeight : "1.3rem",marginTop : "0",marginBottom : "1.9rem"}}>Ask a question right now.</p>
         <div style={{borderRadius:"20px",display : "flex",justifyContent:"center",alignItems : "center",paddingTop : "0.4rem",paddingBottom : "0.4rem",paddingLeft : "4rem",paddingRight : "4rem",border : "2px solid #915bff",fontSize : "1.1rem",lineHeight : "1.3rem"}}>
          start a chat
         </div>
         </div>
         <div className='d' style={{display : "flex",flexDirection : "column",padding : "2rem 1rem 2rem 1rem",justifyContent : "center",alignItems : "center",marginRight : "1.6rem",marginBottom : "1.6rem"}}>
         <div style={{marginBottom : "2rem"}}>
         <img style={{maxWidth : "100%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/support-email.d67bf660.png' alt='girl' /> 
         </div>
         <h1 style={{fontSize : "1.8rem",lineHeight : "1.3rem",marginTop : "2rem"}}>? Email</h1>
         <p style={{fontSize : "1.1rem",lineHeight : "1.3rem",marginTop : "0",marginBottom : "1.9rem"}}>Get in touch by email.</p>
         <div style={{borderRadius:"20px",display : "flex",justifyContent:"center",alignItems : "center",paddingTop : "0.4rem",paddingBottom : "0.4rem",paddingLeft : "4rem",paddingRight : "4rem",border : "2px solid #915bff",fontSize : "1.1rem",lineHeight : "1.3rem"}}>
          Send an Email
         </div>
         </div>
         <div className='d' style={{display : "flex",flexDirection : "column",padding : "2rem 1rem 2rem 1rem",justifyContent : "center",alignItems : "center",marginRight : "1.6rem",marginBottom : "1.6rem"}}>
         <div style={{marginBottom : "2rem"}}>
         <img style={{maxWidth : "100%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/helpcenter.1d93444b.png' alt='girl' /> 
         </div>
         <h1 style={{fontSize : "1.8rem",lineHeight : "1.3rem",marginTop : "2rem"}}>? Help centert</h1>
         <p style={{fontSize : "1.1rem",lineHeight : "1.3rem",marginTop : "0",marginBottom : "1.9rem"}}>In Depth Guides.</p>
         <div style={{borderRadius:"20px",display : "flex",justifyContent:"center",alignItems : "center",paddingTop : "0.4rem",paddingBottom : "0.4rem",paddingLeft : "4rem",paddingRight : "4rem",border : "2px solid #915bff",fontSize : "1.1rem",lineHeight : "1.3rem"}}>
          Read Articles
         </div>
         </div>
         <div className='d' style={{display : "flex",flexDirection : "column",padding : "2rem 1rem 2rem 1rem",justifyContent : "center",alignItems : "center",marginRight : "1.6rem",marginBottom : "1.6rem"}}>
         <div style={{marginBottom : "2rem"}}>
         <img style={{maxWidth : "100%",height : "auto"}} src='https://www.boloforms.com/_next/static/media/book-time.934f28c8.png' alt='girl' /> 
         </div>
         <h1 style={{fontSize : "1.8rem",lineHeight : "1.3rem",marginTop : "2rem"}}>? Google Meet</h1>
         <p style={{fontSize : "1.1rem",lineHeight : "1.3rem",marginTop : "0",marginBottom : "1.9rem"}}>Guided support and Q&A.</p>
         <div style={{borderRadius:"20px",display : "flex",justifyContent:"center",alignItems : "center",paddingTop : "0.4rem",paddingBottom : "0.4rem",paddingLeft : "4rem",paddingRight : "4rem",border : "2px solid #915bff",fontSize : "1.1rem",lineHeight : "1.3rem"}}>
         Book a Time
         </div>
         </div>
         </div>
            </div>
            <div style={{display:"flex",marginTop : "3rem",justifyContent : "center",alignItems : "center",marginBottom : "2rem",flexDirection:"column"}}>
            <h1 style={{fontSize : "2.2rem",lineHeight : "2.2rem",marginBottom : "2rem"}}>Frequently Asked Questions</h1>
            <div className='r7' style={{display : "flex",width : "100%"}}>
            <div style={{display : "flex",flexDirection : "column",marginRight:"1rem",width : "100%"}}>
            <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent : "space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>What is the difference between email and request?</h5>
            <i onClick={()=>showtext1(0)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(0)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>A request needs to send multiple emails to different recipients and respondent (optional) for approval. This means that one request may costs lots of email quota.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent : "space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>What will happen if I run out of email quota?</h5>
            <i onClick={()=>showtext1(1)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(1)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>When you run out of email quota, the addon will temporary stop running. You will have to wait for quota renewal to send email again. If you are Free user, you can purchase Individual Plan and enjoy much higher quotas (at least 5000 emails/month) and unlimited emails sent per day.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>What will happen to my data if I cancel my subscription?</h5>
            <i onClick={()=>showtext1(2)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(2)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>You data will still be stored in our database even after your subscription cancellation. If you want to remove your data, please contact to us via support@boloforms.com.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>I receive a permission error when I try to setup the Add-on</h5>
            <i onClick={()=>showtext1(3)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(3)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>This is a known issue with Google permissions and it happens when you are logged in with more than one Google account. Try to sign out of all account except your main account. Alternatively, try Guest/Incognito mode.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>Can I use the addon if my organisation does not use Google accounts?</h5>
            <i onClick={()=>showtext1(4)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(4)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>Yes, but be aware that Form owner/adminstrator in particular still needs Google account. This is because the addon sends email on your Gmail behalf.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>How can I contact support?</h5>
            <i onClick={()=>showtext1(5)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(5)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>For any additional questions, you can contact us on support@boloforms.com or on WhatsApp at +91-8830631677 anytime.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>Why does the approval workflow sometimes work smoothly and other times throws errors?</h5>
            <i onClick={()=>showtext1(6)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(6)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>If you suddenly have an error running when using an add-on, please let us know by sending an email to support@boloforms.com. Our team will contact you as soon as possible to look into the issue. If you need an expedited support, feel free to message us on WhatsApp at +91-8830631677.</p>
             </div>
             </div>
            </div>
            <div style={{display : "flex",flexDirection : "column",marginRight:"1rem",width : "100%"}}>
            <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>How to calculate the number of requests based on email quota?</h5>
            <i onClick={()=>showtext1(7)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(7)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>Emails & Requests are different. For examples, if you set up a workflow with 2 recipients, a form respondent submit a request then 2 emails counted to be sent to 2 recipients. In average, a request from our users consists of 4 emails. That is why free plan (500 emails) is calculated to be approximately 125 requests per month. The smaller number of recipient you set up in the workflow, the more request you have with a fixed email quota and vice versa.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>Why the addon requires access to my Google Drive?</h5>
            <i onClick={()=>showtext1(8)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(8)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>Permission to Google Drive is only necessary for the addon to perform actions related to your connected Google Form and spreadsheet on your behalf. In no circumstance that we will use those files for any other purposes or sharing to third parties.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>How does approval workflow feature work?</h5>
            <i onClick={()=>showtext1(9)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(9)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>When a Form Respondent sends a request, the addon will automatically send approval notification email to your specified recipient(s). Recipient can make One-click approve/reject decision on email, or, approve/reject & comment on BoloForms Approvals website. Finally, an email will be sent to all recipients notifying the final result.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>Does recipient need Google Account?</h5>
            <i onClick={()=>showtext1(10)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(10)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>No. Recipients do not need Google account. They also do not need to have access to your Google Form or spreadsheet. When a request is sent, recipient will receive an email which includes: One-click Approve & One-click Reject button: to approve/reject immediately. Approve/Reject & Comment button: to open BoloForms Website where you can approve/reject & give comment on the request.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>How many recipients can I add?</h5>
            <i onClick={()=>showtext1(11)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(11)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>There is no limit to the number of recipients. However, be aware that the higher number of recipients is, the quicker your emails quota may run out.</p>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",border : "1px solid lightgray",marginRight : "1rem",marginBottom : "1rem",borderRadius : "10px"}}>
             <div style={{display : "flex",padding : "1rem 1rem 1rem 1rem",justifyContent:"space-between"}}>
            <h5 style={{margin:"0 0 0 0",fontSize : "1.2rem"}}>Can Form Respondent or Recipients edit a form submission?</h5>
            <i onClick={()=>showtext1(12)} className='fa fa-angle-down d1' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
            <i onClick={()=>hidetext(12)}  className='fa fa-angle-up2 d2' style={{fontSize : "2rem",marginLeft : "6.0rem"}}></i>
             </div>
             <div className='st ts' >
             <p style={{fontStyle : "1.4rem",margin : "0"}}>You can have option to allow Form Respondents to edit their own submission. However, Recipients can not edit submissions from Respondent.</p>
             </div>
             </div>
            
            </div>
            </div>
            </div>
            <div style={{display : "flex",flexDirection : "column",alignItems : "center",marginTop : "2rem",justifyContent : "center",width : "100%"}}>
               <h1 style={{fontSize : "2.3rem",lineHeight : "1.4rem",marginBottom : "0"}}>Customers Who Are Trusting Us</h1>
               <p style={{fontSize : "1.1rem",marginBottom : "2rem"}}>Customers' Testimonials</p>
               <div style={{display : "flex",width : "90%",overflow : 'hidden'}}>
               <img width={{maxWidth : "100%",height : "auto"}} src="https://www.boloforms.com/_next/static/media/timer_reviews.c0a05474.svg" alt="testimonials" /></div>
            </div>
            <div className='r7' style={{display : "flex",paddingTop : "3rem",backgroundColor : "rgb(249 250 251)",marginLeft : "-5rem",marginRight : "-5rem"}}>
             <div style={{display : "flex",flexDirection : "column",justifyContent : "center",alignItems : "flex-start",width : "100%",marginRight : "2rem",marginLeft : "4rem"}}>
             <div style={{display : "flex",marginBottom : "1.1rem",justifyContent : "center",alignItems : "center"}}>
             <span style={{marginRight : "1.0rem",fontSize : "1.6rem"}}>💬</span><h4 style={{margin : 0,fontSize : "1.7rem"}}>Live Chat</h4>
             </div>
             <div style={{display : "flex",marginBottom : "1.1rem",justifyContent : "center",alignItems : "center"}}>
             <span style={{marginRight : "1.0rem",fontSize : "1.6rem"}}>📨</span><h4 style={{margin : 0,fontSize : "1.7rem"}}>Support Email</h4>
             </div>
             <div style={{display : "flex",marginBottom : "1.1rem",justifyContent : "center",alignItems : "center"}}>
             <span style={{marginRight : "1.0rem",fontSize : "1.6rem"}}>📚</span><h4 style={{margin : 0,fontSize : "1.7rem"}}>Help Center</h4>
             </div>
             <div style={{display : "flex",marginBottom : "1.1rem",justifyContent : "center",alignItems : "center"}}>
             <span style={{marginRight : "1.0rem",fontSize : "1.6rem"}}>📅</span><h4 style={{margin : 0,fontSize : "1.7rem"}}>Video Call</h4>
             </div>
             </div>
             <div style={{display : "flex",flexDirection : "column",justifyContent : "flex-start",alignItems : "flex-start",gap : "0.5rem",width : "100%",marginRight : "2rem"}}>
             <span>Pages</span>
             <span style={{fontWeight : "400"}}>Homes</span>
             <span style={{fontWeight : "400"}}>Pricing</span>
             <span style={{fontWeight : "400"}}>Blog</span>
             <span style={{fontWeight : "400"}}>About Us</span>
             </div>
             <div style={{display : "flex",flexDirection : "column",justifyContent : "flex-start",alignItems : "flex-start",gap : "0.5rem",width : "100%",marginRight : "2rem"}}>
             <span>Products</span>
             <span style={{fontWeight : "400"}}>Forms Approval</span>
             <span style={{fontWeight : "400"}}>Signature</span>
             <span style={{fontWeight : "400"}}>Sheetgod</span>
             <span style={{fontWeight : "400"}}>Google Form Ui Enhancer</span>
             <span style={{fontWeight : "400"}}>Boloform Document Generator</span>
             <span style={{fontWeight : "400"}}>Timer + Proctor</span>

             </div>
             <div style={{display : "flex",flexDirection : "column",justifyContent : "flex-start",alignItems : "flex-start",gap : "0.5rem",width : "100%",marginRight : "2rem"}}>
             <span>Legal</span>
             <span style={{fontWeight : "400"}}>Terms Of Service</span>
             <span style={{fontWeight : "400"}}>Privacy policy</span>
             <span style={{fontWeight : "400"}}>Refund Policy</span>
             <span style={{fontWeight : "400"}}>Data Security And Policy</span>
             </div>
            </div>
        </div>
    )
}

export default Home