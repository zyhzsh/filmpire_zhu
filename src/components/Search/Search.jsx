import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

import { searchMovie } from '../../features/currentGenreOrGategory';

const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>

      <TextField
        InputProps={
           {
             className: classes.input,
             startAdornment: (
               <InputAdornment position="start">
                 <SearchIcon />
               </InputAdornment>
             ),
           }

        }
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => { setQuery(e.target.value); }}
        variant="standard"
      />

    </div>
  );
};

export default Search;
