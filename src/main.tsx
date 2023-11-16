import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import App from './App.tsx'
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import {queryClient} from "./shared/services";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
