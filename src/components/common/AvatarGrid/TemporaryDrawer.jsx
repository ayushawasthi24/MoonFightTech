import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AvatarGrid from './AvatarGrid';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Avatar Grid</Button> {/* Button to open the drawer */}
      
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 390 }} role="presentation" onClick={toggleDrawer(false)}>
          {/* Render AvatarGrid inside the drawer */}
          <AvatarGrid />
        </Box>
      </Drawer>
    </div>
  );
}

