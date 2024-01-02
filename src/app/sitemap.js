import { createClient } from "@/prismicio";
import domain from "../../custom/domain";

export const revalidate = 3600 // revalidate every hour

export default async function sitemap() {
    const client = createClient();
    const allPosts = await client.getByType('artigo', {orderings: {field: 'document.first_publication_date',direction: 'asc'}});
    const postsXml = [];
        
    allPosts.results.map((post, index) => {
        postsXml.push({ 
            url: `${domain}/artigo/${post.uid}`,
            lastModified: `${post.last_publication_date}`,
            changeFrequency: `monthly`,
            priority: 0.9
        })
    })

    return [
        {
            url: `${domain}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        ...postsXml
    ]
}