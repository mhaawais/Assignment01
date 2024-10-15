import link from "next/link"
import React from "react";
import next from "next";

export default function Tome() {
  return (
      <div>
        MUHAMMAD AWAIS
      <ul>
        <nav>My Application
        <li>
        <a href="home/facilities-a" target="_blank">Home</a>  
        </li>
        <li>
        <a href="/about" target="_blank">About</a>  
        </li>
        <li>
        <a href="/contact" target="_blank">Contact</a>  
        </li>
        <li>
        <a href="/services" target="_blank">Services</a>  
        </li>
        </nav>
      </ul>
      <h1>
        Here are the four pages in unordered list
      </h1>
      </div>
  );
}