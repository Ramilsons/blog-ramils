export default async function SubTitle(props) {
    return (
        <div className="pt-8 flex">
            <div className="w-[2px] h-auto bg-[#64DEE5] mr-4" />
            <h2 className="text-base text-[#898888] font-extralight py-[5px]">{props.text}</h2>
        </div>
    );
}