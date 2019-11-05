import React from "react";
import Head from "next/head";
import Link from "next/link";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps({ req }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
    render() {
        const { children } = this.props;
        const title = "Welcome to Nextjs";
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <header>
                    <style jsx>
                        {`
              a {
                color: red;
              }
            `}
                    </style>
                    <ul className="navbar navbar-dark bg-dark">
                        <li>
                            <Link href="/">
                                <a className="navbar-brand">Hem</a>
                            </Link>
                        </li>

                        <li className="ml-auto">
                            <Link href="/tillbehor">
                                <a className="nav-link">Tillbehör</a>
                            </Link>
                        </li>
                    </ul>
                </header>
                <div>{children}</div>
            </div>
        );
    }
}

export default Layout;