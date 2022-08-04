import { IoMdArrowDropdown } from "react-icons/io";

export const layout = {
    header: {
        title: "Szczęśliwy Puszek",
        menu: [
            { text: "Strona główna", array: null, linkTo: "/", icon: null },
            {
                text: "Psy",
                array: [
                    { name: "Pola", color: "royalPink" },
                    { name: "William", color: "babyBlue" },
                ],
                linkTo: null,
                icon: IoMdArrowDropdown,
            },
            {
                text: "Mioty",
                array: [{ name: "Miot a", color: "babyBlue" }],
                linkTo: null,
                icon: IoMdArrowDropdown,
            },
            { text: "Galeria", array: null, linkTo: "/gallery", icon: null },
            { text: "Kontakt", array: null, linkTo: "/", icon: null },
        ],
    },
    contact: {
        mail: {
            header: "Napisz do nas!",
            form: [
                { label: "Imię:" },
                { label: "E-mail:" },
                { label: "Wiadomość:" },
            ],
        },
        staticInformation: {
            description:
                "W razie wszelkich wątpliwości zapraszamy do kontaktu.",
            contactInformation: [
                { icon: "...", information: "Koninko, Wielkopolska" },
                { icon: "...", information: "123 456 789" },
                { icon: "...", information: "example@mail.com" },
            ],
        },
    },
};

export const index = {
    slides: [
        {
            photo: "...",
            headline: "Weź jednego ze sobą",
            subline: "I nie każ sobie dłużej czekać",
            buttonText: "Sprawdź",
        },
        {
            photo: "...",
            headline: "Mam na imię William",
            subline: "Jestem reproduktorem",
            buttonText: "Poczytaj o mnie!",
        },
    ],
    whyUs: {
        title: "Dlaczego my:",
        cards: [
            {
                photo: "...",
                headline: "Dużo ruchu",
                text: "Nasze psy mają dostęp do dużego podwórka do zabaw oraz zapewniamy im codzienne długie spacery.",
                buttonText: "Dowiedz się więcej",
            },
            {
                photo: "...",
                headline: "Godziny zabawy",
                text: "Organizujemy naszym pieskom wiele socjalizujących zabaw, jak i również samodzielnie je szkolimy i bawimy.",
                buttonText: "Dowiedz się więcej",
            },
            {
                photo: "...",
                headline: "Ważna nauka",
                text: "Każdy nasz pies jest nauczony zachowania czystości w domu jak i zachowania na spacerach",
                buttonText: "Dowiedz się więcej",
            },
            {
                photo: "...",
                headline: "Zdrowe jedzenie",
                text: "Nasze psy są karmione karmą Royal Cayien oraz często otrzymują posiłki typu BARF. Do tego oczywiście wszelką potrzebną suplementację.",
                buttonText: "Dowiedz się więcej",
            },
        ],
    },
    ourDogs: {
        title: "Nasze psy:",
        dogs: [
            {
                name: "Pola",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                buttonText: "Poczytaj o mnie!",
            },
            {
                name: "William",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                buttonText: "Poczytaj o mnie!",
            },
        ],
    },
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
    { name: "Pola", photos: ["...", "...", "..."] },
    { name: "William", photos: ["...", "...", "..."] },
];

export const mobileNavbar = [
    { text: "Psy", icon: "...", subMenu: ["Pola", "William"] },
    { text: "Mioty", icon: "...", subMenu: ["Pola", "William"] },
    { text: "Główna", icon: "..." },
    { text: "Galeria", icon: "..." },
    { text: "Kontakt", icon: "..." },
];
