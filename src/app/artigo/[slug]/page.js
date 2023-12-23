import { createClient } from "@/prismicio";

import Banner from "../banner";
import TitlePost from "../titlePost";
import SubTitle from "../subTitle";
import ReleaseInfos from "../realeaseInfos";

export default async function Page({params}) {
    let slug = params.slug;
    
    const client = createClient();
    const post = await client.getByUID('posts', slug);

    const data = {
        titleH1: post.data.title[0].text,
        subtitleH2:post.data.subtitle[0].text,
        releaseDate: post.last_publication_date,
        banner: {
            source: post.data.banner.url,
            altText: post.data.banner.alt
        },
        author: "Ramilson Silva"
    }

    return (
        <div className="h-[100vh] bg-[#fff]">
            <div className="w-[85vw] mx-auto pt-[100px]">
                <Banner source={data.banner.source} alt={data.banner.altText} />
                <TitlePost text={data.titleH1} />
                <SubTitle text={data.subtitleH2} />

                <ReleaseInfos date={data.releaseDate} author={data.author} />
            </div>
        </div>
    );
}


