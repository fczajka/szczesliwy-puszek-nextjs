import Button from "./Button";

const Contact = ({ content }) => {
    return (
        <div
            id="contact"
            className="max-w-1920 w-full flex flex-col lg:flex-row"
        >
            <div className="w-full flex relative flex-col pt-32 items-center lg:w-1/2 bg-babyBlue-100">
                <h2 className="text-3xl absolute top-8 sm:text-4xl font-titan-one">
                    Napisz do nas!
                </h2>
                <form className="flex flex-col w-10/12 sm:w-8/12 md:w-7/12 lg:w-3/4 xl:w-7/12">
                    <label htmlFor="name" className="mb-1 font-bold">
                        Imię:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-md border-0"
                    />
                    <label htmlFor="e-mail" className="mt-6 mb-1 font-bold">
                        E-mail:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="rounded-md border-0"
                    />
                    <label htmlFor="message" className="mt-6 mb-1 font-bold">
                        Wiadomość:
                    </label>
                    <textarea
                        className="resize-none rounded-md border-0"
                        id="message"
                        name="message"
                        rows="3"
                        cols="30"
                        wrap="soft"
                    ></textarea>
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
        </div>
    );
};

export default Contact;
