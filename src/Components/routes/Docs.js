import React from 'react'
import './Docs.css'

function Docs() {
    return (
        <div className="docs-container">
            <div className="docs-main">
                <>
                <h1>Docs</h1>
                <p>This page is an overview of the AireCoin documentation and related resources.</p>
                <p>If you want to know what is ethereum, how it works, and what it can be used for, without going deep into the technical abyss, this guide is perfect for you.</p>
                <h2>Quick start</h2>
                <h3>More info on quick start</h3>
                <p>To interact with a Aire cluster, we will use its command-line interface, also known as the ultimate CLI. We use the command-line because it is the first place the AireCoin core team deploys new functionality. The command-line interface is not necessarily the easiest to use, but it provides the most direct, flexible, and secure access to your Solana accounts.</p>
                <h3>This is the second heading</h3>
                </>
                <>
                <h2>Nodes</h2>
                <h3>More info on quick start</h3>
                <p>To interact with a Aire cluster, we will use its command-line interface, also known as the CLI. We use the command-line because it is the first place the Solana core team deploys new functionality. The command-line interface is not necessarily the easiest to use, but it provides the most direct, flexible, and secure access to your Solana accounts.</p>
                <h3>This is the second heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </>
            </div>
            
            <div className="docs-menu">
            <ul>
                <li>Quick Start</li>
                <li>Nodes</li>
                <li>Wallets</li>
                <li>Bridges</li>
            </ul>

            </div>
            
        </div>
    )
}

export default Docs
