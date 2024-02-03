import CardPost from "./cardPost";

export default function ShelveHome({title, posts, totalPosts}) {
    return(
        <div className="border-t-2 border-[#000] py-12 text-[#464646]">
            <h2 className="font-medium text-2xl mainContainer mb-7 lg:ml-0 xl:text-4xl lg:mb-12">{title}</h2>

            <div className="sm:flex sm:w-[85vw] sm:mx-[auto] items-start justify-start gap-10 relative mh-[100px]">
                {posts.map((eachPost, index) => {
                    return (
                        <CardPost isLastPost={index == totalPosts} key={eachPost.uid} uid={eachPost.uid} title={eachPost.data.title[0].text} banner={eachPost.data.banner.url} bannerAltText={eachPost.data.banner.alt} />
                    )
                })}
                <div className={`border-2 rounded-sm border-[#000] text-[#000] absolute top-1 -rotate-12 bg-[#fff] left-[0px] md:left-[-5px] px-3 font-semibold text-[14px]`}>{'Em breve'}</div>
            </div>
        </div>
    )
}