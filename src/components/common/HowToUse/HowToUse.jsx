import { Radius } from 'lucide-react';
import React from 'react';
import "./HowToUse.css"; 
import { VerticalAlignCenter } from '@mui/icons-material';

const HowToUse = () => {
  return (
    
    <div className="container"
    
    style={{
      backgroundImage: `url('images/backgroudn.png')`,  
      backgroundColor: '#FE9BF3',
      paddingLeft: '5px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '21px',
      height: '95px',
      width: '100%'
    }}>
    
    <div className="flex-container">
      
        <div className="token-image">
        <img src="/icons/Group 427319659.png" alt="Group 1" width={25} height={25} />
        </div>
        <h5>Build your<br />Team of<br />Tokens</h5>
      


  
        <div className="point-image">
        <img src="/icons/Group 427319845.png" alt="Group 1" width={25} height={25} />
        </div>
        <h5>Earn Points<br />for each<br />Tokens</h5>


        <div className="reward-image">
        <img src="/icons/trophy-icon 1.png" alt="Group 2" width={25} height={27} />
        </div>
        <h5>Win Rewards<br />based on<br />your Rank</h5>
      
        </div>
        
        <div className="Learn-More-Button">
        <button style={{
          alignItems:"center",
          justifyContent:"center",
          textAlign:"center",
          backgroundColor: 'black',
          color: 'white',
          height: '20px',
          padding: '12px',
          marginLeft: '268px',
          marginTop: '-10px',
          fontSize: '8.5px',
          borderRadius: '8px',
          lineHeight: '0' 
          }}>
            Learn More</button>
        </div>
    </div>
  );
};

export default HowToUse;
