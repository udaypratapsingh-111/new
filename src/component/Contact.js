import React from 'react';
import contactImage from '../images/contact.jpg';
import contactImage1 from '../images/x.jpg';

 function Contact (){
    
     return <div>
      <font face="Wildwest" size="20px" color="white">  
     
      DIST.SIDHI,MADHYA PRADESH,WARD NO.22 , <br />
         PINCODE:486661 <br/>
     
         </font>
         <font face="Wildwest" size="20px" color="yellow"> 
         EMAIL: chauhanbds006@gmail.com  <br />
         </font>
         <img src = {contactImage} alt ="images of page" /> <br/>
         <img src = {contactImage1} alt ="images of page" />
 <br/>
         
         </div>
     

 }
 export default Contact;