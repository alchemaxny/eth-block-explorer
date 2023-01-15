import React, { useState } from "react";
//import { Alchemy, Network, Utils } from 'alchemy-sdk';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { DisplayPrice, DisplayBlock, DisplayBlockTransactions, DisplayTransactionsRoute } from "./Display";
import { Create } from "@mui/icons-material";

/*
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}

export const alchemy = new Alchemy(settings);
*/
function App() {
/*  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
*/
  return (
    <div>
      <Header />
      <table><tbody><tr><td>
      <DisplayPrice hName="Ethereum Price" />
      <DisplayBlock hName="Latest Block Number" />
      <DisplayBlockTransactions hName="Latest Block Transactions Count" />
      <DisplayTransactionsRoute hName="Transactions List" />
      </td></tr></tbody></table>
      <CreateArea />
      {/*<CreateArea onAdd={addNote} />*/}
{/*      {notes.map((noteItem, index) => { // noteItem is the currentValue, index is the index of the current element
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}*/}
      <Footer />
    </div>
  );
}

export default App;
