import React from 'react';
import './Navbar.css';
import Vlogo from '../../Assets/vislogo.jpeg';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className='nav-con'>
            <div className='nav-inner-con'>
                <div className='nav-log-outbox'>
                <div className='nav-log'>
                        <img src={Vlogo} alt='vlogo'/>
                        <div className='nav-log-head'>
                            <p><span>v</span>ivekananda</p>
                            <p><span>i</span>nternational</p>
                            <p><span>s</span>chool</p>
                        </div>
                </div>
                </div>
                
                
                <div className='nav-log-ul'>
                    <ul>
                        <NavLink to='/'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>home</div>
                                    <span className='btn-wrapper-bottom'>home</span>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to='/about'>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>About</div>
                                <span className='btn-wrapper-bottom'>About</span>
                            </div>
                        </li>
                        </NavLink>
                        
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>Academics</div>
                                <span className='btn-wrapper-bottom'>Academics</span>
                            </div>
                        </li>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>facilities</div>
                                <span className='btn-wrapper-bottom'>facilities</span>
                            </div>
                        </li>
                        <NavLink to='/activities'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>activities</div>
                                    <span className='btn-wrapper-bottom'>activities</span>
                                </div>
                            </li>
                        </NavLink>
                            
                        
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>careers</div>
                                <span className='btn-wrapper-bottom'>careers</span>
                            </div>
                        </li>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>Admissions</div>
                                <span className='btn-wrapper-bottom'>Admissions</span>
                            </div>
                        </li>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>gallery</div>
                                <span className='btn-wrapper-bottom'>gallery</span>
                            </div>
                        </li>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>FAQ's</div>
                                <span className='btn-wrapper-bottom'>FAQ's</span>
                            </div>
                        </li>
                        <NavLink to='/contact'>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>contact</div>
                                <span className='btn-wrapper-bottom'>contact</span>
                            </div>
                        </li>
                        </NavLink>
                       
                    </ul>
                </div>
                <div className='nav-res'>
                    <div className='nav-res-lines'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>menu</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;