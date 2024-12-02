import React, { useState } from "react";

function App() {
    const [asignaturas, setAsignaturas] = useState([]);
    const [selectedProfesor, setSelectedProfesor] = useState(null);

    const profesores = [
        { id: 1, nombre: "Némesis" },
        { id: 2, nombre: "Príapo" },
        { id: 3, nombre: "Iris" },
    ];

    const handleProfesorChange = (event) => {
        const profesorId = event.target.value;
        setSelectedProfesor(profesorId);

        fetch(`http://localhost:8080/api/profesores/${profesorId}/asignaturas`)
            .then((response) => response.json())
            .then((data) => {
                setAsignaturas(data.data || []);
            })
            .catch((error) =>
                console.error("Error al obtener las asignaturas:", error)
            );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Asignaturas del Profesor</h1>
            <select
                className="border border-gray-300 p-2 rounded mb-4 w-full"
                onChange={handleProfesorChange}
                defaultValue=""
            >
                <option value="" disabled>
                    Selecciona un profesor
                </option>
                {profesores.map((profesor) => (
                    <option key={profesor.id} value={profesor.id}>
                        {profesor.nombre}
                    </option>
                ))}
            </select>
            {asignaturas.length > 0 ? (
                <div>
                    {asignaturas.map((asignatura, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 rounded mb-4"
                        >
                            <h2 className="text-xl font-semibold">
                                {asignatura.nombre} - {asignatura.curso}
                            </h2>
                            <p className="text-gray-600">
                                Estudiantes:{" "}
                                {asignatura.estudiantes.length > 0
                                    ? asignatura.estudiantes.join(", ")
                                    : "No hay estudiantes"}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                selectedProfesor && (
                    <p className="text-gray-500">No hay asignaturas para mostrar.</p>
                )
            )}
        </div>
    );
}

export default App;
