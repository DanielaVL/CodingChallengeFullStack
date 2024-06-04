import React from "react";

const Card = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-4 py-4 justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Título obra
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Artista
            </span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <a
              href="https://www.rijksmuseum.nl/en"
              className="font-semibold text-gray-800 dark:text-gray-200"
            >
              Ver más
            </a>
            <button className="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Agregar a favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
