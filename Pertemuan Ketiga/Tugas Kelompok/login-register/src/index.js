import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import FrmLogin from './component/FrmLogin';
import FormRegister from './component/FormRegister';
import reportWebVitals from './reportWebVitals';

// export default function FrmLogin() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element = {<FrmLogin />} />
//                 <Route path="register" element={<FormRegister />} />
//             {/* </Route> */}
//             </Routes>
//         </BrowserRouter>
//     );
// }

// ReactDOM.render(<FrmLogin />, document.getElementById('root'));
ReactDOM.render(<FormRegister />, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
