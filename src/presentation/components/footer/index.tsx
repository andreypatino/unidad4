import React from 'react';
//lib
// assets
//styles
import {txtCarr } from './style';

function Footer(){
    return(
<footer className="page-footer font-small blue pt-4" style={{backgroundColor:'#141619'}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase" style={{color:'white'}}>Footer Content</h5>
                <p className={txtCarr}>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color:'white'}}>Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className={txtCarr}>Link 1</a></li>
                    <li><a href="#!" className={txtCarr}>Link 2</a></li>
                    <li><a href="#!" className={txtCarr}>Link 3</a></li>
                    <li><a href="#!" className={txtCarr}>Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color:'white'}}>Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className={txtCarr}>Link 1</a></li>
                    <li><a href="#!" className={txtCarr}>Link 2</a></li>
                    <li><a href="#!" className={txtCarr}>Link 3</a></li>
                    <li><a href="#!" className={txtCarr}>Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{color:'white'}}>© 2022 Copyright:
        <a href="#." className={txtCarr}> Karen Tatiana Jaimes, Andrey Sarria, Poldark Diaz</a>
    </div>

</footer>
    );
}
export default Footer;