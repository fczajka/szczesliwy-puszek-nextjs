"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contact } from "@/public/content";
import { headlineFont } from "@/public/fonts";
import Form from "./Form";

const Contact = () => {
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
                <Form formData={contact.mail.form} />
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
                closeButton={true}
                position="bottom-center"
                toastClassName="p-5 mb-4 rounded-primary text-babyBlue-1500 bg-babyBlue-200 cursor-pointer last:mb-60px last:sm:mb-80px lg:last:mb-4"
                bodyClassName={() => "flex"}
            />
        </div>
    );
};

export default Contact;
