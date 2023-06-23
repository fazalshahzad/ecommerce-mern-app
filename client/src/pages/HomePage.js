import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth,setAuth] = useAuth()
  return (
    <Layout>
      {/* <!-- hero section start --> */}

<section id="hero">
    <h4>Trade-in-Offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
   <button>Shop Now</button>
</section>
<pre>{JSON.stringify(auth, null, 4)}</pre>





    </Layout>
  );
};

export default HomePage;
