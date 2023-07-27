"use client";

import React, { MutableRefObject, useRef } from "react";
import { ToastContainer, TypeOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Button from "../Ui/Button";
import { contact } from "public/content";
import { headlineFont } from "public/fonts";
import { FormValidationProps, FormValidationReturn } from "public/interfaces";

const Contact = () => {
    const form: MutableRefObject<HTMLFormElement | null> = useRef(null);

    const validateForm = (
        values: FormValidationProps
    ): FormValidationReturn => {
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

    const sendMail = (
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

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        sendMail(e, form.current);
    };
    return (
        <div
            id="contact"
            className="max-w-1920 w-full flex flex-col lg:flex-row"
        >
            <div className="w-full flex relative flex-col pt-32 items-center lg:w-1/2 bg-babyBlue-100">
                <h2
                    className={`text-3xl absolute top-8 sm:text-4xl font-headline ${headlineFont.variable}`}
                >
                    {contact.mail.header}
                </h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    method="post"
                    className="flex flex-col w-10/12 sm:w-8/12 md:w-7/12 lg:w-3/4 xl:w-7/12"
                >
                    {contact.mail.form.map((section) => (
                        <React.Fragment key={section.label}>
                            <label
                                htmlFor={section.name}
                                className="mb-1 mt-6 font-bold first:mt-0"
                            >
                                {section.label}
                            </label>
                            {section.type ? (
                                <input
                                    type={section.type}
                                    id={section.name}
                                    name={section.name}
                                    className="rounded-md border-0"
                                />
                            ) : (
                                <textarea
                                    className="resize-none rounded-md border-0"
                                    id={section.name}
                                    name={section.name}
                                    rows={3}
                                    cols={30}
                                    wrap="soft"
                                ></textarea>
                            )}
                        </React.Fragment>
                    ))}
                    <div className="pt-6 pb-8 lg:pb-16">
                        <Button
                            type={contact.mail.buttonInfo.type}
                            text={contact.mail.buttonInfo.text}
                            color={contact.mail.buttonInfo.color}
                        />
                    </div>
                </form>
            </div>
            <div className="w-full flex flex-col pt-8 pb-20 items-center bg-babyBlue-200 lg:w-1/2 lg:pt-32-24">
                <div className="w-3/4 sm:w-1/2 lg:w-1/2">
                    <p>{contact.staticInformation.description}</p>
                    <ul className="pt-8">
                        {contact.staticInformation.contactInformation.map(
                            (poi) => (
                                <li
                                    key={poi.information}
                                    className="flex my-6 items-center"
                                >
                                    {poi.icon && <poi.icon />}
                                    {poi.information}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            <ToastContainer
                autoClose={1800}
                hideProgressBar={true}
                newestOnTop={true}
                closeButton={false}
                position="bottom-center"
                toastClassName="p-5 mb-4 rounded-md text-babyBlue-1500 bg-babyBlue-200 cursor-pointer last:mb-60px last:sm:mb-80px lg:last:mb-4"
                bodyClassName={() => "flex"}
            />
        </div>
    );
};

export default Contact;
