import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
 
  return (
    <div className="md:px-20 p-4 min-h-screen">
      <div className="mt-8 mb-12">
        <h1 className="md:text-5xl text-3xl font-bold ">
          Galereya
        </h1>
      </div>

      <GalleryGrid />
    </div>
  );
};

export default Gallery;