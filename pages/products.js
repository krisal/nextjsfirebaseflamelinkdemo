import Layout from "../components/Layout";

// export default () => {
//   return (
//     <Layout>
//       <h1>Products</h1>
//     </Layout>
//   );
// };

function Products({ stars }) {
    return (
        <Layout>
          <h1>Next stars: {stars}</h1>
        </Layout>
      );
}

// Products.getInitialProps = async ({ req }) => {
//     //Firebase functions products list
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
// }

export default Products;