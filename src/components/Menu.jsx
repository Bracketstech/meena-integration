'use client'
import React, { useEffect } from 'react'

const Menu = () => {
    useEffect(()=>{
        var menu = document.querySelector(".menu");
        var spantwo = document.querySelector(".line-2");
        var spanone = document.querySelector(".line-1");
        var spanthree = document.querySelector(".line-3");
        const allSpansEl = document.querySelectorAll([".line-2",".line-1",".line-3"])

        var sidebar = document.querySelector(".sidebar");
        const body = document.querySelector("body");

        menu.onclick = () => {
        spantwo.classList.toggle("li2ne");
        spanone.classList.toggle("l1ine");
        spanthree.classList.toggle("lin3e");
        sidebar.classList.toggle("active");
        body.classList.toggle("active");
        };
    },[])

  return (
    <div className="menu lg:hidden block w-[6.15384615385vw] sm:w-[4.26829268293vw]">
    <span className="line-1 h-[0.51282051282vw]" />
    <span className="line-2 h-[0.51282051282vw]" />
    <span className="line-3 h-[0.51282051282vw]" />
  </div>
  )
}

export default Menu
