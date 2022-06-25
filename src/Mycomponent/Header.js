import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav className ="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h1>{props.title}</h1></a>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" class="btn btn-secondary btn">
                <Link to='ml1'>ML PROJECT 1</Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-secondary btn">
                <Link to='ml2'>ML PROJECT 2</Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-secondary btn">
                <Link to='ml3'>ML PROJECT 3</Link>
              </button>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.propsTypes = {
  title: PropTypes.string.isRequired
}