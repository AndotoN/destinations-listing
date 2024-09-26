export default function Places({
  title,
  places,
  fallbackText,
  onSelectedPlace, // Optional prop
}) {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-4 text-sky-400">{title}</h2>

      {places.length === 0 && <p>{fallbackText}</p>}

      {places.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <button
              key={place.id}
              onClick={() => onSelectedPlace && onSelectedPlace(place.id)} // Check if onSelectedPlace exists
              className="relative group w-full max-h-36 max-w-80 bg-stone-800 rounded-lg overflow-hidden"
            >
              <img
                src={place.image.src}
                alt={place.image.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:rotate-6"
              />
              <p className="absolute bottom-0 right-0 bg-orange-500 text-white text-sm font-semibold px-3 py-1 m-2 rounded-md">
                {place.title}
              </p>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
