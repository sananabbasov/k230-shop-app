import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
    return (
        <div className='shadow'>
            <div className='flex justify-between container m-auto py-5  items-center'>
                <div className='w-[5%]'>
                    <img className='w-full' src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png" alt="" />
                </div>
                <div className='border-[2px] border-blue-500 w-[60%]'>
                    <input type="text" className='w-[70%] ' />
                    <select className='border-[1px] border-blue-500 w-[20%]'>
                        <option>All category</option>
                    </select>
                    <button className='w-[10%]'>Search</button>
                </div>
                <div className='flex'>
                    <div className='flex flex-col items-center mx-3'>
                        <PersonIcon />
                        <div>Profile</div>
                    </div>
                    <div className='flex flex-col items-center mx-3'>
                        <MessageIcon />
                        <div>Message</div>
                    </div>
                    <div className='flex flex-col items-center mx-3'>
                        <FavoriteIcon />
                        <div>Wishlist</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
