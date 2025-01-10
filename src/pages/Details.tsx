import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = usePokemonDetails(id!);

  if (isLoading) return <p>Cargando detalles...</p>;
  if (isError) return <p>Error al cargar detalles.</p>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 underline mb-4 block">Volver</Link>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
        <img src={data.sprites.front_default} alt={data.name} className="w-40 h-40 mx-auto mb-4" />
        <div>
          <h2 className="text-lg font-semibold">Habilidades:</h2>
          <ul className="list-disc pl-6">
            {data.abilities.map((ability: any, index: number) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
