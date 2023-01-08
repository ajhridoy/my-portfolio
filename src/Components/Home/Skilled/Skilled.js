import React from "react";
import "./Skilled.css";

const Skilled = () => {
  return (
    <div className="my-10 mx-12">
      <h2 className='text-3xl font-bold text-center my-6'>Skills</h2>
      <div className="bg-gray-800 p-8 rounded-lg text-white">
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">HTML5:</h2>
          <div class="progress">
            <div class="progress-value" title="90%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">CSS3:</h2>
          <div class="progress">
            <div class="progress-css" title="85%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">JavaScript:</h2>
          <div class="progress">
            <div class="progress-java" title="80%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">React.Js:</h2>
          <div className="progress">
            <div className="progress-react" title="80%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">Node.Js:</h2>
          <div className="progress">
            <div className="progress-node" title="70%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">Express.Js:</h2>
          <div className="progress">
            <div className="progress-express" title="70%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">MongoDB:</h2>
          <div className="progress">
            <div className="progress-mongo" title="60%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">Tailwind:</h2>
          <div className="progress">
            <div className="progress-tail" title="90%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">Bootstrap:</h2>
          <div className="progress">
            <div className="progress-boots" title="85%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">Firebase:</h2>
          <div className="progress">
            <div className="progress-fire" title="60%"></div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-lg mr-3">Redux:</h2>
          <div className="progress">
            <div className="progress-redux" title="40%"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilled;
