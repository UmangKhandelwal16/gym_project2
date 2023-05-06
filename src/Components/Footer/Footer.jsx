import React from 'react'
import style from './Footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (

<div className={style.footContainer}>
    <div className={style.foot} >


      <div>
       <div className={style.logo}>
        <h4><b>GYM</b></h4>
       
        <p>“The only bad workout is the one that didn't happen”</p>
        </div>

        <div className={style.footLink}>

          <a href='http://twitter.com' ><TwitterIcon sx={{ color: "white", fontSize: "2em" }} /></a>
          <a href='http://facebook.com' ><FacebookOutlinedIcon sx={{ color: "white", fontSize: "2em" }} /></a>
          <a href='http://insagram.com' ><InstagramIcon sx={{ color: "white", fontSize: "2em" }} /></a>

        </div>

      </div>

      <ul><h4>Lifestyle</h4>
        <li>Cycling</li>
        <li>gyming</li>
        <li>yoga</li>
        <li>Reading</li>
      </ul>

      <ul> <h4>Health</h4>
        <li>Physical</li>
        <li>Spritual</li>
        <li>Mental</li>
        <li>Intellectual</li>
      </ul>


      <ul><h4>Programs</h4>
        <li>Un</li>
        <li>duex</li>
        <li>troi</li>
        <li>Quatre</li>
      </ul>
    </div>
<div className={style.lastfoot} >
<hr style={{color:"white"}} />
    <p className={style.last} >@2023. All Copyrights are reserved.</p>
    </div>
    </div>

  )
}

export default Footer