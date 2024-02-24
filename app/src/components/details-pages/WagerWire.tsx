const Home = () => {
  return (
    <div className='flex flex-row justify-evenly h-screen overflow-scroll mt-24'>
      <div className='pr-6'>
        <div className='absolute top-60'> Small screen </div>
        <img
          className=''
          src='/images/www.wagerwire.com_small.png'
          alt='ww-home-large'
        />
      </div>
      <div className='pr-6'>
        <div className='absolute top-60'> Medium screen </div>
        <img
          className=''
          src='/images/www.wagerwire.com_medium.png'
          alt='ww-home-large'
        />
      </div>

      <div className='pr-6'>
        <div className='absolute top-60'> Large screen </div>
        <img
          className=''
          src='/images/www.wagerwire.com_large.png'
          alt='ww-home-large'
        />
      </div>
    </div>
  );
};

const WagerWire = () => {
  return (
    <div className='font-semibold'>
      <a
        href='/projects'
        className='font-bold text-[16px] hover:text-[#E5BAC9]'
      >
        {"<"} Projects
      </a>
      <div className='md:max-w-[500px] lg:max-w-[800px]'>
        <div className='flex flex-row text-[24px] pt-8'>
          <h2 className='mr-4'> Home Page</h2>
          <h2 className='mr-4'> Calculator Page</h2>
          <h2 className='mr-4'> Graph Page</h2>
          <h2> Community Page</h2>
        </div>
        <hr className='border-black border-2' />
      </div>
      <Home />
    </div>
  );
};

export default WagerWire;
