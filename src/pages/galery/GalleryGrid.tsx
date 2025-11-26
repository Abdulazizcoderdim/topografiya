import { useState } from "react";

interface GalleryImage {
  _id: string;
  imageUrl: string;
}

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const images = [
    {
        _id: "1",
        imageUrl: "/gallery/1.jpg"
    },
    {
        _id: "2",
        imageUrl: "/gallery/2.jpg"
    },
    {
        _id: "3",
        imageUrl: "/gallery/3.jpg"
    },
    {
        _id: "4",
        imageUrl: "/gallery/4.jpg"
    },
    {
        _id: "5",
        imageUrl: "/gallery/5.jpg"
    },
    {
        _id: "6",
        imageUrl: "/gallery/6.jpg"
    },
    {
        _id: "7",
        imageUrl: "/gallery/7.jpg"
    },
    {
        _id: "8",
        imageUrl: "/gallery/8.jpg"
    },
    {
        _id: "9",
        imageUrl: "/gallery/9.jpg"
    },
    {
        _id: "10",
        imageUrl: "/gallery/10.jpg"
    },
    {
        _id: "11",
        imageUrl: "/gallery/11.jpg"
    },
    {
        _id: "12",
        imageUrl: "/gallery/12.jpg"
    },
    {
        _id: "13",
        imageUrl: "/gallery/13.jpg"
    },
    {
        _id: "14",
        imageUrl: "/gallery/14.jpg"
    },
    {
        _id: "15",
        imageUrl: "/gallery/15.jpg"
    },
  ];

  
  
  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Галерея пуста</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {images.map((image) => (
          <div
            key={image._id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full aspect-video bg-gray-200">
              <img
                loading="lazy"
                src={image.imageUrl || "/placeholder.svg"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              loading="lazy"
              src={selectedImage.imageUrl || "/placeholder.svg"}
              className="w-full h-96 object-contain rounded-lg"
            />

            <button
              onClick={() => {
                const currentIndex = images.findIndex(
                  (img) => img._id === selectedImage._id
                );
                const prevIndex =
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                setSelectedImage(images[prevIndex]);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                const currentIndex = images.findIndex(
                  (img) => img._id === selectedImage._id
                );
                const nextIndex =
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                setSelectedImage(images[nextIndex]);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;