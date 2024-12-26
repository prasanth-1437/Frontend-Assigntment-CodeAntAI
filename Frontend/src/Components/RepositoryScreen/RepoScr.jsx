import React, { useState } from 'react'
import './RepoScr.css'
import logo from '../../assets/codeAnt.png'
import home from '../../assets/home.png'
import review from '../../assets/review.png'
import cloud from '../../assets/cloud.png'
import guide from '../../assets/guide.png'
import settings from '../../assets/settings.png'
import support from '../../assets/support.png'
import logout from '../../assets/logout.png'
import bars from '../../assets/3bars.png'
import db from '../../assets/database.png'
import srch from '../../assets/search.png'
import refresh from '../../assets/refresh.png'

import { Link } from 'react-router-dom'

const RepoScr = () => {
     const repos=[
        {
            name:"design-system",
            type:"Public",
            tech:"React",
            size:"7320 KB",
            update: 1
        },
        {
            name:"codeant-ci-app",
            type:"Private",
            tech:"Javascript",
            size:"5871 KB",
            update: 2
        },
        {
            name:"analytics-dashboard",
            type:"Private",
            tech:"Python",
            size:"4521 KB",
            update: 5
        },
        {
            name:"mobile-app",
            type:"Public",
            tech:"Swift",
            size:"3096 KB",
            update: 3
        },
        {
            name:"e-commerce-platform",
            type:"Private",
            tech:"Java",
            size:"6210 KB",
            update: 6
        },
        {
            name:"blog-website",
            type:"Public",
            tech:"HTML/CSS",
            size:"1876 KB",
            update: 4
        },
        {
            name:"social-network",
            type:"Private",
            tech:"PHP",
            size:"5432 KB",
            update: 7
        },
     ] 
const [search,setSearch]=useState('')
const [visible,setRepos]=useState(repos)
const [menuoption,setOption]=useState(true)
const [selection,setSelection]=useState('Repo')
const handleSearch = (e) => {
    const value = e.target.value; // Extract the current input value
    setSearch(value); // Update the search state
    
    setTimeout(() => {
      setRepos(
        repos.filter((item) => 
          item.name.toUpperCase().includes(value.toUpperCase()) // Filter repos based on the input
        )

      );
    //   console.log(visible)
    }, 500);
  };
  
  return (
   <div className="whole-repo">

    {/* left bar */}
    <div className="left-bar">
        <div className="codeAnt-head">
            <div className="logo-heading">
            <img src={logo} />
            CodeAnt AI 
            </div>
            <div className="option-btn-div" onClick={()=>setOption(prev=>!prev)}>
            {menuoption?<><img src={bars}/></>:<>X</>}
            </div>
            
        </div>
        <div className={menuoption?"menu-bar":"menu-bar-open"}>
            <div className="top-menu">
                <div>
                    <select value="Utkarsh">
                        <option>
                        UtkarshDhairyaPanwar
                        </option>
                    </select>
                </div>
                <div className={selection==='Repo'?"selected":"each-selection"} onClick={()=>setSelection('Repo')}>
                <img src={home} />&nbsp;
                  
                   Repositories
                   
                </div>
                <div className={selection==='CR'?"selected":"each-selection"} onClick={()=>setSelection('CR')}>
                <img src={review} />&nbsp;
                AI Code Review
                </div>
                <div className={selection==='CS'?"selected":"each-selection"} onClick={()=>setSelection('CS')}>
                <img src={cloud} />&nbsp;
                    Cloud Security
                </div>
                <div className={selection==='guide'?"selected":"each-selection"} onClick={()=>setSelection('guide')}>
                    <img src={guide}/>&nbsp;
                    How to Use
                </div>
                <div className={selection==='St'?"selected":"each-selection"} onClick={()=>setSelection('St')}>
                <img src={settings} />&nbsp;
                    Settings
                </div>

            </div>
            <div className="bottom-menu">
                <div className={selection==='Sp'?"selected":"each-selection"} onClick={()=>setSelection('Sp')}>
                <img src={support} />&nbsp;
                    Support
                </div>
                <Link to='/' className='link'>
                <div className={selection==='lg'?"selected":"each-selection"} onClick={()=>setSelection('lg')}>
                <img src={logout} />
                &nbsp;Logout
                    
                </div>
                </Link>
            </div>

        </div>
    </div>
    {/* right-bar */}

    <div className={menuoption?"right-bar":"right-bar-mb"}>
       {selection==='Repo' ?<div className="right-inner">
          <div className="repo-head">
              <div className="repos-deatils">
                <div className="total-repos">
                  <div className='repositories-head'>Repositories </div> 
                   <div className='total-repo'>33 total repositories</div>
                </div>
                <div className="repo-add-refersh">
                    <div className="refresh-all" onClick={()=>{setSearch('');setRepos(repos);}}>
                          Refresh All
                          <div className="refresh-img">
                               <img src={refresh}/>
                            </div>                    
                            </div>
                    <div className="add-repo">
                        + Add Repository
                    </div>
                </div>
              </div>
              <div className="search-bar">
 <input 
    type="text" 
    value={search} 
    placeholder="Search Repositories" 
    onChange={handleSearch} 

  />       
  <div className="search-img">
    <img src={srch}/>
  </div>
         </div>
          </div>
        
          <div className="repositories">
                 {
                    visible.map((item,ind)=>(
                        <div key={ind} className="each-repo-details">
                            <div className="each-name-type">
                                <div className="repo-name">{item.name}</div>
                                <div className="repo-type">{item.type}</div>
    
                            </div>
                            <div className="each-tech-size-update">
                               
                                <div className="repo-tech">{item.tech} <div className="dot-tech"></div></div>
                    
                                <div className="repo-size"><div className="db-img"><img src={db}/></div>{item.size}</div>
                                <div className="repo-update">Updated {item.update} days ago</div>
                                
                            </div>
                        </div>
                    ))
                 }
          </div>
        </div>
        :
        <div className='extra-page'>
            <div className='extra-page-inner'>
            CodeAnt AI
            </div>
            </div>
            }
    </div>

   </div>
  )
}

export default RepoScr
