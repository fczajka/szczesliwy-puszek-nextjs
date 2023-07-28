import { FormValidationProps, FormValidationReturn } from "public/interfaces";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
    MutableButtonRefNull,
    MutableUListRefNull,
    SetStateActionBoolean,
    SetStateActionNumber,
} from "./types";
import { useEffect } from "react";
import {
    outOfSlider,
    sliderEnd,
    sliderMiddle,
    sliderStart,
    timeToNextSlide,
} from "./constants";

const validateForm = (values: FormValidationProps): FormValidationReturn => {
    let { name, message, mail } = values;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    name = name.trim();
    message = message.trim();
    mail = mail.trim();

    if (!name) {
        return {
            status: "error",
            message: "Brak danych w formularzu!",
        };
    }
    if (!message) {
        return {
            status: "error",
            message: "Brak danych w formularzu!",
        };
    }
    if (!mail) {
        return {
            status: "error",
            message: "Brak danych w formularzu!",
        };
    }
    if (!emailPattern.test(mail)) {
        return {
            status: "error",
            message: "Błedny adres mailowy!",
        };
    }

    return {
        status: "success",
        message: "Wszystko poszło pomyślnie!",
    };
};

const sender = (
    e: React.FormEvent<HTMLFormElement>,
    form: HTMLFormElement | null
) => {
    if (form) {
        if (!process.env.SERVICE_ID) {
            toast.error("Coś poszło nie tak!");
            return;
        }
        if (!process.env.TEMPLATE_ID) {
            toast.error("Coś poszło nie tak!");
            return;
        }
        if (!process.env.PUBLIC_KEY) {
            toast.error("Coś poszło nie tak!");
            return;
        }
        const sendMail = emailjs
            .sendForm(
                process.env.SERVICE_ID,
                process.env.TEMPLATE_ID,
                form,
                process.env.PUBLIC_KEY
            )
            .then(() => {
                (e.target as HTMLFormElement).reset();
            });
        toast.promise(sendMail, {
            pending: "Wysyłamy wiadomość!",
            success: "Wiadomość wysłana pomyślnie!",
            error: "Wiadomość nie zotała wysłana!",
        });
    }
};

export const sendMail = (
    e: React.FormEvent<HTMLFormElement>,
    form: HTMLFormElement | null
) => {
    if (form) {
        const validatedForm = validateForm({
            name: form.senderName.value,
            mail: form.email.value,
            message: form.message.value,
        });
        if (validatedForm) {
            if (validatedForm.status === "success") {
                sender(e, form);
            } else if (validatedForm.status === "error") {
                toast.error(validatedForm.message);
            }
        }
    }
};

export function handleMouseEnter(setIsOpenSubmenu: SetStateActionBoolean) {
    return () => {
        if (window.innerWidth > 1024) {
            setIsOpenSubmenu(true);
        }
    };
}

export function handleMouseLeave(setIsOpenSubmenu: SetStateActionBoolean) {
    return () => {
        if (window.innerWidth > 1024) {
            setIsOpenSubmenu(false);
        }
    };
}

export const handleMouseMovement = (
    isOpenSubmenu: boolean,
    setIsOpenSubmenu: SetStateActionBoolean,
    refButton: MutableButtonRefNull,
    refSubmenu: MutableUListRefNull
): (() => void) => {
    const handler = (event: MouseEvent | TouchEvent) => {
        if (!isOpenSubmenu) return;
        if (!refButton.current || !refSubmenu.current) return;
        if (
            !refButton.current.contains(event.target as Node) &&
            !refSubmenu.current.contains(event.target as Node)
        ) {
            setIsOpenSubmenu(false);
        }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
    };
};
