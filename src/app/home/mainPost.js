import Link from "next/link";
import Image from "next/image";

export default function MainPost({lastPostData}) {
    return (
        <Link href={`/artigo/${lastPostData.uid}`} className={'w-[100vw] h-[50vw]'} title={`Ir para o artigo ${lastPostData.title}`}>
            <Image loading="eager" src={lastPostData.banner.source} alt={lastPostData.banner.alt}  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

            <div className="mainContainer">
                <h3 className="font-medium text-3xl mt-8 text-[#464646]">{lastPostData.title}</h3>
                <h4 className="font-regular text-base mt-7 text-[#3E3E3E]">{lastPostData.subtitle}</h4>

                <button className="font-semibold text-base mt-9 border-b-[3px] border-[#000] mb-16 px-[5px]">{'Ler mais'}</button>
            </div>
        </Link>
    )
}