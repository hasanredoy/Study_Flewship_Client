
const Banner = () => {
  return (
    <div>
    <div className="hero min-h-screen bg-cover rounded-lg" style={{backgroundImage: 'url(https://img.freepik.com/premium-vector/online-library-bookstores-ebook-internet-education-tiny-people-reads-books-laptop-screen-web-page-reading-downloading-book-audiobooks_458444-666.jpg?w=740)'}}>
  <div className="hero-overlay bg-opacity-80 bg-black rounded-lg"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-3xl lg:text-5xl font-black text-gray-300">Learn Together Online With <span className=" text-yellow-400">Study FlewShip</span> for Free.</h1>
      <p className="mb-5 max lg:max-w-xl text-sm lg:text-base  mx-auto text-white">Study Flewship is your gateway to collaborative online learning. Dive into a dynamic virtual environment where students come together to share knowledge, discuss concepts, and support each other's academic pursuits. With Study Flewship, you'll experience real-time study sessions equipped with interactive tools and seamless communication channels. Join a vibrant community of learners and elevate your educational journey with shared insights, group discussions, and collective growth.</p>
      <button className="btn btn-error text-xl font-bold btn-outline">Let&apos;s Learn Together</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;