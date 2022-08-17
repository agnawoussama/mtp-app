const ChannelPost = ({channel}) => {
    return (
        <div className="p-5 mb-10 border drop-shadow-xl rounded-lg">
            <h1 className="text-4xl">{channel.title}</h1>
            <p className="text-sm mb-5">by {channel.author}</p>
            <p className="text-justify	">{channel.content}</p>
        </div>
    );
}

export default ChannelPost;