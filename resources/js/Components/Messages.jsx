import { motion } from "framer-motion";
const Message = ({ s, message }) => {
    console.log(messages)
    const sendr = s;
    const variants = {
        visible: { x: 0 },
        hidden: { x: s ? 100 : -100 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={` m-2 p-4 w-full max-w-[400px] rounded-t-3xl break-words  ${
                sendr
                    ? "rounded-br-3xl bg-darki-500 text-darki-200 self-start"
                    : "rounded-bl-3xl bg-greeny text-darki-100 self-end"
            }`}
        >
            {message}
        </motion.div>
    );
};

const Messages = ({ sender, messages }) => {
    return (
        <dir className="w-full overflow-y-auto overflow-x-hidden h-full p-0">
            <div className="w-full flex flex-col justify-end min-h-full">
                {messages.map((message) => (
                    <Message message={message} s={false} />
                ))}
            </div>
        </dir>
    );
};

export default Messages;
