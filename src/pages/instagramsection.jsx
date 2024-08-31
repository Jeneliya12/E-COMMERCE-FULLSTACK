import { Image } from "cloudinary-react";
import { instgramimages } from "../data/instagramdata";
function InstagramSection() {
  return (
    <div id="instagram" className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center py-6">
        Follow Us on Instagram
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-6 pb-6">
        {instgramimages.map((imageName, index) => (
          <div key={index} className="w-full h-48 bg-white overflow-hidden">
            <Image
              cloudName="dfxlmzrj7"
              publicId={`v1724896335/${imageName}`}
              alt={`Instagram ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramSection;
