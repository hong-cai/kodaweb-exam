import React from 'react'
import PropTypes from 'prop-types'

function NavMenu(props) {
    return (
<li className={props.active}><a href="#">{props.menu}</a></li>
    )
}

NavMenu.propTypes = {

}

export default NavMenu

