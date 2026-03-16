const Contact = ({ title, description }) => {
    return (
        <div className="bg-slate-50 py-20 w-full mt-12 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center text-slate-800">
                    {title}
                </h2>
                <p className="text-slate-500 mb-10 text-center text-lg">
                    {description}
                </p>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                    
                    <form action="#" method="post" className="md:w-2/3 flex flex-col gap-4">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm h-32 resize-y focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#E74C3C] text-white font-medium py-3 px-6 rounded-md hover:bg-[#D33C2C] transition-colors w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;