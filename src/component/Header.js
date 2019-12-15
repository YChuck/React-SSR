import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return <>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
    </>
}
