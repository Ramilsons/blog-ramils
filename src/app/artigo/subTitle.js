export default async function SubTitle(props) {
    return (
        <div className="pt-4 sm:pt-8 flex">
            <div className="w-[2px] h-auto bg-[#64DEE5] mr-4" />
            <h2 className="text-xl sm:text-2xl leading-6 sm:leading-9 text-[#818080] font-extralight py-[5px]">{props.text}</h2>
        </div>
    );
}