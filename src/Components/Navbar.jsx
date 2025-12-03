import{ navLinks, navIcons} from '../Constants/data'
import dayjs from 'dayjs'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Mac logo" />
                <p className="font-bold">Aryan Gohil</p>

                <ul>
                    {navLinks.map(({id,name}) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id,img}) => (
                        <li key={id}>
                            <img src={img} alt="icon" />
                        </li>
                    ))}
                </ul>

                <div className='flex flex-col items-start gap-0'>
                 <p className='text-sm font-semibold leading-none'>{dayjs().format('h:mm A')}</p>
                <p className='text-gray-950 leading-none'>{dayjs().format('ddd MMM')}</p>   
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar