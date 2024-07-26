import React from "react"; // Importing React
import useEmblaCarousel from "embla-carousel-react"; // Importing embla carousel hook
import Autoplay from "embla-carousel-autoplay"; // Importing autoplay plugin for embla carousel

// Example gallery images (replace with actual image imports)
import festival1 from "../../assets/images/festival1.jpg";
import festival2 from "../../assets/images/festival2.jpg";
import festival3 from "../../assets/images/festival3.jpg";

// Array of gallery data
const galleryData = [
  {
    title: "Gallery Image 1",
    description: "Description for gallery image 1",
    image: festival1,
  },
  {
    title: "Gallery Image 2",
    description: "Description for gallery image 2",
    image: festival2,
  },
  {
    title: "Gallery Image 3",
    description: "Description for gallery image 3",
    image: festival3,
  },
];

// GallerySlideshow component definition
const GallerySlideshow = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", draggable: true }, // Embla carousel settings
    [Autoplay({ delay: 3000 })] // Adding autoplay plugin with 3-second delay
  );

  return (
    <section className="gradient-bg text-[#202229] md:min-h-screen slanted-border lg:flex py-20">
      {/* Main section container with gradient background, text color, minimum height, slanted border, flex layout, and padding */}
      <div className="section px-8 flex flex-col lg:flex-row lg:mt-0 w-full overflow-hidden">
        {/* Inner container with padding, flex layout, full width, and overflow hidden */}
        <div className="flex-1 lg:w-1/2 flex flex-col justify-center lg:pr-8">
          {/* Left side container with flex layout, responsive width, and padding right on large screens */}
          <div className="max-w-[380px] mb-8 lg:mb-0">
            {/* Content wrapper with max width and margin */}
            <h1 className="md:text-5xl text-3xl font-bold mb-8">
              {/* Main heading with responsive text size, bold font, and margin */}
              Gallery Slideshow
            </h1>
            <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
              {/* Subheading with responsive text size, line height, color, and margin */}
              Explore our gallery of amazing images.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 lg:flex lg:items-center lg:justify-center scrollbar-hide">
          {/* Right side container with flex layout, responsive width, and custom scrollbar hiding */}
          <div className="embla" ref={emblaRef}>
            {/* Embla carousel container */}
            <div className="embla__container flex">
              {/* Embla carousel inner container with flex layout */}
              {galleryData.map((item, index) => (
                <div
                  key={index} // Unique key for each gallery item
                  className="embla__slide flex-none p-4 lg:p-10 rounded-[20px] bg-white flex flex-col lg:flex-row items-center justify-between shadow-lg"
                  style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Slide container with padding, rounded corners, background color, flex layout, and shadow */}
                  <div className="lg:max-w-[750px] w-full mb-4 lg:mb-0 bg-opacity-50 bg-white p-4 rounded-lg">
                    {/* Content wrapper with responsive max width, full width, margin, background color, and padding */}
                    <p className="md:text-4xl text-xl font-bold mb-8">
                      {/* Gallery item title with responsive text size, bold font, and margin */}
                      {item.title}
                    </p>
                    <p className="md:text-2xl text-base mb-8">
                      {/* Gallery item description with responsive text size and margin */}
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlideshow;
