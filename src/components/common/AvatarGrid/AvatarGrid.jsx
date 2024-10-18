import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100px', 
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
  },
  
  header: {
    backgroundImage: `url('images/Mask group.png')`,
    padding: '20px 0',
    font: 'Poppins',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20.44px',
    gap: '-20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },


  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5px',
  },

  card: {
    width: '150px',
    margin: '20px',
    textAlign: 'center',  // Center-align text
    backgroundColor: '#353535',
    border: '1px solid',
    borderColor: '#6b61ff' ,
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Ensures vertical center alignment
    alignItems: 'center',     // Ensures horizontal center alignment
    position: 'relative', // Position relative for absolute elements inside
  },

  image: {
    width: '100%',
    height: '150px',
    borderRadius: '8px 8px 0 0',
  },

  button: {
    position: 'absolute',
    bottom: '45px',
    right: '-22px',
    borderRadius: '50%',
    padding: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    '& img': {
      width: '30px', // Adjust size as needed
      height: '30px',
    },
  },

  crown: {
    position: 'absolute',
    top: '-12px',
    right: '-10px',
    width: '20px',
  },

 name: {
    fontWeight: '300',
    width: '82px',
    height: '17px',
    top: '471px',
    left: '226px',
    fontSize: '16px',
    fontFamily: 'Arial',
    margin: '0',
    color: '#d9d9d9',
    lineHeight: '20px',
    textAlign: 'center',  // Center-align name text
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '7px'

  },

  credits: {
    marginTop: '0px',
    fontSize: '14px',
    color: '#d9d9d9',
    fontFamily: 'Arial',
    paddingTop: '14px',
    paddingBottom: '7px',
    textAlign: 'center',  // Center-align credits text
  },

  footer: {
    padding: '20px 0',
    backgroundColor: '#6200EE',
    borderRadius: '40px',
    color: '#ffffff',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '16.94px'
  },
});

const avatars = [
  { name: 'Tim Walz', credits: 9.5, imageUrl: 'images/Tim Walz.png', buttonIcon: 'icons/Edit Icon.png' , crownIcon: 'icons/crown 1.png' },
  { name: 'LANDLORDPP', credits: 7.5, imageUrl: 'images/LandlordPP.png', buttonIcon: 'icons/Edit Icon.png' },
  { name: 'CATMOUSE', credits: 7.5, imageUrl: 'images/CatMouse.png', buttonIcon: 'icons/Edit Icon.png' },
  { name: 'BULL', credits: 7.5, imageUrl: 'images/Bull.png', buttonIcon: 'icons/Edit Icon.png' },
  { name: 'SOLCAT', credits: 7.5, imageUrl: 'images/SolCat.png', buttonIcon: 'icons/Edit Icon.png' },
];

const AvatarGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      {/* Header */}
      <div className={classes.header}>
        <img src="icons/Solana Icon.png" alt="Solana Logo" style={{ width: '25px', marginRight: '5px' }} />
        Team Solana Maxis
      </div>

      {/* Avatar Grid */}
      <div className={classes.container}>
        {/* First avatar (Tim Walz) */}
        <div className={classes.card}>
          <img src={avatars[0].imageUrl} alt={avatars[0].name} className={classes.image} />
          <div className={classes.name}>{avatars[0].name}</div>
          <div className={classes.credits}>{avatars[0].credits} Credits</div>
          {/* Button */}
          <div className={classes.button}>
            <img src={avatars[0].buttonIcon} alt="button-icon" />
          </div>
          
          {/* Crown Icon */}
          <img src={avatars[0].crownIcon} alt="crown-icon" className={classes.crown} />
        </div>

        <div className={classes.row}>
          <div className={classes.card}>
            <img src={avatars[1].imageUrl} alt={avatars[1].name} className={classes.image} />
            <div className={classes.name}>{avatars[1].name}</div>
            <div className={classes.credits}>{avatars[1].credits} Credits</div>
            {/* Button */}
            <div className={classes.button}>
              <img src={avatars[1].buttonIcon} alt="button-icon" />
            </div>
          </div>

          <div className={classes.card}>
            <img src={avatars[2].imageUrl} alt={avatars[2].name} className={classes.image} />
            <div className={classes.name}>{avatars[2].name}</div>
            <div className={classes.credits}>{avatars[2].credits} Credits</div>
            {/* Button */}
            <div className={classes.button}>
              <img src={avatars[2].buttonIcon} alt="button-icon" />
            </div>
          </div>
        </div>

      
        <div className={classes.row}>
          <div className={classes.card}>
            <img src={avatars[3].imageUrl} alt={avatars[3].name} className={classes.image} />
            <div className={classes.name}>{avatars[3].name}</div>
            <div className={classes.credits}>{avatars[3].credits} Credits</div>
            {/* Button */}
            <div className={classes.button}>
              <img src={avatars[3].buttonIcon} alt="button-icon" />
            </div>
          </div>

          <div className={classes.card}>
            <img src={avatars[4].imageUrl} alt={avatars[4].name} className={classes.image} />
            <div className={classes.name}>{avatars[4].name}</div>
            <div className={classes.credits}>{avatars[4].credits} Credits</div>
            {/* Button */}
            <div className={classes.button}>
              <img src={avatars[4].buttonIcon} alt="button-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Next button */}
      <div className={classes.footer} onClick={() => alert('Next button clicked')}>
        Next
      </div>
    </div>
  );
};

export default AvatarGrid;
