import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";


type Props = {}

const Hero: FC<Props> = (props) => {
    return (
        <div className="w-full 100px:flex items-center">
            <div className="absolute top-[100px] 100px:top-[unset] 1500px:h-[700px] 1500px:w-[700px]"></div>
        </div>
    )
}

export default Hero