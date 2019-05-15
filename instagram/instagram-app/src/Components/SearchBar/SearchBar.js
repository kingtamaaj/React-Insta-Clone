import React from 'react';
import './SearchBar.css'
import IgLogo from '../../images/iglogo.png'

const SearchBar = () =>
{
    return (
        <div className="SearchBar">
            <div className="image">
                <img alt="ig logo" src={IgLogo} className="logo-image" />
            </div>
            {/* camera icon and logo */}
                <div>
                    <input type="text" placeholder="Search" />
                </div>
            
        <div className="social-div">
            <div className="social">
                <i className="fa fa-compass" />
            </div>
        
        <div className="social">
                <i className="fa fa-heart" />
        </div>

        <div className="social">
                <i className="fa fa-user-circle" />

            </div>
        </div>
    </div>

    );
};


export default SearchBar;