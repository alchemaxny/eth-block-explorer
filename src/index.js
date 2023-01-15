import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Transactions from "./components/Transactions";
import NotFoundPage from "./components/NotFoundPage";
import Addresses from "./components/Addresses";
import TxnDetails from "./components/TxnDetails";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router>
      <Routes>
        <Route path="/" element={<App tab="home" />} />
        <Route path="/block" element={<Transactions />} />
        <Route path="/address" element={<Addresses />} />
        <Route path="/transactions" element={<TxnDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>);