import { IoMdArrowDropdown } from "react-icons/io";
import { FaDog, FaPaw } from "react-icons/fa";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { RiGalleryFill } from "react-icons/ri";
import { MdLocationPin, MdMail } from "react-icons/md";

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
import PolaPhoto from "./images/index/Pola.webp";
import BaluPhoto from "./images/index/Balu.webp";
import WilliamPhoto from "./images/index/William.webp";
import Betsy from "./images/litter-a/Betsy.webp";
import Boni from "./images/litter-a/Boni.webp";
import Baki from "./images/litter-a/Baki.webp";
import BascoBig from "./images/index/Basco-big.webp";
import { ButtonTypes, Colors } from "./enums";

export const metaData = {
    title: "Szczęśliwy Puszek",
};

export const navbar = {
    title: "Szczęśliwy Puszek",
    menu: [
        {
            text: "Strona główna",
            array: undefined,
            linkTo: "/",
            icon: undefined,
        },
        {
            text: "Psy",
            array: [
                { name: "Pola", color: Colors.pink, linkTo: "/Pola" },
                { name: "William", color: Colors.blue, linkTo: "/William" },
            ],
            icon: IoMdArrowDropdown,
        },
        {
            text: "Mioty",
            array: [{ name: "Miot a", color: Colors.blue, linkTo: "/miot-a" }],
            icon: IoMdArrowDropdown,
        },
        {
            text: "Galeria",
            array: undefined,
            linkTo: "/galeria",
            icon: undefined,
        },
        {
            text: "Kontakt",
            array: undefined,
            linkTo: "#contact",
            icon: undefined,
        },
    ],
};

export const contact = {
    mail: {
        header: "Napisz do nas!",
        form: [
            { label: "Imię:", name: "senderName", type: "text" },
            { label: "E-mail:", name: "email", type: "text" },
            { label: "Wiadomość:", name: "message", type: null },
        ],
        buttonInfo: {
            type: ButtonTypes.submit,
            text: "Wyślij wiadomość!",
            color: Colors.pink,
            link: null,
        },
    },
    staticInformation: {
        description: "W razie wszelkich wątpliwości zapraszamy do kontaktu.",
        contactInformation: [
            { icon: MdLocationPin, information: "Koninko, Wielkopolska" },
            { icon: AiFillPhone, information: "508 310 184" },
            {
                icon: MdMail,
                information: "szczesliwy.puszek@gmail.com",
            },
        ],
    },
};

export const slider = {
    slides: [
        {
            bgPhoto: BascoBig,
            headline: "Weź jednego ze sobą",
            subline: "I nie każ sobie dłużej czekać",
            anchorText: "Sprawdź",
            anchorColor: Colors.blue,
            linkTo: "#whyUs",
            alt: "Szczeniak Basko patrzy w lewą stronę",
        },
        {
            bgPhoto: WilliamPhoto,
            headline: "Mam na imię William",
            subline: "Jestem reproduktorem",
            anchorText: "Poczytaj o mnie!",
            anchorColor: Colors.blue,
            linkTo: "/William",
            alt: "Samiec William dumnie patrzy w lewą stronę",
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
            name: "Pola",
            image: PolaPhoto,
            alt: "Samoyed Pola uśmiecha się w stronę kamery",
            text: "Suczka o bardzo pogodniej naturze, niezwykle cierpliwa i spokojna w kontakcie z ludźmi. Wysoce opiekuńcza w stosunku do swoich dzieci, naturalna przewodniczka. Nigdy nie przejawiała tendencji niszczycielskich, świetnie znosi podróże krótkie i długie.",
            buttonInfo: {
                type: ButtonTypes.anchor,
                text: "Poczytaj o mnie!",
                color: Colors.pink,
                link: "/Pola",
            },
        },
        {
            name: "William",
            image: WilliamPhoto,
            alt: "Samoyed William dumnie stoi, patrzy w lewą stronę",
            text: "Dumny samiec, od urodzenie posiada bardzo dostojny chód. Bardzo aktywny i przyjacielski, jest gotów do ciągłego ruchu. Przepiękna głowa o idealnych proporcjach otoczona bujną grzywą. Zgrabnej atletycznej postury. Naturalny model.",
            buttonInfo: {
                type: ButtonTypes.anchor,
                text: "Poczytaj o mnie!",
                color: Colors.blue,
                link: "/William",
            },
        },
    ],
    backgroundInfo: {
        image: true,
    },
};

export const Pola = {
    photo: PolaPhoto,
    name: "Pola",
    alt: "Pies, samoyed o imieniu Pola",
    firstLine: "Suczka pochodząca z rodowitych terenów rasy.",
    text: "Suczka o bardzo pogodniej naturze, niezwykle cierpliwa i spokojna w kontakcie z ludźmi. Wysoce opiekuńcza w stosunku do swoich dzieci, naturalna przewodniczka. Nigdy nie przejawiała tendencji niszczycielskich, świetnie znosi podróże krótkie i długie. Pola jest naszą pierwszą suczką w hodowli i od początku była bardzo podatna na wszelkie nauki zachowania i czystości, oczywiście przy wykorzystaniu przekonywujących nagród 😊.",
    addText: null,
    params: [
        { key: "Płeć", value: "Suczka" },
        { key: "Data urodzenia", value: "04.05.2020" },
        {
            key: "Ojciec",
            value: "ALKHABOR ALMIRA TRIUMPHANT SHERLOCK (CH RUS, JCH RUS, CH RKF BST)",
        },
        { key: "Matka", value: "IZDOMASU ORMI LIGHT" },
        { key: "Badania", value: "Stawy HD/A, Eyes - Clear" },
        { key: "Właściciel", value: "Ewa Wawrzeńczyk" },
        { key: "Hodowca", value: "MAKAROVA A.A." },
        { key: "Wzrost", value: "53cm" },
        { key: "Waga", value: "20kg" },
    ],
    titles: [
        "Open Champion of Poland",
        "Jr. Champion of Macedonia",
        "Grand Champion of Romania",
        "Jr. Champion of Croatia",
    ],
    buttonInfo: {
        type: ButtonTypes.anchor,
        text: "Strona głowna!",
        color: Colors.pink,
        link: "/",
    },
    backgroundInfo: {
        image: false,
    },
};

export const William = {
    photo: WilliamPhoto,
    name: "William",
    alt: "Pies, samoyed o imieniu William",
    firstLine: "Samiec pochodzenia Ukraińskiego.",
    text: "William przejawia naturalne cechy rasy, jest bardzo energiczny i przyjazny. Każdego w domu traktuje jako swoje stado czy to człowiek czy to kot. Jest podatny na naukę, ale potrzebuje do tego smacznej nagrody 😊.",
    addText: "William posiada pełne legalne uprawnienie Reproduktora.",
    params: [
        { key: "Płeć", value: "Samiec" },
        { key: "Data urodzenia", value: "29.12.2019" },
        { key: "Ojciec", value: "CRYSTAL SNOWFLAKE ASKANIO" },
        { key: "Matka", value: "WHITE EVENK SAYURI HANAYORI" },
        { key: "Badania", value: "Stawy HD/A, Eyes - Clear" },
        { key: "Właściciel", value: "Ewa Wawrzeńczyk" },
        { key: "Hodowca", value: "NORTH DIAMOND" },
        { key: "Wzrost", value: "56cm" },
        { key: "Waga", value: "22kg" },
    ],
    buttonInfo: {
        type: ButtonTypes.anchor,
        text: "Strona głowna!",
        color: Colors.blue,
        link: "/",
    },
    backgroundInfo: {
        image: false,
    },
};

export const litterA = {
    dogs: [
        {
            name: "Betsy",
            image: Betsy,
            description:
                "Śliczna dobrze zbudowana dziewczynka o niezależnym spokojnym charakterze. Przyjaźnie nastawiona do innych ludzi jak i zwierząt. Jest suczką bardzo ciekawą świata, chętnie sprawdza nowe tereny. Posiada śnieżnobiałe gęste futerko.",
            alt: "Szczeniak Samoyed o imieniu Betsy",
        },
        {
            name: "Boni",
            image: Boni,
            description:
                "Urodziwa suczka o pięknych proporcjach. Posiada bardzo gęste puchate futerko. Spokojna i stonowana ale bardzo przyjacielska. Wykazuje niezwykłą chęć kontaktu z człowiekiem. Gotowa do ciągłej zabawy i eksploracji terenu.",
            alt: "Szczeniak Samoyed o imieniu Boni",
        },
        {
            name: "Baki",
            image: Baki,
            description:
                "Pięknie zbudowany samiec o bujnym białym futrze. Naturalny lider stada, wykazuje dużo samodzielności, bardzo chętny do bliskiego kontaktu z człowiekiem. Przyjacielski i pogodny. Urodzony Alfa.",
            alt: "Szczeniak Samoyed o imieniu Baki",
        },
        {
            name: "Basco",
            image: BascoBig,
            description:
                "Przystojny chłopiec, bardzo dobrze zbudowany o pięknym puchatym futerku. Wykazuje zdecydowane cechy samca, chętny do zabawy oraz kontaktu z ludźmi. Zawsze gotów na przechadzkę. Urodzony kompan do przygody.",
            alt: "Szczeniak Samoyed o imieniu Basco",
        },
    ],
    parents: {
        headline: "Rodzice",
        description:
            "Idealny dobór partnerów. Przepiękna suczka o idealnych proporcjach, śliczna głowa otoczona bujną grzywą oraz wspaniały puchaty ogon. Z natury bardzo spokojna i podatna na trening. Balu, mocno zbudowany samiec o perfekcyjnej głowie otoczonej lwią grzywą. Jego futro jest niezwykle gęste i długie. Syn wysoce utytuwanego Falcona. Oba pieski nigdy nie przejawiały tendencji niszczycielskich.",
        dogs: [
            { name: "Pola", photo: PolaPhoto, alt: "Samoyed o imieniu Pola" },
            { name: "Balu", photo: BaluPhoto, alt: "Samoyed o imieniu Balu" },
        ],
    },
    buttonInfo: {
        type: ButtonTypes.anchor,
        text: "Strona główna",
        color: Colors.pink,
        link: "/",
    },
    buttonText: "Strona główna",
    backgroundInfo: {
        image: true,
    },
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
                        alt: "Mały samoyed skrada się w stronę kamery",
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
            { name: "Pola", color: Colors.pink, linkTo: "/Pola" },
            { name: "William", color: Colors.blue, linkTo: "/William" },
        ],
        icon: FaDog,
    },
    {
        text: "Mioty",
        array: [{ name: "Miot a", color: Colors.blue, linkTo: "/miot-a" }],
        icon: FaPaw,
    },
    { text: "Główna", array: null, linkTo: "/", icon: AiFillHome },
    { text: "Galeria", array: null, linkTo: "/galeria", icon: RiGalleryFill },
    { text: "Kontakt", array: null, linkTo: "#contact", icon: AiFillPhone },
];

export const whyUsDetails = {
    sections: [
        {
            headline: "Dużo ruchu",
            image: running,
            alt: "Szczeniak Samoyed o imieniu Betsy",
            text: "Każdy nasz pies ma dostęp do dużego podwórka (4000m2) gdzie bawią się ze sobą lub innymi za znajomymi psami. Codziennie zapewniamy im długi spacer i odpowiednią dawkę zabaw i szkoleń.",
        },
        {
            headline: "Nauka",
            image: learing,
            alt: "Szczeniak Samoyed o imieniu Betsy",
            text: "Nasze samojedy są nauczone wszystkich zasad poprawnego zachowania w domu, szczególnie w kwestii niszczycielstwa oraz czystości. Dbamy o ich socjalizację i poprawne zachowanie względem innych zwierząt.",
        },
        {
            headline: "Dużo zabawy",
            image: fun,
            alt: "Szczeniak Samoyed o imieniu Betsy",
            text: "Organizujemy naszym pieskom wiele socjalizujących zabaw, jak i również samodzielnie je szkolimy i bawimy.",
        },
        {
            headline: "Dobre jedzenie",
            image: food,
            alt: "Szczeniak Samoyed o imieniu Betsy",
            text: "W naszej hodowli psy są karmione, karmą suchą marki Royal Canin oraz często dodatkowymi posiłkami typu BARF. Do przez cały okres dojrzewania otrzymywały odpowiednie witaminy i suplementy na zdrowe stawy. Nadal są suplementowane algami morskimi, które zapewniając niezbędne aminokwasy, kwasy tłuszczowe omega-3, witamin i jodu. Jak i również poprawiają wybarwienie sierści i zmniejszają tworzenie się kamienia nazębnego.",
        },
    ],
    backgroundInfo: {
        image: true,
    },
    buttonInfo: {
        type: ButtonTypes.anchor,
        text: "Strona główna",
        color: Colors.pink,
        link: "/",
    },
};
