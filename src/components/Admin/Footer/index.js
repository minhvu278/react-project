import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer className="main-footer">
            <strong>Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.0.5
            </div>
        </footer>
    );
}

Footer.propTypes = {

}

export default Footer
