import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
    return ( 
        <div className="lgpg1">
          <div className="loginpg">
            <Link to="/user"><button>User</button></Link>
            <Link to="admin"><button>Admin</button></Link>
        </div>
        </div>
     );
}
 
export default Login;