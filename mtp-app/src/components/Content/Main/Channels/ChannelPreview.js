const ChannelPreview = ({ title }) => {
    return (
        <div className="flex items-center justify-center h-20 border rounded-lg p-4 cursor-pointer hover:bg-channelPv hover:text-white">
            <h1 className="font-semibold text-lg">{title}</h1>
        </div>
    );
}

export default ChannelPreview;