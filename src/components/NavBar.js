import React from 'react';
import '../App.css'
const NavBar = (props) => {
    console.log(props.showForm);
    return (
        <nav>
            <ul className="navbar">
                <li onClick={() => props.onTabChange('post')}
                    className={props.showForm === 'post' ? 'active' : null}> Post </li>
                <li onClick={() => props.onTabChange('put')}
                    className={props.showForm === 'put' ? 'active' : null}> Put </li>
                <li onClick={() => props.onTabChange('delete')}
                    className={props.showForm === 'delete' ? 'active' : null}> Delete </li>
            </ul>
        </nav>
    );
};

export default NavBar;