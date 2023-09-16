const Banner = () => {
  return (
    <div className="hero min-h-[600px] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="mix-blend-multiply mask mask-squircle border-4 shadow-2xl ">
          <img
            src="https://i.ibb.co/Q6Fdrt7/Tigers.jpg
"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold ">
            <span className="text-rose-700">বুয়েট</span> <br />{" "}
            <span className="text-lg">
              আন্তঃ সম্মানিত শিক্ষক, কর্মকর্তা ও কর্মচারী প্রীতি ক্রিকেট
              টুর্নামেন্ট -২০২৩
            </span>
            <br />
            <br /> <span className="text-center pt-10">সিজন-৩</span>
          </h1>
          <p className="py-6"></p>
          <button className="btn bg-rose-800 text-white">রেজিস্ট্রেশন</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
