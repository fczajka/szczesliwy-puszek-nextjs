import Image from "next/image";
import { gallery } from "@/public/content";
import { ButtonTypes, Colors } from "@/public/enums";
import { homeLink, homeLinkText } from "@/public/constants";
import Button from "@/components/Ui/Button";

const Gallery = () => {
    return (
        <div className="w-full flex justify-center flex-col mt-4">
            <div className="flex flex-col lg:flex-row">
                {gallery.map((sides) => (
                    <div
                        key={sides.side}
                        className="w-full flex flex-col sm:flex-row lg:flex-row"
                    >
                        {sides.columns.map((column) => (
                            <div key={column.order} className="w-full px-2">
                                {column.photos.map((photo) => (
                                    <div
                                        key={photo.alt}
                                        className="relative h-96 lg:h-72 xl:h-96 my-4 first:my-2 last:my-2"
                                    >
                                        <Image
                                            className="object-cover w-full h-full rounded-secondary"
                                            src={photo.src}
                                            alt={photo.alt}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center pt-8 pb-10">
                <Button
                    type={ButtonTypes.anchor}
                    text={homeLinkText}
                    color={Colors.blue}
                    link={homeLink}
                />
            </div>
        </div>
    );
};

export default Gallery;
