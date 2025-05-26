import { Link } from 'react-router-dom';

function LinkButton({ link, icon,name='Github' }) {
  return (
    <Link to={link}>
      <div className={`${name=='Github' ? 'rounded-lg px-4 py-2 border border-gray-700 bg-[linear-gradient(135deg,_rgba(138,43,226,0.2),_rgba(0,0,128,0.1))] text-white font-semibold backdrop-blur-md' :'border-gray-700 bg-[linear-gradient(135deg,_rgba(0,123,255,0.2),_rgba(0,0,0,0.1))] text-blue-400 font-semibold backdrop-blur-md' } flex  items-center justify-center gap-2 rounded-lg px-4 py-2 border `}>
        {icon}
        <span className='font-light text-[1.2vmax] md:text-[0.9vmax]'>{name}</span>
      </div>
    </Link>
  );
}

export default LinkButton;
