import Image from "next/image";
import Link from "next/link";

export default function CardPost({uid, title, banner, bannerAltText, isLastPost}) {
    return (
        <div className={`${isLastPost ? 'mb-0' : 'mb-20'} sm:w-[45%] lg:w-[33%]`}>
            <Link href={`/artigo/${uid}`} className={'w-[100vw] h-[50vw]'} title={`Ir para o artigo ${title}`}>
                <Image src={banner} alt={bannerAltText} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />

                <h3 className="font-medium text-xl mt-4 mainContainer hover:text-[#64DEE5] xl:text-2xl lg:mt-7 sm:w-[100%]">{title}</h3>
            </Link>
        </div>
    )
}