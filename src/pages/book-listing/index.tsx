import { Typography } from '@material-ui/core';
import { execPath } from 'process'
import React from 'react'
import { AuthContext, useAuthContext } from '../../context/auth';

const BookListing: React.FC = () => {
    const authContext = useAuthContext();
  return (
    <div>
        <Typography color="textPrimary">Login</Typography>
    </div>
  );
};
export default BookListing;