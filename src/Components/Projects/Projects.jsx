import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Voice-Activated Email Assistant"
          main="Developed a Python-based voice-activated assistant to send, receive, and manage emails.
Integrated Google Speech Recognition and SMTP libraries for voice input and email automation.
Utilized Natural Language Processing (NLP) to interpret commands and perform tasks efficiently.
Tools: Python, Google Speech Recognition, SMTP/IMAP, Natural Language Toolkit (NLTK)."
        />
        <ProjectCard
          title="Plant Disease Detector using Machine Learning"
          main="Designed a machine learning model to detect and classify plant diseases from leaf images.
Utilized image processing techniques and convolutional neural networks (CNNs) for accurate detection.
Implemented the solution in Python, enabling real-time disease diagnosis to aid farmers in crop management.
Tools: Python, TensorFlow/Keras, OpenCV, Scikit-learn, CNN, Image Processing."
        />
        
      </div>
    </div>
  );
};

export default Projects;
