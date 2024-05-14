

import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PROJECTS, SITE_NAME } from "../constants";

import { Cta, Returnh, ScrollButton } from "../components";

import { arrow } from "../assets/icons";

import { Element } from 'react-scroll';


const Projects = () => {
  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Projects</title>
      </Helmet>

      {/* projects section */}
      <section className="max-container">
      
      <div className="flex justify-between">

        {/* projects head */}
        <h1 className="head-text"> My Project's Porfolio 
        </h1>

        <div className="flex justify-end items-center">
            <Returnh />
          </div>
      </div>

        {/* projects text */}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Each project in this list is a chapter in my story of skill development, where challenges are viewed as unique opportunities to learn and innovate. Discover what I've done so far:
          </p>
        </div>

        {/*
        <ScrollButton />
        */}
        {/* projects list */}
        <div className="flex flex-wrap my-20 gap-16">
          {/* map over projects */}
          {PROJECTS.map((project) => (
            
            <div
              key={`Project_${project.name}`}
              className="lg:w-400 w-full"
            >                
                <Element name={project.type}>
                  {/* add a line of colour across */}
            
                </Element>

              {/* project */}
              <div className="block-container w-12 h-12">
                {/* project icon bg */}
                <div className={`btn-back rounded-xl ${project.theme}`} />
    
                {/* project icon */}
                <div
                  className="btn-front rounded-xl flex justify-center items-center"
                  title={project.name}
                >
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>


              {/* project info */}
              <div className="mt-5 flex flex-col">
                {/* project name */}
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                {project.date}
                {/* project description */}
                <p className="mt-2 text-slate-500">{project.description}</p>

                {/* project link */}
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  {/* live link */}
                  <NavLink 
                    to={project.link}
                    target= {project.target}
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                    title="Live Site Link"
                  >
                    Check this one out!
                  </NavLink>


                  {/* right arrow */}
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* horizontal separator */}
        <hr className="border-slate-200" />

        {/* call-to-action */}
        <Cta />
      </section>
    </>
  );
};

export default Projects;
