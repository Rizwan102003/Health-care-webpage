import React from 'react'
export default function Footer( ){
    const footer1 ={
        backgroundColor: 'pink',
        color: 'black',
        padding: '20px',
        border: '2px solid #000'
    };
    
    const footerContent= {
        display: 'flex',
       
    };
    
    const footerSection = {
        flex: '1',
        margin: '20px'
    };
    
    
    
   
    
    
   
    
    const footerBottom ={
        backgroundColor: '#222',
        textAlign: 'center',
        padding: '10px 0'
    };
    
    
    return(
        <footer className="footer">
    <div className="container" style={footer1}>
        <div style={footerContent}>
            <div className="footerSection about">
                <h2>About Us</h2>
                <p>We Expect the Unexpected.</p>
                
            </div>
                    <div style={footerSection }>
                <h2>Quick Links</h2>
                <ul>
                    
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
            </div>
            <div style={footerSection}>
                <h2>Contact Us</h2>
                <p>Email: unitedhealth24X7@gmail.com</p>
                <p>Phone: +91 9876543210</p>
            </div>ss
        </div>
    </div>
    <div style={footerBottom}>
        <p>&copy; 2023 United Home Healthcare. All rights reserved.</p>
    </div>
    </footer>
    )
}