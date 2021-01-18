
import React from 'react';
import '../Components/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Button from '@material-ui/core/Button';
import PinterestIcon from '@material-ui/icons/Pinterest';


function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <Button>
                    <PinterestIcon />
                    <h3>Pinterest</h3>
                </Button>
                <Button>explore</Button>
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder='Search anything like Art, Drawing, Fashion, etc. '/>
            </div>
            <div className="header__right">
                <Button>log in</Button>    
                <Button>sign up</Button>
                <Button>
                <ExpandMoreRoundedIcon />  
                </Button>
            </div>
        </div>
    )
}

export default Header
