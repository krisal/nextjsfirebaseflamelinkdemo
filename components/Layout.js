import React from "react";
import Head from "next/head";
import Header from './header';

import Firebase, { FirebaseContext } from './fire';

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
            <FirebaseContext.Provider value={new Firebase()}>
                <div>
                    <Head>
                        <title>{title}</title>
                        <meta charSet="utf-8" />
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <Header />
                    <div className="main">{children}</div>
                    <style jsx global>
                        {`
                    body {
                        margin: 0;
                    }

                    .main {
                        padding: 15px;
                    }                        
                `}
                    </style>
                </div>
            </FirebaseContext.Provider>
        );
    }
}

export default Layout;