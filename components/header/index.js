import React from 'react';
import logo from "../../Padelaccess_White.png";
import Link from "next/link";

export default () => {
    return (
        <React.Fragment>
            <header className="header">
                <style jsx>
                    {`
              .header {
                display: flex;
                justify-content: center;
                width: 100%;
                background: #282c34;
                box-shadow: 0px 0px 5px 0px #404040;
              }

              .header__inner {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                max-width: 1440px;
                height: 80px;
                padding: 20px;
            }

            .header__inner a {
                color: #fff;
                text-decoration: none;
            }

            .header__logo {
                margin-left: 0;
                margin-top: -10px;
                height: 60px;
            }

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                font-size: 18px;
            }

            li {
                float: left;
                margin: 0 10px;
            }
            `}
                </style>
                <div className="header__inner">
                    <Link href="/">
                        <img className="header__logo" src={logo} alt="logo" />
                    </Link>
                    <ul className="header__menu">
                        <li>
                            <Link href="/">
                                <a className="navbar-brand">Hem</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                <a className="navbar-brand">Produkter</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/addnew">
                                <a className="navbar-brand">Ny</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    );
};
