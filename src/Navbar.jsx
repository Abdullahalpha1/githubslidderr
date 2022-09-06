import React, { Component } from "react";
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
    <div>


<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span class="ml-3 text-3xl text-gray-700 font-semibold">Uniel</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-10">
      
     
      <li class="mr-5  font-semibold text-red-500">HOME</li> 
      <li class="mr-5  font-semibold hover:text-red-500">PROJECT</li>
      <li class="mr-5 hover:text-red-500 font-semibold">SERVICE</li>
      <li class="mr-5 hover:text-red-500 font-semibold">ABOUT</li>
      <li class="mr-5 hover:text-red-500 font-semibold">TEAM</li>
      <li class="mr-5 hover:text-red-500 font-semibold">
      <Link to="/">
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
  </Link>



      </li>
    </nav>
    
  </div>
</header>

    </div>
        
             
    );
  }
}
