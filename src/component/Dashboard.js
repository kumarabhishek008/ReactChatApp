import React, { useContext, useState } from 'react'
import { AuthContext } from '../utils/ContextProvider';

const Dashboard = () => {
  
  const { getUserWithName, userData } = useContext(AuthContext);
  const [name, setname] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [inputChange, setInputChange] = useState()
  const [chats, setChats] = useState([])

  const handleChangeInput = async (value) => { 
    setname(value);
    const data = await getUserWithName(value);
    if(data?.length){
      setAllUsers([
        ...data.filter((usr)=>usr.email!==userData.email)
      ])
    }
  }

  const onSubmitChats = (e) => { 
    e.preventDefault();
    setChats([...chats, {message:inputChange, sender:true}])
  }
  return (
    <div className='flex flex-row justify-center' style={{ height:'100vh'}}>
      <div className='w-1/5 bg-blue-600'>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Email address"
          onChange={(e)=>handleChangeInput(e.target.value)}
        />
        <ul>
          {
            allUsers?.map((usr)=>
            <li onClick={()=>setReceiver(usr)} className="cursor-pointer">
              { usr.name }
            </li>
            )
          }
        </ul>
      </div>
      <div className='w-4/5 bg-green-300'>
          <div className='w-full p-4 h-16 bg-gray-400'>
            {
              receiver?.name
            }
          </div>
          <div className=' bg-purple-500' style={{ height:'80vh' }}>
            <ul>
              {
                chats.map((cht)=>    
                <li className={ `${cht?.sender ? 'ml-auto' : 'mr-auto'} bg-blue-100 p-2 my-4 w-fit rounded-lg` }>
                  {
                    cht?.message
                  }            
                </li>
                )
              }
            </ul>
          </div>
          <div className='w-full p-4 h-16 bg-gray-400 mt-auto flex justify-center' style={{ height:'10vh'}}>
            <form className='flex flex-row' onSubmit={onSubmitChats}>
              <input
              required
              className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter Message"
              onChange={(e)=>setInputChange(e.target.value)}
            />
            <button className='px-4 py-2 bg-blue-800 rounded-lg'>Send</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Dashboard