import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { ButtonTypes, Colors } from "./enums";

export interface FormValidationProps {
    name: string;
    message: string;
    mail: string;
}

export interface FormValidationReturn {
    status: string;
    message: string;
}

export interface WhyUsCardsProps {
    photo: StaticImageData;
    headline: string;
    text: string;
    buttonText: string;
}

export interface TransitionProps {
    children: ReactNode;
}

export interface SubmenuProps {
    submenu: {
        text: string;
        icon?: IconType;
        linkTo?: string;
        array?: {
            name: string;
            linkTo: string;
            color?: Colors;
        }[];
    };
    mobile?: boolean;
}

export interface PhotoAndTextWrapperProps {
    children: ReactNode;
    bgInfo: {
        image: boolean;
    };
}

export interface ButtonProps {
    type: ButtonTypes;
    text: string;
    color: Colors;
    link?: string;
}

export interface PhotoAndTextProps {
    headline: string;
    image: StaticImageData;
    alt: string;
    text: string;
    buttonInfo?: {
        type: ButtonTypes;
        text: string;
        color: Colors;
        link: string;
    };
}

export interface SlideProps {
    slider: {
        bgPhoto: StaticImageData;
        headline: string;
        subline: string;
        anchorText: string;
        anchorColor: Colors;
        linkTo: string;
        alt: string;
    };
}

export interface OurDogsDetailsProps {
    content: {
        name: string;
        firstLine: string;
        text: string;
        addText?: string | null;
        params: {
            key: string;
            value: string;
        }[];
        photo: StaticImageData;
        alt: string;
        buttonInfo?: {
            type: ButtonTypes;
            text: string;
            color: Colors;
            link: string;
        };
        backgroundInfo: {
            image: boolean;
        };
    };
}

export interface FormProps {
    formData: {
        label: string;
        name: string;
        type?: string;
    }[];
}

export interface MenuProps {
    menu: {
        text: string;
        array?: { name: string; color: Colors; linkTo: string }[];
        linkTo?: string;
        icon?: IconType;
    }[];
}

export interface NavbarContent extends MenuProps {
    title: string;
}
