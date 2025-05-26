function ContactCard({ obj }) {
  return (
    <div className="w-[20vmax] h-[16vmax] md:w-[20vmax] md:h-fitborder rounded-lg shadow-md p-4 m-2 flex flex-col md:gap-3 gap-1 items-center border justify-center border-gray-800 
      bg-gradient-to-br md:from-blue-500/20  from-blue-500/20 to-black md:to-black/10 text-blue-400 font-semibold backdrop-blur-md transition-all duration-300 
      hover:scale-105 hover:shadow-lg hover:border-blue-900">
      
      <div className=" transition-transform duration-300 hover:rotate-6">
        {obj.icon}
      </div>

      <h1 className="text-white text-[1.4vmax] md:text-[1vmax]">{obj.service}</h1>
      <h1 className="text-sm font-light text-white text-[1.4vmax] md:text-[1vmax]">{obj.id}</h1>

      <button className="flex items-center justify-center py-1 rounded-lg text-blue-500 text-md font-light shadow-md cursor-pointer 
        transition-all duration-300 hover:bg-blue-500 hover:text-black hover:shadow-lg">
        <span className="text-[1.5vmax] md:text-[1vmax]">Send Message</span>
      </button>
    </div>
  );
}

export default ContactCard
