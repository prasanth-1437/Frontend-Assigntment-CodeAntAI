import React, { useState } from 'react'
import './Login.css'
import ant from '../../assets/ant.png'
import subtract from '../../assets/Subtract.png'
import { Link } from 'react-router-dom'
import card from '../../assets/Group.png'
import card2 from '../../assets/Group5.png'
import icon1 from '../../assets/Icon1.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/Icon3.png'
import icon4 from '../../assets/Icon4.png'
import icon5 from '../../assets/Icon5.png'

const Login = () => {
    const [signtype,setType]=useState('SAAS')
  return (
    <div className="whole-login-page">
        <div className="left-login">
            <div className="middle-matter">
                <div className="middle-head">
                     <img src={ant}/>
                     <b>AI to Detect & Autofix Bad Code</b>
                </div>
                <div className="middle-scores">
                    <div className="each-score">
                        <div className='each-number'><b>30+</b></div>
                       <div className='each-scr-name'>Language Support</div> 
                    </div>
                    <div className="each-score">
                    <div className='each-number'><b>10K+</b></div>
                    <div className='each-scr-name'>Developers</div> 
                    </div>
                    <div className="each-score">
                    <div className='each-number'><b>100k+</b></div>
                    <div className='each-scr-name'>Hours Saved</div> 
            
                    </div>
                </div>
                <div className="over-matter">
                   <div className="over-left">
                        <div className="profile-chart">
                            <img src={card}/>
                        </div>
                        <div className="profile-rate">
                        <div className='profile-name'>Issues Fixed</div>
                        <div className='profile-members'><b>500k+</b></div>
                        
                        </div>
                          
                   </div>
                   <div className="over-right">
                         <img src={card2}/>
                   </div>
                   
                </div>
            </div>
            <div className="ant-logo">

            </div>
            <div className="ant-btm">
            <img src={subtract}/>

            
            </div>
            
        </div>

        {/* right login */}
        <div className="right-login">

            <div className="right-head-div">
                <div className='right-head-name1'><img src={ant}/> CodeAnt AI</div>
                <div className='right-head-name2'>Welcome to CodeAnt AI</div>
                <div className='btns-div'>
                    <div onClick={()=>setType('SAAS')} className={signtype==='SAAS'?"slctd-btn":"btn"}>SAAS</div>
                    <div onClick={()=>setType('Self Hosted')} className={signtype==='Self Hosted'?"slctd-btn":"btn"}>Self Hosted</div>
                </div>
            </div>
            <div className="sign-div">
                {signtype==='SAAS'?<> <Link to='/repository' className='link'><div className="each-sign-div">
                   <img src={icon1}/>&nbsp;&nbsp;   sign in with Github   
                </div></Link>
                <Link to='/repository' className='link'>
                <div className="each-sign-div">
                <img src={icon2}/>&nbsp;&nbsp;  sign in with Bitbucket 
    
                </div>
                </Link>
                <Link to='/repository' className='link'>
                <div className="each-sign-div">
                <img src={icon3}/>&nbsp;&nbsp;  sign in with Azure Devops 
                
                </div>
                </Link>
                <Link to='/repository' className='link'>
                <div className="each-sign-div">
                <img src={icon4}/>&nbsp;&nbsp;  sign in with GitLab
                
                </div></Link>
                </>
                :<>
                <Link to='/repository' className='link'>
                  <div className="each-sign-div">
                  <img src={icon4}/> &nbsp;&nbsp; sign in with GitLab
                </div>
                </Link>
                <Link to='/repository' className='link'>
                <div className="each-sign-div">
                <img src={icon5}/>&nbsp;&nbsp;  sign in with SSO  
                </div>
                </Link>
                </>}
            </div>
            <div className="privacy">
                <br></br>
                By signing up you agree to the <b>Privacy Policy</b>
            </div>
        
        </div>
    </div>
  )
}

export default Login
