import { Image } from "cloudinary-react";
function MainSection() {
  return (
    <div
      id="shop"
      className="container mx-auto flex flex-col md:flex-row justify-center items-start space-x-4"
    >
      {/* Adjusted Image Size */}
      <div className="w-full md:w-1/3 h-custom-height relative mb-4 md:mb-0">
        <Image
          alt="Full Width"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          cloudName="dfxlmzrj7"
          publicId={"v1724896335/drilldown_kplkyh"}
        />
      </div>

      {/* Image Column with Large and Small Images */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4 py-14">
        <div className="relative w-full h-80">
          <Image
            alt="Large"
            className="w-full h-full object-cover rounded-xl shadow-lg"
            cloudName="dfxlmzrj7"
            publicId={"v1724896335/cld-sample"}
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2 h-80 relative">
            <Image
              alt="Small 1"
              className="w-full h-full object-cover rounded-xl shadow-lg"
              cloudName="dfxlmzrj7"
              publicId={"v1724896335/girl_g4euzi"}
            />
          </div>
          <div className="w-1/2 h-80 relative">
            <Image
              alt="Small 2"
              className="w-full h-full object-cover rounded-xl shadow-lg"
              cloudName="dfxlmzrj7"
              publicId={"v1724896335/two-ladies_xtbzjl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
