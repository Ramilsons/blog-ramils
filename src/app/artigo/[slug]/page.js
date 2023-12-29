import { createClient } from "@/prismicio";
import { asHTML } from "@prismicio/client";

import Banner from "../banner";
import TitlePost from "../titlePost";
import SubTitle from "../subTitle";
import ReleaseInfos from "../realeaseInfos";
import Footer from "@/app/common/footer";

export default async function Page({params}) {
    let slug = params.slug;
    
    const client = createClient();
    const post = await client.getByUID('artigo', slug);

    const data = {
        titleH1: post.data.title[0].text,
        subtitleH2:post.data.subtitle[0].text,
        releaseDate: post.last_publication_date,
        banner: {
            source: post.data.banner.url,
            altText: post.data.banner.alt
        },
        author: post.data.author[0].text,
        content: asHTML(post.data.content)
    }

    return (
        <div className="bg-[#fff] min-h-[100vh]">
            <div className="w-[85vw] mx-auto pt-[100px] max-w-[700px]">
                <Banner source={data.banner.source} alt={data.banner.altText} />
                <TitlePost text={data.titleH1} />
                <SubTitle text={data.subtitleH2} />
                <ReleaseInfos date={data.releaseDate} author={data.author} />

                <div className={`contentPost`} dangerouslySetInnerHTML={{__html: data.content}} />
            </div>
        </div>
    );
}


