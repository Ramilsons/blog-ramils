import Image from "next/image"

export default function Banner(props) {
    return (
        <div>
            <Image className="w-[100%] h-[100%] rounded object-top object-cover block" alt={props.alt} src={props.source} loading="eager" width={320} height={160} />
        </div>
    )
}