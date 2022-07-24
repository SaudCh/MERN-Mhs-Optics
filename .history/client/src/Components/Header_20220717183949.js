import React from 'react'
import { Link } from 'react-router-dom'
import { EarthIcon, SearchIcon, ShoppingCartIcon, UserIcon } from './icons';


export default function Header({ background }) {
    return (
        <nav class={`navbar navbar-expand-lg ${background ? 'navbar-light bg-light' : 'navbar-dark'}`} style={{ backgroundColor: 'none' }
        }>
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Logo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page">Sunglasses</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Prescription Glasses</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Wishlist</Link>
                        </li>
                    </ul>
                    <ShoppingCartIcon color="white" style={{ marginRight: 15 }} />
                    <SearchIcon color="white" style={{ marginRight: 15 }} />
                    <EarthIcon color="white" style={{ marginRight: 15 }} />
                    <UserIcon color="white" style={{ marginRight: 10 }} />
                </div>
            </div>
        </nav >
    )
}
