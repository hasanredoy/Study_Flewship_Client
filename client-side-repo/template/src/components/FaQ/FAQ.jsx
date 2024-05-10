const FAQ = () => {
  return (
    <div className=" my-20">
      {/* text div  */}
      <div className=" my-10">
        <h1 className=" text-3xl text-center font-black my-5">
          Frequently Asked Question
        </h1>
        <p className=" max-w-sm lg:max-w-lg text-center mx-auto">
          Explore some Frequently Asked Question about us and related subject.
        </p>
      </div>
      {/* faq div  */}
      <div className="  bg-base-200">
        <div className=" flex flex-col lg:flex-row gap-5">
       <div className=" w-full lg:w-[45%] ">
       <img
            src="https://cdn.pixabay.com/photo/2022/02/02/10/56/questions-6988157_640.png"
            className=" rounded-lg shadow-2xl h-full w-full "
          />
       </div>
          <div className=" w-full lg:w-[50%] ">
            <div className="collapse collapse-arrow bg-base-200 space-y-3">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              How do I join a study session on Study Flewship?
              </div>
              <div className="collapse-content">
                <p>Joining a study session on Study Flewship is easy! Simply browse through the available sessions on our platform, select the one that interests you, and click on the "Join" button. You'll be instantly connected with other participants in the session to start studying together.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Can I create my own study session on Study Flewship?
              </div>
              <div className="collapse-content">
                <p>Absolutely! Study Flewship encourages collaboration and peer-led learning. You can create your own study session by clicking on the "Create Session" button, setting the topic, date, time, and other details, and inviting fellow learners to join you in studying.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Is Study Flewship free to use?
              </div>
              <div className="collapse-content">
                <p>Yes, Study Flewship is completely free to use for all learners. There are no subscription fees or hidden charges. We believe in making education accessible to everyone, and our platform is designed to facilitate collaborative learning experiences at no cost.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Are study materials provided in the study sessions?
              </div>
              <div className="collapse-content">
                <p> While Study Flewship does not provide specific study materials, participants are encouraged to bring their own materials such as textbooks, notes, or online resources to the study sessions. The focus is on collaborative learning, discussion, and sharing of knowledge among participants.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
