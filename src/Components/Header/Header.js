


const Header = ({handleClick}) => {

    return (
       <div className='h-50 bg-header-100'>
            <div className='w-5/6 m-auto flex flex-col justify-center items-center py-4'>
                <header className='font-bold text-header-big text-black pb-3'>Welcome🎉 to your To-Do List</header>
                <button className='bg-header-200 text-white font-medium rounded-2xl py-1 px-3 flex justify-between items-center' onClick={handleClick} ><span className="font-bold py-2 px-1">+</span> create task</button>
            </div>
       </div>
    );
  }
  
  export default Header;