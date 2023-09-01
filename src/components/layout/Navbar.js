import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({icon, title}) => {
    return (
      <nav className='navbar bg-primary'>
        <h1>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> {title}
        </h1>
      </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'faMagnifyingGlass'
};

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar