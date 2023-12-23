export default async function ReleaseInfos(props) {
    function formatDate(date) {
        let dateSplitted = date.split('-');

        let day = dateSplitted[2].split('T')[0];
        let month = dateSplitted[1];
        let year =  dateSplitted[0];

        return `${day}/${month}/${year}`
    }

    return (
        <div className="pt-4 flex">
            <p className="text-sm text-[#898888] font-bold">{formatDate(props.date)}</p>
            <div className="w-[2px] h-auto bg-[#8F8F8F] mx-3" />
            <p className="text-sm text-[#898888] font-extralight">{props.author}</p>
        </div>
    );
}