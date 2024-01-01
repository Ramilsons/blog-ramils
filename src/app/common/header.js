import HomeIcon from "./homeIcon"

export default function Header() {

    return (
        <header className={`border-b-2 border-[#F9F9F9]`}>
            <div className="mainContainerHome py-4">
                <HomeIcon />
            </div>
        </header>
    )
}