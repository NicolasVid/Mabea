import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';
import Image1 from '../img/Image1.png';
import Image2 from '../img/Image2.png';
import Image3 from '../img/Image3.png';
import Image4 from '../img/Image4.png';
import Image5 from '../img/Image5.png';
import Image6 from '../img/Image6.png';
import Image7 from '../img/Image7.png';
import Image8 from '../img/Image8.png';

class Welcome extends React.Component {
    
    componentDidMount() {
        document.addEventListener('mousemove', parallax);
        function parallax(e){
            this.querySelectorAll('.Layer1, .Layer2, .Layer3, .Layer4, .Layer5, .Layer6, .Layer7, .Layer8, .Layer9').forEach(layer => {
                const speed = layer.getAttribute('data-speed');

                const x = (window.innerWidth - e.pageX*speed)/100
                const y = (window.innerHeight - e.pageY*speed)/100
    
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
            
        }
    };
    
    render(){
    return (
        <div className="Welcome">
            <p><span>Bienvenue sur Mabéa</span></p>
            <img src={Image1} alt="" data-speed="-5" className="Layer1" copyright="https://thenounproject.com"/>
            <img src={Image2} alt="" data-speed="2" className="Layer2" copyright="https://thenounproject.com"/>
            <img src={Image3} alt="" data-speed="-3" className="Layer3" copyright="https://thenounproject.com"/>
            <img src={Image4} alt="" data-speed="3" className="Layer4" copyright="https://thenounproject.com"/>
            <img src={Image5} alt="" data-speed="5" className="Layer5" copyright="https://thenounproject.com"/>
            <img src={Image6} alt="" data-speed="4" className="Layer6" copyright="https://thenounproject.com"/>
            <img src={Image7} alt="" data-speed="-7" className="Layer7" copyright="https://thenounproject.com"/>
            <img src={Image8} alt="" data-speed="-8" className="Layer8" copyright="https://thenounproject.com"/>
            <Link to="/Read"><button >Commencer a lire des BA</button></Link>
        </div>
    )
};
}

export default Welcome;
