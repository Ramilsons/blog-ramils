import Image from "next/image";
import Link from "next/link";

export default function CardPost({uid, title, banner, bannerAltText, isLastPost}) {
    return (
        <div className={`${isLastPost ? 'mb-0' : 'mb-20'}`}>
            <Link href={`/artigo/${uid}`} className={'w-[100vw] h-[50vw]'} title={`Ir para o artigo ${title}`}>
                <Image src={banner} alt={bannerAltText} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />

                <h3 className="font-medium text-xl mt-4 mainContainer">{title}</h3>
            </Link>
        </div>
    )
}