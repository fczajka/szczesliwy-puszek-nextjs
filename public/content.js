import { IoMdArrowDropdown } from "react-icons/io";
import { FaDog, FaPaw } from "react-icons/fa";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { RiGalleryFill } from "react-icons/ri";

import gallery1 from "./images/gallery/gallery1.webp";
import gallery2 from "./images/gallery/gallery2.webp";
import gallery3 from "./images/gallery/gallery3.webp";
import gallery4 from "./images/gallery/gallery4.webp";
import gallery5 from "./images/gallery/gallery5.webp";
import gallery6 from "./images/gallery/gallery6.webp";
import gallery7 from "./images/gallery/gallery7.webp";
import gallery8 from "./images/gallery/gallery8.webp";
import gallery9 from "./images/gallery/gallery9.webp";
import gallery10 from "./images/gallery/gallery10.webp";
import gallery11 from "./images/gallery/gallery11.webp";
import gallery12 from "./images/gallery/gallery12.webp";
import food from "./images/index/food.webp";
import fun from "./images/index/fun.webp";
import running from "./images/index/running.webp";
import learing from "./images/index/learning.webp";
import polaPhoto from "./images/index/Pola.webp";
import williamPhoto from "./images/index/William.webp";

export const metaData = {
    title: "Szczęśliwy Puszek",
};

export const layout = {
    header: {
        title: "Szczęśliwy Puszek",
        menu: [
            { text: "Strona główna", array: null, linkTo: "/", icon: null },
            {
                text: "Psy",
                array: [
                    { name: "Pola", color: "royalPink", linkTo: "/Pola" },
                    { name: "William", color: "babyBlue", linkTo: "/William" },
                ],
                icon: IoMdArrowDropdown,
            },
            {
                text: "Mioty",
                array: [
                    { name: "Miot a", color: "babyBlue", linkTo: "/Litter-a" },
                ],
                icon: IoMdArrowDropdown,
            },
            { text: "Galeria", array: null, linkTo: "/Gallery", icon: null },
            { text: "Kontakt", array: null, linkTo: "/", icon: null },
        ],
    },
};

export const contact = {
    mail: {
        header: "Napisz do nas!",
        form: [
            { label: "Imię:" },
            { label: "E-mail:" },
            { label: "Wiadomość:" },
        ],
    },
    staticInformation: {
        description: "W razie wszelkich wątpliwości zapraszamy do kontaktu.",
        contactInformation: [
            { icon: "...", information: "Koninko, Wielkopolska" },
            { icon: "...", information: "123 456 789" },
            { icon: "...", information: "example@mail.com" },
        ],
    },
};

export const slider = {
    slides: [
        {
            bgPhoto: "/images/index/Basco.webp",
            bgPosition: "center",
            headline: "Weź jednego ze sobą",
            subline: "I nie każ sobie dłużej czekać",
            anchorText: "Sprawdź",
            anchorColor: "babyBlue",
            linkTo: "#whyUs",
        },
        {
            bgPhoto: "/images/index/William.webp",
            bgPosition: "50% 30%",
            headline: "Mam na imię William",
            subline: "Jestem reproduktorem",
            anchorText: "Poczytaj o mnie!",
            anchorColor: "babyBlue",
            linkTo: "/William",
        },
    ],
};

export const whyUs = {
    title: "Dlaczego my:",
    cards: [
        {
            side: "left",
            columns: [
                {
                    photo: running,
                    headline: "Dużo ruchu",
                    text: "Nasze psy mają dostęp do dużego podwórka, na którym biegają oraz bawią się cały dzień. Zapewniamy im codzienne długie spacery.",
                    buttonText: "Dowiedz się więcej",
                },
                {
                    photo: fun,
                    headline: "Godziny zabawy",
                    text: "Organizujemy naszym pieskom wiele socjalizujących zabaw, jak i również samodzielnie je szkolimy i bawimy.",
                    buttonText: "Dowiedz się więcej",
                },
            ],
        },
        {
            side: "right",
            columns: [
                {
                    photo: learing,
                    headline: "Ważna nauka",
                    text: "Każdy nasz pies jest nauczony zachowania czystości w domu jak i zachowania na spacerach",
                    buttonText: "Dowiedz się więcej",
                },
                {
                    photo: food,
                    headline: "Zdrowe jedzenie",
                    text: "Psy spożywają karmę Royal Cayien oraz otrzymują posiłki typu BARF, a ich dieta wzbogacona jest odpowiednią suplementacją.",
                    buttonText: "Dowiedz się więcej",
                },
            ],
        },
    ],
};

export const ourDogs = {
    title: "Psy:",
    dogs: [
        {
            headline: "Pola",
            image: polaPhoto,
            text: "Suczka o bardzo pogodniej naturze, niezwykle cierpliwa i spokojna w kontakcie z ludźmi. Wysoce opiekuńcza w stosunku do swoich dzieci, naturalna przewodniczka. Nigdy nie przejawiała tendencji niszczycielskich, świetnie znosi podróże krótkie i długie.",
            buttonInfo: {
                type: "anchor",
                text: "Poczytaj o mnie!",
                color: "royalPink",
                link: "/Pola",
            },
        },
        {
            headline: "William",
            image: williamPhoto,
            text: "Dumny samiec, od urodzenie posiada bardzo dostojny chód. Bardzo aktywny i przyjacielski, jest gotów do ciągłego ruchu. Przepiękna głowa o idealnych proporcjach otoczona bujną grzywą. Zgrabnej atletycznej postury. Naturalny model.",
            buttonInfo: {
                type: "anchor",
                text: "Poczytaj o mnie!",
                color: "babyBlue",
                link: "/William",
            },
        },
    ],
};

export const Pola = {
    photo: "...",
    description: {
        name: "Pola",
        firstLine: "Suczka pochodząca z rodowitych terenów rasy.",
        text: "Suczka o bardzo pogodniej naturze, niezwykle cierpliwa i spokojna w kontakcie z ludźmi. Wysoce opiekuńcza w stosunku do swoich dzieci, naturalna przewodniczka. Nigdy nie przejawiała tendencji niszczycielskich, świetnie znosi podróże krótkie i długie. Pola jest naszą pierwszą suczką w hodowli i od początku była bardzo podatna na wszelkie nauki zachowania i czystości, oczywiście przy wykorzystaniu przekonywujących nagród 😊.",
        addText: "",
        params: {
            sex: "Suczka",
            dateOfBirth: "...",
            father: "...",
            mother: "...",
            tests: "...",
            owner: "...",
            breeder: "...",
            height: "53cm",
            weight: "20kg",
        },
        buttonText: "Strona głowna",
    },
};

export const William = {
    photo: "...",
    description: {
        name: "William",
        firstLine: "Samiec pochodzenia Ukraińskiego.",
        text: "William przejawia naturalne cechy rasy, jest bardzo energiczny i przyjazny. Każdego w domu traktuje jako swoje stado czy to człowiek czy to kot. Jest podatny na naukę, ale potrzebuje do tego smacznej nagrody 😊.",
        addText: "William posiada pełne legalne uprawnienie Reproduktora.",
        params: {
            sex: "Samiec",
            dateOfBirth: "...",
            father: "...",
            mother: "...",
            tests: "...",
            owner: "...",
            breeder: "...",
            height: "53cm",
            weight: "20kg",
        },
        buttonText: "Strona głowna",
    },
};

export const litterA = {
    dogs: [
        {
            name: "Bettsy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: "...",
        },
        {
            name: "Boni",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: "...",
        },
        {
            name: "Baki",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: "...",
        },
        {
            name: "Basco",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: "...",
        },
    ],
    parents: {
        headline: "Rodzice",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        dogs: [
            { name: "Pola", photo: "..." },
            { name: "Bourbon", photo: "..." },
        ],
    },
    buttonText: "Strona główna",
};

export const gallery = [
    {
        side: "left",
        columns: [
            {
                order: "first",
                photos: [
                    {
                        src: gallery1,
                        alt: "Mały samoyed biegnie w stronę kamery",
                    },
                    {
                        src: gallery2,
                        alt: "Mały samoyed idzie w stronę kamery",
                    },
                    {
                        src: gallery3,
                        alt: "Mały samoyed idzie w stronę kamery",
                    },
                ],
            },
            {
                order: "second",
                photos: [
                    { src: gallery4, alt: "Samoyed biegnie po podwórku" },
                    { src: gallery5, alt: "Piesek przechadza się po podwórku" },
                    {
                        src: gallery11,
                        alt: "Samoyed, szczeniak, który leży na poduszce",
                    },
                ],
            },
        ],
    },
    {
        side: "right",
        columns: [
            {
                order: "third",
                photos: [
                    { src: gallery7, alt: "Mały samoyed oblizuje usta" },
                    { src: gallery6, alt: "Samoyed biegnie po podwórku" },
                    {
                        src: gallery10,
                        alt: "Samoyed, szczeniak, który leży na poduszce",
                    },
                ],
            },
            {
                order: "fourth",
                photos: [
                    { src: gallery8, alt: "Mały samoyed rozgląda się" },
                    { src: gallery9, alt: "Skupiony samoyed patrzy w dal" },
                    {
                        src: gallery12,
                        alt: "Samoyed, szczeniak, który leży na poduszce",
                    },
                ],
            },
        ],
    },
];

export const mobileNavbar = [
    {
        text: "Psy",
        array: [
            { name: "Pola", color: "royalPink", linkTo: "/Pola" },
            { name: "William", color: "babyBlue", linkTo: "/William" },
        ],
        icon: FaDog,
    },
    {
        text: "Mioty",
        array: [{ name: "Miot a", color: "babyBlue", linkTo: "/Litter-a" }],
        icon: FaPaw,
    },
    { text: "Główna", array: null, linkTo: "/", icon: AiFillHome },
    { text: "Galeria", array: null, linkTo: "/Gallery", icon: RiGalleryFill },
    { text: "Kontakt", array: null, linkTo: "/", icon: AiFillPhone },
];
