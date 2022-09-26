import Image from "next/image";
import { gallery } from "../public/content";

const Gallery = () => {
    return (
        <div className="w-full flex justify-center flex-col mt-4">
            <div className="flex flex-col lg:flex-row">
                {gallery.map((sides) => (
                    <div
                        key={sides.side}
                        className="w-full flex flex-col sm:flex-row"
                    >
                        {sides.columns.map((column) => (
                            <div key={column.order} className="w-full px-2">
                                {column.photos.map((photo) => (
                                    <div
                                        key={photo.alt}
                                        className="relative h-96 lg:h-72 xl:h-96 my-4 first:my-2 last:my-2"
                                    >
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export function getStaticProps() {
    return {
        props: {
            content: gallery,
        },
    };
}

export default Gallery;
