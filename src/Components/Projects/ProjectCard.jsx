import React from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
    
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

    </div>
  );
};

export default ProjectCard;
