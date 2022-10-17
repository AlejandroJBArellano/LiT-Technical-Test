import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { users } from '../service/users';
import JobCard from '../components/JobCard';
import Header from "../components/Header";

const JobId: FunctionComponent = () => {
  const location = useLocation()

  const user = users.find(({_id}) => _id.$oid === location.pathname.replace("/", ""))
  return (
    <div className="relative bg-gray-100 [border:1px_solid_#c1c1c1] box-border w-full h-[1868px] overflow-hidden text-left text-base text-gray-600 font-raleway">
      <Header />
      <div className="absolute top-[119px] left-[0px] bg-gray-200 w-[1440px] h-[30px]" />
      <div className="absolute top-[160px] left-[180px] w-[1080px] h-[0px]" />
      <div className="absolute top-[317px] left-[543px] bg-white w-[717px] h-[315px]" />
      <div className="absolute top-[230px] left-[181px] bg-gray-300 w-[60px] h-[60px]" />
      <b className="absolute top-[163px] left-[181px] text-[30px] inline-block text-gray-700 w-[1079px]">
        {user?.["Job Title"]}
      </b>
      <b className="absolute top-[236px] left-[262px] inline-block text-pink-100">
        {user?.["Company Name"]}
      </b>
      <div className="absolute top-[256px] left-[262px] inline-block">
        Company tagline
      </div>
      <div className="absolute top-[276px] left-[263px] text-[10px] inline-block">
        {user?.Time}
      </div>
      <div className="absolute top-[327px] left-[181px] w-[88px] h-[60px] text-gray-700">
        <div className="absolute top-[0px] w-full left-[19px] leading-[20px] inline-block">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            {user?.["Job Type"]}
          </p>
          <p className="m-[0]">{user?.Seniority}</p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            {user?.["Location Full"]}
          </p>
        </div>
        <img
          className="absolute top-[3px] left-[0px] w-[15px] h-[15px]"
          alt=""
          src="ellipse-4.png"
        />
        <img
          className="absolute top-[23px] left-[0px] w-[15px] h-[15px]"
          alt=""
          src="ellipse-4.png"
        />
        <img
          className="absolute top-[43px] left-[0px] w-[15px] h-[15px]"
          alt=""
          src="ellipse-4.png"
        />
      </div>
      <div className="absolute top-[126px] left-[180px] text-black inline-block">
        <a href="/" className="text-black">
        {`Back to Jobs board`}
        </a>
      </div>
      <b className="absolute top-[337px] left-[563px] text-xl inline-block text-gray-700">
        About the job
      </b>
      <div className="absolute top-[381px] left-[563px] leading-[20px] inline-block w-[676px] h-[203px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`As the first all-in-one virtual venue for live online events, Hopin brings people together in a highly interactive and engaging online experience that feels just like an in-person event, only without the barriers. Whether it’s a 50-person meetup, or a 50,000-person conference—any type of event organizer can host a Hopin. As the first all-in-one virtual venue for live online events, Hopin brings people together in a highly interactive and engaging online experience that feels just like an in-person event, only without the barriers. Whether it’s a 50-person meetup, or a 50,000-person conference—any type of event organizer can host a Hopin. `}</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">&nbsp;</p>
        <p className="m-[0]">
          As the first all-in-one virtual venue for live online events, Hopin
          brings people together in a As the first all-in-one virtual venue for
          live online events, Hopin brings people together lorem ipsum dolor sit
          amet...
        </p>
      </div>
      <img
        className="absolute top-[1081px] left-[181px] w-[1081px] h-[49px]"
        alt=""
        src="rectangle-40.svg"
      />
      <b className="absolute top-[1096px] left-[202px] text-xl inline-block text-gray-700">
        Similar Jobs
      </b>
      <div className="absolute top-[1161px] left-[181px] w-[1080px] h-[0px]" />
      <div className="absolute top-[1130px] left-[180px] grid">
        {users.filter((userToFilter) => userToFilter["Job Title"].includes(user?.["Job Title"].split(" ")[0] as string)).slice(0, 5).map(user => (
            <JobCard user={user} />
        ))}
      </div>
      <b className="absolute top-[681px] left-[180px] text-[20px] inline-block text-gray-700">
        About The Company
      </b>
      <div className="absolute top-[716px] left-[181px] leading-[20px] inline-block w-[530px] h-[187px]">
        As the first all-in-one virtual venue for live online events, Hopin
        brings people together in a highly interactive and engaging online
        experience that feels just like an in-person event, only without the
        barriers. Whether it’s a 50-person meetup, or a 50,000-person
        conference—any type of event organizer can host a Hopin As the first
        all-in-one virtual venue for live online events, Hopin brings people
        together in a highly interactive and engaging online experience that
        feels just like an in-person event, only without the barriers. Whether
        it’s a 50-person meetup, or a 50,000-person conference—any type of event
        organizer can host a Hopin.
      </div>
      <div className="absolute top-[681px] left-[731px] w-[529px] h-[261px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-300" />
      </div>
      <div className="absolute top-[598px] left-[181px] rounded-[3px] bg-pink-100 h-[40px] flex flex-col p-[10px_20px] box-border items-start justify-start text-lg text-white font-roboto">
        <b className="relative inline-block">Apply</b>
      </div>
      <div className="absolute top-[903px] left-[180px] [border:1px_solid_#f00] box-border flex flex-col items-start justify-start text-lg text-white font-roboto">
        <div className="rounded-[3px] [border:2px_solid_#f00] box-border relative h-[42px] shrink-0 flex flex-col p-[10px_20px] items-start justify-start">
          <b className="relative inline-block text-red ">See Company profile</b>
        </div>
      </div>
      <div className="absolute top-[469px] left-[180px] [border:2px_solid_#ff3d00] box-border w-[340px] h-[107px]" />
      <div className="absolute top-[482px] left-[226px] font-semibold inline-block w-[279px] h-[74px]">
        <span>{`This may be a contingent job offer. For more information on Contingency Jobs, please read this article: `}</span>
        <span className="text-pink-100">{`“Contingency Jobs: Pros and Cons. All you Need to Know if They Suit Your Professional Goals.” `}</span>
      </div>
      <div className="absolute top-[483px] left-[189px] w-[28.5px] h-[25px] text-red">
        <div className="absolute top-[7px] left-[12px] font-black inline-block">
          !
        </div>
        <img
          className="absolute top-[3.06px] left-[2.2px] rounded-[3px] w-[28.5px] h-[25px]"
          alt=""
          src="vector-5.svg"
        />
      </div>
    </div>
  );
};

export default JobId;
