import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDI2SsyhB94Mbc3OqML4KzSoy3Xx-TEUVE",
    authDomain: "lab-nextjs-fe.firebaseapp.com",
    databaseURL: "https://lab-nextjs-fe.firebaseio.com",
    projectId: "lab-nextjs-fe",
    storageBucket: "lab-nextjs-fe.appspot.com",
    messagingSenderId: "345661669467",
    appId: "1:345661669467:web:4ff7f5c1a0d87c112e3f7e"
};

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        this.database = firebase.database;
    }

    doAddNewProduct = (data, cb) => {
        console.log("ADDING NEW...")
        const ref = firebase.database().ref('products');

        return ref.push(data, () => { return cb() });
    }
}

export default Firebase;