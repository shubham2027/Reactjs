import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate(); 

  const goToProduct = () => {
    navigate("/product", {
      state: {
        id: 5,
        name: "laptop"
      }
    });
  };
  
  return (
    <div>

        <h1>Home page</h1>
        <br />
        {/* <Link to="/about">Go to About Page</Link> */}
        {/* <button onClick={()=>{navigate("/product?id=5&name=laptop")}}>View product</button> */}
        <button onClick={goToProduct}>View Product</button>
        
        
    </div>
  )
}

export default Home
