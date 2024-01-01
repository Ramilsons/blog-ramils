import { createClient } from '@/prismicio';

import HeaderHome from './home/headerHome';
import MainPost from './home/mainPost';
import ShelveHome from './home/shelveHome';

export default async function Home() {
  const client = createClient();
  const allPosts = await client.getByType('artigo', {orderings: {field: 'document.first_publication_date',direction: 'desc'}});

  const lastPost = allPosts.results[0];

  const lastPostData = {
    title: lastPost.data.title[0].text,
    subtitle:lastPost.data.subtitle[0].text,
    banner: {
        source: lastPost.data.banner.url,
        altText: lastPost.data.banner.alt
    },
    uid: lastPost.uid
  }

  const allPostsWithoutLast = allPosts.results.filter((value, index) => index > 0);

  return (
    <main>
      <HeaderHome />

      <div className="lg:mainContainerHome defaultHeight">
        <MainPost lastPostData={lastPostData} />
        <ShelveHome title={'Mais Posts'} posts={allPostsWithoutLast} totalPosts={allPosts.results.length}  />
      </div>
    </main>
  )
}
