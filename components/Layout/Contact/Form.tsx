"use client";

import React, { MutableRefObject, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { contact } from "@/public/content";
import { sendMail } from "@/public/helpers";
import { FormProps } from "@/public/interfaces";
import Button from "@/components/Ui/Button";

const Form = ({ formData }: FormProps) => {
    const form: MutableRefObject<HTMLFormElement | null> = useRef(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMail(e, form.current);
    };
    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            method="post"
            className="flex flex-col w-10/12 sm:w-8/12 md:w-7/12 lg:w-3/4 xl:w-7/12"
        >
            {formData.map((section) => (
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
                            className="rounded-primary border-0"
                        />
                    ) : (
                        <textarea
                            className="resize-none rounded-primary border-0"
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
    );
};

export default Form;
