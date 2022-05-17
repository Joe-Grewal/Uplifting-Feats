import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BDeleteEntry (props) {

  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("I've been clicked", props.entryId, props.userId)
    axios.delete(`/api/entries/${props.entryId}`)
    .then(navigate(`/users/${props.userId}/view_entries`));
  };

  const theme = createTheme ({
    typography: {
      fontFamily: [
        'Quicksand', 'sans-serif',
      ].join(','),
      fontSize: 16,
      fontWeightMedium:700,
    },
    palette: {
      primary: {
        main: '#B145CC'
      },
      action: {
        hover: (106, 24, 168, 1)
      }
    },
    shape: {
      borderRadius: 20
    },
    // shadows: {
    //   0: "none"
    // }
  });

  const link = `/users/${props.userId}/view_entries`;

  return (
    <ThemeProvider theme={theme}>
      <div className="delete_entry_button">
      <Button
      href={link}
      onClick={() => handleDelete()}
      variant="contained">
        DELETE ENTRY
    </Button>
      </div>
  </ThemeProvider>
  )
}