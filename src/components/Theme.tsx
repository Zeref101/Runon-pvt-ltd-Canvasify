import { useTheme } from "@/context/ThemeProvider";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/contants";
import sunIcon from "../assets/icons/sun.svg"
import moonIcon from "../assets/icons/moon.svg"

const Theme = () => {
    const { mode, setMode } = useTheme();
    return (
        <Menubar className="relative border-none bg-transparent shadow-none">
            <MenubarMenu>
                <MenubarTrigger className=" data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
                    {mode === "light" ? (
                        <img
                            src={sunIcon}
                            alt="sun"
                            height={20}
                            width={20}
                            className="active-theme"
                        />
                    ) : (
                        <img
                            src={moonIcon}
                            alt="sun"
                            height={20}
                            width={20}
                            className="active-theme"
                        />
                    )}
                </MenubarTrigger>
                <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border border-light-700 bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
                    {themes.map((item) => (
                        <MenubarItem
                            key={item.value}
                            onClick={() => {
                                setMode(item.value);
                                if (item.value !== "system") {
                                    localStorage.theme = item.value;
                                } else {
                                    localStorage.removeItem("theme");
                                }
                            }}
                            className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
                        >
                            <img
                                src={item.icon}
                                alt={item.value}
                                height={16}
                                width={16}
                                className={`${mode === item.value && "active-theme"}`}
                            />
                            <p
                                className={`body-semibold text-light-500 ${mode === item.value
                                    ? "text-primary-500"
                                    : "text-dark100_light900"
                                    }`}
                            >
                                {item.label}
                            </p>
                        </MenubarItem>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default Theme;
