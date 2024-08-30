export function Header(){
    return(
        <div className='h-[200px] w-full bg-gray-700 flex items-center justify-center'>
        <h1 className='text-[40px] font-black flex items-center justify-center gap-3'>
          <img className='h-9 w-6' src="./rocket.png" alt="" />
          <div>
            <span className='text-blue'>to</span>
            <span className='text-purple_dark'>do</span>
          </div>
        </h1>
      </div>
    )
}