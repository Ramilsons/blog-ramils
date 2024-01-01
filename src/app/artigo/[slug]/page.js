import { createClient } from "@/prismicio";
import { asHTML } from "@prismicio/client";

import Header from "@/app/common/header";
import Banner from "../banner";
import TitlePost from "../titlePost";
import SubTitle from "../subTitle";
import ReleaseInfos from "../realeaseInfos";

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
        <>
        <Header />
        <div className="bg-[#fff] defaultHeight">
            <div className="mainContainer pt-[50px]">
                <Banner source={data.banner.source} alt={data.banner.altText} />
                <TitlePost text={data.titleH1} />
                <SubTitle text={data.subtitleH2} />
                <ReleaseInfos date={data.releaseDate} author={data.author} />

                <article className={`contentPost mb-[100px]`} dangerouslySetInnerHTML={{__html: data.content}} />
            </div>
        </div>
        </>
    );
}


