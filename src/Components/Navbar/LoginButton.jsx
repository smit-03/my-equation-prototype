import React from 'react';
import Button from '@mui/material/Button';

export const LoginButton = () => {
  return (
    <div className="block place-content-center">
      {/* login button */}
      <Button
        variant="contained"
        className="bg-gradient-to-r from-indigo-500 to-[#ab47bc]"
        sx={{ textTransform: 'none', fontWeight: 'bolder', paddingX: '20px' }}
      >
        Sign In
        <i className="ml-2 fa-solid fa-arrow-right-to-bracket"></i>
      </Button>
    </div>
  );
};
