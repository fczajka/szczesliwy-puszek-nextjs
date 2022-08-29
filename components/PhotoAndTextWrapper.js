import { css } from "@emotion/react";

const PhotoAndTextWrapper = ({ children, bgInfo }) => {
    return (
        <div
            css={css`
                background-image: url("${bgInfo.image}");
                background-position: ${bgInfo.positionMobile};
                @media (min-width: 1024px) {
                    background-position: ${bgInfo.positionDesktop};
                }
            `}
            className={`w-full flex flex-col items-center pb-10 bg-no-repeat px-2 sm:px-32 lg:px-0 xl:px-2 2xl:px-28`}
        >
            {children}
        </div>
    );
};

export default PhotoAndTextWrapper;
