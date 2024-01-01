import HomeIcon from "../common/homeIcon";

export default function HeaderHome() {

    return (
        <header className={`border-b-2 border-[#000]`}>
            <div className="mainContainer lg:mainContainerHome py-4">
                <HomeIcon />
            </div>
        </header>
    )
}