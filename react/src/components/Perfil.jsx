import React from 'react';

export default function Perfil() {
    return (
        <div className="bg-col-zinc text-white">
            <div className="container mx-auto px-4 py-8 md:py-4">
                <div className="flex flex-col items-center text-center gap-6">
                    <img
                        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y"
                        alt="DEhibhis Banner"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
                    />
                    <h1 className="md:text-4xl font-[25px] mb-2 md:mb-4 hover:font-bold">Dehibhis Banner</h1>
                    <h2 className="text-xl md:text-2xl mb-4 md:mb-6">Software Developer</h2>
                    <p className="text-base md:text-lg mb-6 md:mb-8">
                        Full Stack Django & React
                    </p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="#"
                            className="bg-col-green-v hover:bg-white text-white hover:text-col-green-v font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Descargar CV
                        </a>
                        <a
                            href="#"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Github
                        </a>
                    </div>
                </div>
                <div className="mt-12 md:mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Proyectos</h2>
                    <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
                        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                            Todos
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                            Full Stack
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                            Frontend
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                            Backend
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Organizer</h3>
                            <p className="text-base md:text-lg mb-2 md:mb-4">
                                Organizer es una aplicación de gestión y organización de tareas y notas.
                            </p>
                            <p className="text-base md:text-lg mb-2 md:mb-4">
                                Te permite crear carpetas y notas personalizadas para organizarte de manera eficiente.
                            </p>
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                                <button className="bg-col-green-v hover:bg-blue-700 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                                    Visitar
                                </button>
                                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                                    Frontend
                                </button>
                                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                                    Backend
                                </button>
                                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline">
                                    Video
                                </button>
                            </div>
                            <div className="text-sm text-gray-400">
                                Angular Java Spring Boot Spring Security MySQL
                            </div>
                        </div>
                        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                                Crea tus notas y tareas, organizalas de la mejor forma
                            </h3>
                            <img
                                src="https://www.example.com/your-image-url.jpg"
                                alt="Organizer App Screenshot"
                                className="w-full h-48 md:h-64 object-cover rounded-lg"
                            />
                            <p className="text-base md:text-lg mt-4">Optimiza tu productividad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
