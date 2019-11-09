import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/form';
import { FirebaseContext } from '../components/fire';

const NewProduct = () => {
    return (
        <Layout>
            <FirebaseContext.Consumer>
                {firebase => (
                    <Form
                        firebase={firebase}
                    />
                )}
            </FirebaseContext.Consumer>
        </Layout>
    );
}

export default NewProduct;