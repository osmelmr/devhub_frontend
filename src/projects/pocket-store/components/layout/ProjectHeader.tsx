/* Header específico del proyecto "Store" (este header *se mantiene* dentro de la page del proyecto) */
export const ProjectHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p className="text-sm text-gray-500">
            Pequeña tienda demo dentro del portafolio — filtros, carrito y panel
            de administración.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Lugar para botones de filtro global del proyecto (ej. categorías, orden) */}
          <button className="px-3 py-2 border rounded-md">Filtrar</button>
          <button className="px-3 py-2 border rounded-md">Ordenar</button>
        </div>
      </div>
    </div>
  );
};
