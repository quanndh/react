import React, {Component} from 'react';
import SearchField from './searchField';
import logo from '../img/logo.png';
import ProfilePanel from './ProfilePanel';

class NavBav extends Component{
    render() {
        const {onSearchChange, onLogin, username} = this.props;
        return (
            <div className="navbar navbar-expand mb-2">
                <div className="container">
                    <SearchField 
                        onSearchChange={onSearchChange}/>
                    <div className="col-6 text-center">
                        <img src={logo} alt=""/>
                    </div>  
                    <ProfilePanel
                        onLogin={onLogin}
                        username={username}/>
            
                </div>  
            </div>
        );
    }
}

export default NavBav;