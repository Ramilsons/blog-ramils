import { createClient } from "@/prismicio";
import { asHTML } from "@prismicio/client";

import Header from "@/app/common/header";
import Banner from "../banner";
import TitlePost from "../titlePost";
import SubTitle from "../subTitle";
import ReleaseInfos from "../realeaseInfos";

import domain from "../../../../custom/domain";

let slug = '';
export default async function Page({params}) {
    slug = params.slug;
    
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

    let allContentPost = post.data.content.filter((value, index) => value.type == 'paragraph');
    let allContentString = '';

    allContentPost.forEach((value) => {
        allContentString += value.text.replace('\n', ' ');
    })

    const articleStructuredData = `{"@context":"https://schema.org","@type":"Article","name":"${data.titleH1}","author":{"@type":"Person","name":"Ramilson Silva","url":"${domain}/article/${slug}"},"datePublished":"${post.first_publication_date}","image":"${data.banner.source}","headline":"${data.titleH1}","articleBody":"${allContentString}"}`

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: articleStructuredData}} />
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

export async function generateMetadata() {
    const client = createClient();
    const post = await client.getByUID('artigo', slug);

    return {
        title: `${post.data.title[0].text} | Blog do Ramils`,
        description: post.data.subtitle[0].text,
        twitter: {
            card: 'summary_large_image',
            title: post.data.title[0].text,
            description: post.data.subtitle[0].text,
            creator: 'Ramilson Silva',
            images: post.data.banner.url
        },
        openGraph: {
            type: "article",
            url: `${domain}/artigo/${slug}`,
            title: post.data.title[0].text,
            description: post.data.subtitle[0].text,
            images: [{url: post.data.banner.url, width: 320, height: 160}],
        }
    }
}


