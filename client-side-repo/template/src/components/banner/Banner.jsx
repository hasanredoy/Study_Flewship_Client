
const Banner = () => {
  return (
    <div>
    <div className="hero min-h-screen bg-cover rounded-lg" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN0dWR5JTIwb25saW5lfGVufDB8fDB8fHww)'}}>
  <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-3xl lg:text-5xl font-black text-gray-300">Best Way Of Learning is Study Together Online.</h1>
      <p className="mb-5 max lg:max-w-xl text-sm lg:text-base  mx-auto text-white">Study Flewship is your gateway to collaborative online learning. Dive into a dynamic virtual environment where students come together to share knowledge, discuss concepts, and support each other's academic pursuits. With Study Flewship, you'll experience real-time study sessions equipped with interactive tools and seamless communication channels. Join a vibrant community of learners and elevate your educational journey with shared insights, group discussions, and collective growth.</p>
      <button className="btn btn-error text-xl font-bold btn-outline">Let&apos;s Learn Together</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;