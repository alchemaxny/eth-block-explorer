import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

function Header() {
  return (
    <header>
      <h1>
        <QueryStatsIcon />
        Ethereum Blockchain Explorer 
      </h1>
    </header>
  );
}

export default Header;
