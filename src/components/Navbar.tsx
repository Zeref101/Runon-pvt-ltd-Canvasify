import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Theme from "./Theme"

import textIcon from "../assets/icons/text-icon.png"
import imageIcon from "../assets/icons/add-image.png"
import saveIcon from "../assets/icons/save-icon.png"

interface NavbarProps {
    handleAddText: () => void;
    handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    saveDocument: () => void;
}



const Navbar = ({ handleAddText, handleImageUpload, saveDocument }: NavbarProps) => {
    return (
        <div className='flex w-full justify-center items-center h-[56px] z-50 m-4 '>
            <nav className='flex rounded-lg px-1 dark:bg-dark-300 bg-white shadow-light-400 dark:shadow-dark-100'>
                <TooltipProvider >
                    <Tooltip>
                        <TooltipTrigger>
                            <div
                                className='flex flex-row items-center justify-center w-[50px] p-3 rounded-xl gap-1 hover:border dark:hover:bg-dark-500 hover:bg-offwhite'
                                onClick={handleAddText}
                            >
                                <img
                                    src={textIcon}
                                    alt="text-icon"
                                    className='dark:invert cursor-pointer w-[25px]'

                                />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add Text</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


                <TooltipProvider >
                    <Tooltip>
                        <TooltipTrigger>
                            <label
                                htmlFor='upload-button'
                                className='flex flex-row items-center justify-center w-[50px] p-3 rounded-xl gap-1 hover:border dark:hover:bg-dark-500 hover:bg-offwhite'
                            >
                                <img
                                    src={imageIcon}
                                    alt="add image"
                                    className='dark:invert cursor-pointer'

                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="upload-button"
                                    onChange={handleImageUpload}
                                    className='hidden'
                                />
                            </label>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add Image</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider >
                    <Tooltip>
                        <TooltipTrigger>
                            <div
                                className='flex flex-row items-center justify-center w-[50px] p-3 rounded-xl gap-1 hover:border dark:hover:bg-dark-500 hover:bg-offwhite'
                                onClick={saveDocument}
                            >
                                <img
                                    src={saveIcon}
                                    alt="add image"
                                    className='dark:invert cursor-pointer'

                                />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Save</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Theme />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </nav>
        </div>
    )
}

export default Navbar
