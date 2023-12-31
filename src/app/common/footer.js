import Image from "next/image"

import LinkedInIcon from "./linkedin"
import GithubIcon from "./github"
import PortfolioIcon from "./portfolio"

export default function Footer () {
    return (
        <div className="bg-[#F9F9F9] py-14">
            <div className="mainContainer sm:flex justify-between items-end">
                <div>
                    <Image className="rounded-[50%]" src={'/eu-2-cut.jpg'} height={67} width={67} alt="Foto de Ramilson Silva" />

                    <p className="mt-8 text-base text-[#525252] font-light leading-5">Olá, sou o <span className="font-bold">Ramilson</span>. <br />Atuo como Dev FrontEnd<br />e também cuido desse Blog aqui.</p>
                </div>

                <div className="pt-9 flex gap-2 sm:gap-4">
                    <LinkedInIcon />
                    <GithubIcon />
                    <PortfolioIcon />
                </div>
            </div>
        </div>
    )
}