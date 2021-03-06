import React, {useState} from 'react'
import styled from "styled-components";
import useStyles from './styles'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
const Title = styled.h1`

`
const Links = styled.div`
textAlign: center;
    fontSize: 17px;
    color: #535353;
`
const Phone = styled.p`

`
const Email = styled.p`

`
const Info = styled.div`
    color: #1D8246;
    font-weight: bold;
`
const Block = styled.a`
display: block;
`
const Github = styled.a`
marginTop: 10px;
`

const About = () => {
    const classes = useStyles();
    
    const [lang, setLang] = useState('tr')
    const handleClick =() =>{
        if(lang ==='tr')
        {
            setLang('usa');
        }
        else if (lang ==='usa')
        {
            setLang('tr')
        }
    }
    return (
       
        <div >
         <ChangeCircleIcon className={classes.pointer}  onClick={handleClick}/>
       {lang === 'tr' ? <img className={classes.flag} alt="tr" src="data:image/png;base64,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"/>: <img className={classes.flag} src="https://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F660.png" alt="usa"/> }
            
      
       <Title className={classes.title}>Mehmet Volkan Vural</Title>
      
        <Links className={classes.links}>
        <Phone>0544 266 1152</Phone>
      <Info>
          <Email>volkanvural01@gmail.com</Email>
        
       <Block className={classes.colorGreen} href="https://linkedin.com/in/volkan-vural-software/">LinkedIn</Block>
        <Block className={classes.block} href="https://github.com/Volkansoftware">
        <Github className={classes.colorGreen}>
            Github
            </Github>
        </Block>
      

        </Info>
        
        </Links>
        {

       lang=== 'tr' ?
       <div className={classes.container}> 
       
       <div className={classes.summary}>
             <h2 className={classes.secondTitle}>??ZET</h2>
            
             <ul className={classes.listStyle}>
             <li>
                    <p className={classes.colorGray}>MakasApp ??irketinde 2 ay staj yapt??m  . Staj s??ras??nda React ??zerinde ??al????malar yapt??m  </p>

                </li>
                <li>
                    <p className={classes.colorGray}> Udemy.com'da Sad??k TURAN'dan "Komple uygulamal?? web geli??tirme " ad??nda kurs ald??m. Bu kursta frontend ve backend i??eriklerini kaps??yor. ??imdilik html css javascript k??s??mlar??n?? bitirdim. </p>
                </li>
                <li>
                    <p className={classes.colorGray}>Kodluyoruz ekibinin d??zenlendi??i front end challange kat??l??m?? g??sterdim. Burada ??ok say??da kendimi geli??tirmek i??in verilen ??devler vard?? bu ??devler sayesinde kendimi geli??tirdi??imi fark ettim. Bu bootcampte git,html,css bootstrap,javascript,react dersleri yer al??yordu.</p>
                </li>
                </ul>
                </div>
                <h2 className={classes.secondTitle}>DENEY??M</h2>

             <ul className={classes.listStyle}>
                <li>
                    <p className={classes.date}>Aral??k 2020-Ocak 2021</p>
                    <p className={classes.colorGreen}>STAJYER, <span className={classes.date}>MAKASAPP</span></p>
                    <p className={classes.colorGray}>React ??zerine ??al????malar yapt??m.</p>
                </li>
               
            </ul>
      
            <h2 className={classes.secondTitle}>E????T??M</h2>
            <ul className={classes.listStyle}>
                <li>
                    <p className={classes.colorGreen}>3. SINIF, <span className={classes.date}>BEYKOZ ??N??VERS??TES??</span></p>
                    <p className={classes.colorGray}> Beykoz ??niversitesi'de Yaz??l??m M??hendisi ????rencisiyim ??u anda 3. s??n??fta ????renime devam ediyorum.</p>
                </li>
                <li>
                    <p className={classes.colorGreen}>MEZUN??YET TAR??H??: <span className={classes.date}>24/04/2018</span></p>
                    <p className={classes.date}>DR. M. FEYYAZ ETIZ HIGH SCHOOL</p>
                    <p className={classes.colorGray}>73,09 ortalama ile mezun oldum. Okulumda futbol ve Satran?? turnuvalalar??nda ikincilik elde ettim.</p>
                </li>
            </ul>
            <h2 className={classes.secondTitle}>YETENEKLER</h2>
           
          
               
           <Box sx={{ flexGrow: 1 }}>
 <Grid container spacing={2}>
   <Grid item xs={6}>
     <ul>
     <li>Html, CSS, JavaScript, React</li>
           <li>C++, C, Arduino, SQLite database, Qt</li>
           <li>Orta seviye ingilizce</li>
     </ul>
   </Grid>
   <Grid item xs={6}>
    <ul>
    <li>Tak??m ??al????mas?? yatk??nl??????</li>
   <li>??leti??im</li>
   <li> Kendini geli??tirmeye ve bilgiye her zaman a????k</li>
    </ul>
   </Grid>
  
 </Grid>
</Box>

<h2 className={classes.secondTitle}>??LG?? ALANLARI</h2>
            <ul> 
            
            <li>Y??zmek</li>
            <li>Futbol</li>
            <li>Satran??</li>
            <li>Bilgisayar Oyunlar??</li>
            
            </ul>
       
       
       
       
       
       
       
       
       
       
       
       </div>
       : 
       <div className={classes.container}>
            <div className={classes.summary}>
             <h2 className={classes.secondTitle}>SUMMARY</h2>
            
             <ul className={classes.listStyle}>
             <li>
                    <p className={classes.colorGray}>I was internship at makasApp . I worked on React there. </p>

                </li>
                <li>
                    <p className={classes.colorGray}> I have course from udemy.com from sad??k turan.  The course title is "Lots of practice for web development" in this course include the front end and backend but i finished html, css, bootstrap, javascript,  for now.</p>
                </li>
                <li>
                    <p className={classes.colorGray}>I joined the bootcamp from kodluyoruz.org there was many task for development myself. I succeed on these tasks. In this bootcamp include the git, html, css, bootsrap, javascript, react</p>
                </li>
                </ul>
                </div>
          <h2 className={classes.secondTitle}>EXPERIENCE</h2>

             <ul className={classes.listStyle}>
                <li>
                    <p className={classes.date}>December 2020-January 2021</p>
                    <p className={classes.colorGreen}>INTERN, <span className={classes.date}>MAKASAPP</span></p>
                    <p className={classes.colorGray}>I worked on React</p>
                </li>
               
            </ul>
            <h2 className={classes.secondTitle}>EDUCATION</h2>
            <ul className={classes.listStyle}>
                <li>
                    <p className={classes.colorGreen}>THIRD YEAR IN, <span className={classes.date}>BEYKOZ UNIVERSITY</span></p>
                    <p className={classes.colorGray}>I am software engineer at Beykoz University and I am third grade.</p>
                </li>
                <li>
                    <p className={classes.colorGreen}>CERTIFICATE DATE: <span className={classes.date}>24/04/2018</span></p>
                    <p className={classes.date}>DR. M. FEYYAZ ETIZ HIGH SCHOOL</p>
                    <p className={classes.colorGray}>I graduated 73.09 average, in my school there was chess and football event my degree is second both of them</p>
                </li>
            </ul>
            <h2 className={classes.secondTitle}>SKILLS</h2>
           
          
               
                <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ul>
          <li>Html, CSS, JavaScript, React</li>
                <li>C++, C, Arduino, SQLite database, Qt</li>
                <li>Intermediate English</li>
          </ul>
        </Grid>
        <Grid item xs={6}>
         <ul>
         <li>Teamwork skills</li>
        <li>Communication</li>
        <li>Open for more knowledge and development myself</li>
         </ul>
        </Grid>
       
      </Grid>
    </Box>
    <h2 className={classes.secondTitle}>INTERESTS</h2>
            <ul> 
            
            <li>Swimming</li>
            <li>Football</li>
            <li>Chess</li>
            <li>Computer Games</li>
            
            </ul>
          
        </div>
       } 
        
       
        </div>
    )
}

export default About
