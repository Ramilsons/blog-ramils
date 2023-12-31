export default async function TitlePost(props) {
    return (
        <div className="pt-8">
            <h1 className="text-3xl sm:text-4xl text-left sm:text-center xl:text-4xl">{props.text}</h1>
        </div>
    );
}