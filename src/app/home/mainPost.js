import Link from "next/link";
import Image from "next/image";

export default function MainPost({lastPostData}) {
    return (
        <Link href={`/artigo/${lastPostData.uid}`} className={'w-[100vw] h-[50vw] lg:flex lg:w-[100%] lg:h-[auto] flex-row-reverse py-10 gap-8'} title={`Ir para o artigo ${lastPostData.title}`}>
            <div className="lg:w-[50%] lg:h-[auto]">
                <Image loading="eager" src={lastPostData.banner.source} alt={lastPostData.banner.alt} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="mainContainer lg:w-[50%] lg:ml-0">
                <h1 className="mt-8 font-medium text-[#7b7575]">{'Blog do Ramils'}</h1>
                <h3 className="font-medium text-3xl text-[#464646] xl:text-5xl">{lastPostData.title}</h3>
                <h4 className="font-regular text-base mt-7 text-[#3E3E3E] xl:text-2xl">{lastPostData.subtitle}</h4>

                <button className="font-semibold text-base xl:text-xl mt-9 lg:mt-16 border-b-[3px] border-[#000] mb-16 px-[5px] hover:border-[#64DEE5] hover:text-[#64DEE5]">{'Ler mais'}</button>
            </div>
        </Link>
    )
}