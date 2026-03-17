const Card = ({ iconUrl, title, description }) => {
    return (
        <div className="bg-white rounded-xl shadow-[0_9px_30px_rgb(0,0,0,0.04)] p-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="mb-6 flex justify-center items-center">
                <img src={iconUrl} alt={title} className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};
export default Card;