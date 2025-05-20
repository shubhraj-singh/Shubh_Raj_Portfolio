import React from "react";
import { InfiniteMovingCards } from "./ui/InfinitecardImage";

const images = [
    { src: "vision.jpg", text: "Vision" },
    { src: "goals.jpg", text: "Goals" },
    { src: "build.jpg", text: "Build" },
    { src: "fail.jpg", text: "Fail" },
    { src: "reflect.jpg", text: "Reflect" },
    { src: "rebuild.jpg", text: "Rebuild" },
    { src: "keepgoing.jpg", text: "Keep-Going" },
    { src: "Achieve.jpg", text: "Achieve" },
];

const ImageGallery: React.FC = () => {
    return (
        <div className="h-[50vh] md:h-[30rem] flex flex-col items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                cards={images}
                direction="right"
                speed="normal"
                pauseOnHover={true}
            />

        </div>
    );
};

export default ImageGallery;
