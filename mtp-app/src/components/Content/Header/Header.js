import avatar from './avatar.jpg'

const Header = () => {
    return (
        <header className="flex w-full p-4 ">
            <nav className="flex justify-end items-center w-full">
                <div>
                    <div className="text-base font-semibold	">Oussama Agnaou</div>
                    <div className="text-sm font-normal	">Web Developer</div>
                </div>
                <div>
                    <img src={avatar} className="w-14 ml-6 rounded-full border drop-shadow-xl" alt="" />
                </div>
            </nav>
        </header>
    );
}

export default Header;