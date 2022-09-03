import React, { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import Context from "./Context";

const Contact = ({ content }) => {
    const form = useRef();

    const [env] = useContext(Context);

    const contextClass = {
        success: "bg-green-200",
        error: "bg-royalPink-200",
        default: "bg-babyBlue-300",
    };

    const sendEmail = (e) => {
        e.preventDefault();

        form.current.name.value = form.current.name.value.trim();
        form.current.email.value = form.current.email.value.trim();
        form.current.message.value = form.current.message.value.trim();

        if (
            !form.current.name.value &&
            !form.current.email.value &&
            !form.current.message.value
        ) {
            toast.error("Brak danych w formularzu!");
        } else if (!form.current.name.value && !form.current.message.value) {
            toast.error("Brak imienia i wiadomości!");
        } else if (!form.current.name.value && !form.current.email.value) {
            toast.error("Brak imienia i adresu mailowego!");
        } else if (!form.current.email.value && !form.current.message.value) {
            toast.error("Brak adresu mailowego i wiadomości!");
        } else if (!form.current.name.value) {
            toast.error("Brak imienia!");
        } else if (!form.current.email.value) {
            toast.error("Brak adresu mailowego!");
        } else if (!form.current.message.value) {
            toast.error("Brak wiadomości!");
        } else if (EmailValidator.validate(form.current.email.value)) {
            const sendMail = emailjs
                .sendForm(
                    env.serviceId,
                    env.templateId,
                    form.current,
                    env.keyId
                )
                .then(
                    () => {
                        e.target.reset();
                    },
                    () => {}
                );

            toast.promise(sendMail, {
                pending: "Wysyłamy wiadomość!",
                success: "Wiadomość wysłana pomyślnie!",
                error: "Wiadomość nie zotała wysłana!",
            });
        } else {
            toast.error("Zły mail!");
        }
    };
    return (
        <div
            id="contact"
            className="max-w-1920 w-full flex flex-col lg:flex-row"
        >
            <div className="w-full flex relative flex-col pt-32 items-center lg:w-1/2 bg-babyBlue-100">
                <h2 className="text-3xl absolute top-8 sm:text-4xl font-titan-one">
                    {content.mail.header}
                </h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    method="post"
                    className="flex flex-col w-10/12 sm:w-8/12 md:w-7/12 lg:w-3/4 xl:w-7/12"
                >
                    {content.mail.form.map((section) => (
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
                                    rows="3"
                                    cols="30"
                                    wrap="soft"
                                ></textarea>
                            )}
                        </React.Fragment>
                    ))}
                    <div className="pt-6 pb-8 lg:pb-16">
                        <Button
                            type={content.mail.buttonInfo.type}
                            text={content.mail.buttonInfo.text}
                            color={content.mail.buttonInfo.color}
                        />
                    </div>
                </form>
            </div>
            <div className="w-full flex flex-col pt-8 pb-20 items-center bg-babyBlue-200 lg:w-1/2 lg:pt-32-24">
                <div className="w-3/4 sm:w-1/2 lg:w-1/2">
                    <p>{content.staticInformation.description}</p>
                    <ul className="pt-8">
                        {content.staticInformation.contactInformation.map(
                            (poi) => (
                                <li
                                    key={poi.information}
                                    className="flex my-6 items-center"
                                >
                                    {poi.icon ? <poi.icon /> : ""}
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
                toastClassName={({ type }) =>
                    contextClass[type || "default"] +
                    ` p-5 mb-4 rounded-md ${
                        type === "error"
                            ? "text-royalPink-1500"
                            : type === "success"
                            ? "text-green-900"
                            : "text-babyBlue-1500"
                    } cursor-pointer last:mb-60px last:sm:mb-80px lg:last:mb-4`
                }
                bodyClassName={() => "flex font-radio-canada"}
            />
        </div>
    );
};

export default Contact;
