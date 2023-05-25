import React from 'react'
import './Toast.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    return (
        <div className='toast-box active'>
            <ToastContainer limit={4} pauseOnFocusLoss={false} />
        </div>
    )
}
