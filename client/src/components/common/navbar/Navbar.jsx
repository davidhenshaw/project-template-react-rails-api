import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/me" className="navbar-item">Profile</a>
      <a href="/signup" className="navbar-item">Sign Up!</a>
      <a href="/login" className="navbar-item">Login</a>
  </section>
  )

}

export default Navbar;



// import React from 'react';
// import './Navbar.css'

// function Navbar () {

//     return(
//         <section>
//             Navbar    
//           </section>
//     )
// }

// export default Navbar;