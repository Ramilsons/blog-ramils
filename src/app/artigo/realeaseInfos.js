export default async function ReleaseInfos(props) {
    function formatDate(date) {
        let dateSplitted = date.split('-');

        let day = dateSplitted[2].split('T')[0];
        let month = dateSplitted[1];
        let year =  dateSplitted[0];

        return `${day}/${month}/${year}`
    }

    return (
        <div className="pt-4 flex items-center">
            <p className="text-sm text-[#898888] font-bold">{formatDate(props.date)}</p>
            <div className="w-[2px] h-[5px] w-[5px] rounded-[50%] bg-[#cac8c8] mx-3" />
            <p className="text-sm text-[#898888] font-extralight">{props.author}</p>
        </div>
    );
}