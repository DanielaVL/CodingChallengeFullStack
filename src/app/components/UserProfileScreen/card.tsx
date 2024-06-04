import React from "react";

const Card = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Galería privada
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Explora las joyas artísticas que has coleccionado. Desde pinturas clásicas hasta 
                esculturas contemporáneas, aquí encontrarás tu selección personal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1582561879360-b5f835317f05?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Título de la obra de arte
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p className="mt-3 text-sm text-blue-500">Artista</p>
              </div>
            </div>

            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1580136579295-b22833edc5e7?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0"
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Título de la obra de arte
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p className="mt-3 text-sm text-blue-500">Artista</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
