const PhotoAndTextWrapper = ({ children, bgInfo }) => {
    return (
        <div
            className={`w-full flex flex-col items-center pb-10 ${bgInfo.image} ${bgInfo.positionMobile} bg-no-repeat px-2 sm:px-32 lg:px-0 ${bgInfo.positionDesktop} xl:px-2 2xl:px-28`}
        >
            {children}
        </div>
    );
};

export default PhotoAndTextWrapper;
