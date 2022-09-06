import React from "react";
import img1 from "./pics/Number.jfif"
import { GrLinkNext } from "react-icons/gr";

export default class Slider extends React.Component{
    render(){
        return(
            <>
            <section class="text-gray-600 body-font bg-red-600  ">
  <div class="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
    <div class=" md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded-lg" alt="hero" src={img1}/>
    </div>
    <div class=" pt-40  pb-36 rounded-xl lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg-red-400 text-white">
        <p className="font-medium">FEATURED PROJECT</p>
      <h1 class="title-font sm:text-5xl text-3xl mb-4 font-bold ">
      Coloca Branding
      </h1>
      <p class="mb-8 leading-relaxed font-medium">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />
      dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br />
      proident. Duis aute irure dolor in reprehenderit in voluptate velit <br />
      esse cillum dolore.
      </p>
      <div class="">
        <h1 className="flex justify-center items-center">LIVE SIDE <GrLinkNext className="ml-2"/></h1>
      </div>
    </div>
    
  </div>
</section>
            </>
        )
    }
}