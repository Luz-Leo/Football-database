import { Outlet } from "react-router-dom";
import { React, useState } from "react";

const Header = () => {
    const [logged, setLoggedIn] = useState(false)

    return (
        <>
            <header>
                <nav aria-label="Global" className="relative flex h-16 items-center justify-between bg-blue-600 text-white px-4">
                    <div className="">
                        <a href="/" aria-label="Brand" className="flex justify-center place-items-center font-bold text-4xl">FDM</a>
                    </div>
                    <div className="flex max-w-screen-lg py-4 place-items-center px-6 space-x-4">
                        <a href="/" aria-current="page" className="">Homepage</a>
                        <a href="/player" className="">New player</a>
                        <a href="/login" className="flex mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            {logged === false ? "Log in" : "Log out"}
                        </a>
                    </div>

                </nav>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Header;