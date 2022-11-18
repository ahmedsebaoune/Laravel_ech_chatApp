import AppLayout from "@/Layouts/AppLayout";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import {
    RiHome6Line,
    RiMic2Line,
    RiSendPlane2Fill,
    RiSettingsLine,
} from "react-icons/ri";
import { SiLivechat } from "react-icons/si";
import { BsFilePlus } from "react-icons/bs";
import Messages from "../Components/Messages";

const Messanger = () => {
    let { user: authUser, connections } = usePage().props;
    const { data, transform, post, setData, processing } = useForm({
        message: "",
        reciever: null,
    });

    console.log(connections);

    const [freinds, setFreinds] = useState(
        new Map(
            connections.map((connection) => {
                const ch = `conversation:${
                    connection.user1_id + "." + connection.user2_id
                }`;
                const user =
                    connection.user1_id != authUser.id
                        ? connection.user1
                        : connection.user2;

                return [
                    user.id,
                    {
                        channel: window.Echo.join(ch)
                            .listen("PrivateEvent", (event) => {
                                console.log(event);
                            })
                            .joining((user) => {
                                console.log(user.name + " IS JOINING");
                            })
                            .listenForWhisper("typing", (e) => {
                                e.typing
                                    ? console.log("typing")
                                    : console.log("no typing");
                            }),
                        user: user,
                        messages: connection.messages,
                    },
                ];
            })
        )
    );

    const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     alert("conenction is updated")
    //
    //     freinds.forEach((connection) => {
    //         const channel = window.Echo.join(ch)
    //             .listen("PrivateEvent", (event) => {
    //                 console.log(event);
    //             })
    //             .joining((user) => {
    //                 console.log(user.name + " IS JOINING");
    //             })
    //             .listenForWhisper("typing", (e) => {
    //                 e.typing ? console.log("typing") : console.log("no typing");
    //             });
    //         connection.friend =
    //             connection.user1_id != authUser.id
    //                 ? connection.user1
    //                 : connection.user2;
    //         setChannels(new Map(channels.set(connection.friend, channel)));
    //         return channel;
    //     });
    // }, [connections]);
    const submit = (e) => {
        e.preventDefault();
        // post(route("sendMessage"));
        setMessages([...messages, data.message]);
    };

    const handleWhispring = (e) => {
        const channel = channels.get(data.reciever);
        setTimeout(() => {
            console.log("we are whispring");
            channel.whisper("typing", {
                user: authUser.id,
                typing: true,
            });
        }, 300);
    };
    return (
        <AppLayout>
            <form onSubmit={submit} style={{ height: "90vh" }}>
                <div className="dark h-full py-12  max-w-7xl sm:px-6 mx-auto lg:px-8 w-100">
                    <div className="bg-white h-full dark:bg-darki-800 overflow-hidden shadow-xl rounded-4xl">
                        <div className="bg-white  dark:bg-darki-800 grid grid-cols-7 h-full">
                            <div className="p-8 col-span-3 flex flex-col overflow-y-hidden">
                                <div className="flex flex-col place-content-start grow overflow-y-hidden">
                                    <h1 className="my-6 text-white">
                                        Mais c trop
                                    </h1>
                                    <div className="max-w-lg w-full lg:max-w-xs">
                                        <label
                                            htmlFor="search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                {/* Heroicon name: solid/search */}
                                                <svg
                                                    className="h-5 w-5 text-gray-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                id="search"
                                                name="search"
                                                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-4xl leading-5 bg-darki-400 hover:bg-darki-300 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-white sm:text-sm"
                                                placeholder="Search"
                                                type="search"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        role="list"
                                        className="my-4 divide-y divide-darki-500 overflow-y-auto"
                                    >
                                        {Array.from(freinds.entries()).map(
                                            (freind, index) => {
                                                return (
                                                    <li
                                                        key={freind[0]}
                                                        className="hover:bg-gradient-to-r hover:from-darki-800 hover:via-darki-600 hover-to-darki-800"
                                                    >
                                                        <a
                                                            key={freind[0]}
                                                            className="py-4 flex cursor-pointer h-full"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setData(
                                                                    "reciever",
                                                                    freind[0]
                                                                );
                                                            }}
                                                        >
                                                            <img
                                                                className="h-10 w-10 rounded-full"
                                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                            <div className="ml-3">
                                                                <p
                                                                    className={`text-sm ${
                                                                        data.reciever ==
                                                                        freind[0]
                                                                            ? "text-gray-200"
                                                                            : "dark:text-zinc-500"
                                                                    } font-bold`}
                                                                >
                                                                    {
                                                                        freind[1]
                                                                            .user
                                                                            ?.name
                                                                    }
                                                                </p>
                                                                <p
                                                                    className={`text-sm  ${
                                                                        data.reciever ==
                                                                        freind[0]
                                                                            ? "text-gray-200"
                                                                            : "dark:text-zinc-500"
                                                                    } `}
                                                                >
                                                                    {
                                                                        freind[1]
                                                                            .user
                                                                            ?.email
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                                <div className="block bg-darki-600 rounded-lg">
                                    <nav
                                        className="flex p-2 items-center justify-evenly"
                                        aria-label="Tabs"
                                    >
                                        {/* Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" */}
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:bg-darki-800 px-3 py-2 font-medium text-sm rounded-lg"
                                        >
                                            <RiHome6Line size={"26px"} />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:bg-darki-800 px-3 py-2 font-medium text-sm rounded-lg"
                                        >
                                            <SiLivechat size={"24px"} />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-darki-900 hover:bg-darki-800 text-gray-100 px-3 py-2 font-medium text-sm rounded-lg"
                                            aria-current="page"
                                        >
                                            <RiSettingsLine size={"24px"} />
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div className="m-6 px-10 py-4 dark:bg-darki-600 col-span-4 flex flex-col rounded-4xl overflow-hidden">
                                <div className="grow flex items-end h-full overflow-hidden">
                                    <Messages
                                        messages={Array.from(
                                            freinds.entries()
                                        ).map(
                                            (freind, index) =>
                                                freind[1].messages
                                        )}
                                    />
                                </div>
                                <div className="flex h-20 place-content-center py-4">
                                    <input
                                        onKeyDown={handleWhispring}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        required
                                        type="text"
                                        value={data.message}
                                        className="border-r border-0 border-darki-600 bg-darki-300 shadow-sm focus:border-indigo-500 block w-full sm:text-sm  rounded-l-lg"
                                    />
                                    <div className="flex bg-darki-300 rounded-r-lg">
                                        <button className="flex flex-col justify-center items-center relative w-10 border border-transparent text-sm font-medium text-gray-100 hover:bg-darki-800">
                                            <RiMic2Line size={"24px"} />
                                        </button>
                                        <button className="flex flex-col justify-center items-center relative w-10 border border-transparent text-sm font-medium text-gray-100 hover:bg-darki-800">
                                            <BsFilePlus size={"24px"} />
                                        </button>
                                        <button className="m-2 w-15">
                                            <div className="flex flex-col justify-center items-center bg-white align-center px-2 py-1 rounded-lg hover:bg-gray-200">
                                                <RiSendPlane2Fill
                                                    size={"24px"}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AppLayout>
    );
};

export default Messanger;
