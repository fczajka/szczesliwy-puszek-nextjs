import { PhotoAndTextWrapperProps } from "@/public/interfaces";

const PhotoAndTextWrapper = ({
    children,
    bgInfo,
}: PhotoAndTextWrapperProps) => {
    return (
        <div
            className={`w-full flex flex-col items-center pb-10 ${
                bgInfo.image === true &&
                `bg-[url("../public/images/index/background-blue.webp")]`
            } bg-no-repeat bg-top px-4 sm:px-32 lg:px-0 lg:bg-center xl:px-2 2xl:px-28`}
        >
            {children}
        </div>
    );
};

export default PhotoAndTextWrapper;
