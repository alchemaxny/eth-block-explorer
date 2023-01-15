//import { useRouter } from "next/navigation";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
//https://mui.com/material-ui/material-icons/
import { classifyEthereumHash } from "../lib/hash.ts";

import {useNavigate} from "react-router-dom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [input, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
/*
    const trimmedValue = value.trim();
    if (trimmedValue.length < 0) {
      console.log("empty?");
    }
    const hashType = classifyEthereumHash(trimmedValue);

    if(hashType === "transaction") {
      console.log(hashType);
    }
    if(hashType === "address") {
      console.log(hashType);
    }
    if(hashType === "block") {
      <Link to="/transactions">View</Link>
    }
    if(hashType == "unknown") {
      console.log("unknown");
    }
*/    
    setInput(value);
  }

  const navigate = useNavigate();

  function submitNote(event) {
    console.log(input);
    const hashType = classifyEthereumHash(input);

    if(hashType === "transaction") {
      console.log(hashType);
      navigate(`/transactions`, {state:{ txn: [input]}});
    }
    if(hashType === "address") {
      navigate(`/address`, {state:{ address: [input]}});
      console.log(hashType);
    }
    if(hashType === "block") {
      console.log(hashType);
      navigate(`/block`, {state:{ block: [input]}});
    }
    if(hashType == "unknown") {
      console.log("unknown");
    }

    setInput("");

    event.preventDefault(); // prevent default form submission refresh behaviour
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={input}
          placeholder="Search for an address, transaction hash or block number"
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
