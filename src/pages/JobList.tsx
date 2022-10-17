import { FunctionComponent, useState } from 'react';
import Header from "../components/Header";
import { users } from "../service/users";
import { perksSre } from "../utils/perksSrc";
import { strSpreaded } from "../utils/strSpreaded";
import { Perk } from '../types/Perk';
import JobCard from "../components/JobCard";

const JobList: FunctionComponent = () => {
    const [sortedUsers, setSortedUsers] = useState(users.slice(0,10))
    const sortCompaniesAlphabetically = () => {
        console.log("sort array")
        setSortedUsers(users.sort(function(a, b) {
            var textA = a['Company Name'].toUpperCase();
            var textB = b['Company Name'].toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).slice(0,10))
        console.log(sortedUsers)
    }
    return (
        <div className="w-full h-[1761px] text-left text-base text-gray-600 font-raleway">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 [border:1px_solid_#c1c1c1] box-border w-[1440px] h-[1745px] overflow-hidden">
                <Header />
                <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[98px] overflow-hidden hidden text-white">
                <img
                    className="absolute top-[14px] left-[180px] w-[70px] h-[70px] overflow-hidden"
                    alt=""
                    src="lit-logo-positive.svg"
                />
                <div className="absolute top-[32px] left-[1171px] w-[89px] h-[40px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-pink-100" />
                    <b className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_24.5px)] flex items-center w-[49px]">
                    Donate
                    </b>
                </div>
                <div className="absolute top-[43px] left-[641px] w-[500px] h-[19px] text-lg text-gray-700">
                    <b className="absolute top-[0px] left-[0px] inline-block">
                    Chapters
                    </b>
                    <b className="absolute top-[0px] left-[294px] inline-block">
                    Partner
                    </b>
                    <b className="absolute top-[0px] left-[373px] inline-block">News</b>
                    <div className="absolute top-[0px] left-[92px] w-[64px] h-[19px]">
                    <b className="absolute top-[0px] left-[0px] inline-block">
                        Events
                    </b>
                    <img
                        className="absolute top-[12px] left-[64px] w-[10px] h-[5px]"
                        alt=""
                        src="../polygon-1.svg"
                    />
                    </div>
                    <div className="absolute top-[0px] left-[178px] w-[94px] h-[19px]">
                    <b className="absolute top-[0px] left-[0px] inline-block">
                        LiT Recruit
                    </b>
                    <img
                        className="absolute top-[12px] left-[94px] w-[10px] h-[5px]"
                        alt=""
                        src="../polygon-1.svg"
                    />
                    </div>
                    <div className="absolute top-[0px] left-[438px] w-[62px] h-[19px]">
                    <b className="absolute top-[0px] left-[0px] inline-block">
                        My LiT
                    </b>
                    <img
                        className="absolute top-[12px] left-[62px] w-[10px] h-[5px]"
                        alt=""
                        src="../polygon-1.svg"
                    />
                    </div>
                </div>
                <div className="absolute top-[98px] left-[180px] bg-gray-500 w-[1080px] h-[200px]" />
                <div className="absolute top-[96px] left-[0px] bg-white w-[1440px] h-[190px]" />
                </div>
                <div className="absolute top-[267px] left-[180px] w-[1080px] h-[0px]" />
                <div className="absolute top-[251.75px] left-[179.75px] border-t-[0.5px_solid_#555] box-border w-[1080.5px] h-[0.5px]" />
                <b className="absolute top-[159px] left-[180px] inline-block text-gray-700">
                Search by filters
                </b>
                <div className="absolute top-[195px] left-[182px] w-[701px] h-[38px] text-gray-400">
                <div className="absolute top-[0px] left-[0px] bg-white [border:1px_solid_#c4c4c4] box-border w-[213px] flex flex-col p-[10px] items-start justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div className="relative leading-[18px] inline-block">
                        Functional Area
                    </div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                <div className="absolute top-[0px] left-[214px] bg-white [border:1px_solid_#c4c4c4] box-border hidden flex-col p-[10px] items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div className="relative leading-[18px] inline-block">
                        Visual Basic
                    </div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                <div className="absolute top-[0px] left-[245px] bg-white [border:1px_solid_#c4c4c4] box-border w-[136px] flex flex-col p-[10px] items-start justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div className="relative leading-[18px] inline-block">
                        Seniority
                    </div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                <div className="absolute top-[0px] left-[214px] bg-white [border:1px_solid_#c4c4c4] box-border hidden flex-col p-[10px] items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div className="relative leading-[18px] inline-block">
                        Apache Spark
                    </div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                <div className="absolute top-[0px] left-[413px] bg-white [border:1px_solid_#c4c4c4] box-border w-[121px] flex flex-col p-[10px] items-start justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div className="relative leading-[18px] inline-block">Perks</div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                <div className="absolute top-[0px] left-[572px] bg-white [border:1px_solid_#d6d6d6] box-border w-[129px] flex flex-col p-[10px] items-start justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div className="relative leading-[18px] inline-block">{`Location `}</div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                </div>
                <div className="absolute top-[272px] left-[182px] w-[674px] h-[69px] text-gray-700">
                <b className="absolute top-[0px] left-[0px] inline-block">
                    Search by keywords
                </b>
                <div className="absolute top-[31px] left-[0px] bg-white [border:1px_solid_#c4c4c4] box-border w-[674px] flex flex-col p-[10px] items-center justify-center text-gray-400">
                    <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="relative leading-[18px] inline-block">
                        Keywords
                    </div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        src="../polygon-66.svg"
                    />
                    </div>
                </div>
                </div>
                <div className="absolute top-[302px] left-[982px] w-[278px] h-[38px] text-black">
                <div className="absolute top-[12px] left-[0px] w-[59px] h-[16px]">
                    <div className="absolute top-[0px] left-[0px] inline-block">
                    Order by:
                    </div>
                </div>
                <div className="absolute top-[0px] left-[74px] flex flex-col items-start justify-start">
                    <div className="bg-pink-300 flex flex-col p-[10px] box-border items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                        <b className="relative leading-[18px] inline-block">Recent</b>
                        <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        />
                    </div>
                    </div>
                </div>
                <div className="absolute top-[0px] left-[157px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-col p-[10px] items-center justify-center text-gray-400">
                    <div className="flex flex-row items-center justify-center gap-[30px]">
                    <div onClick={sortCompaniesAlphabetically} className=" cursor-pointer relative leading-[18px] inline-block">
                        Companies A-Z
                    </div>
                    <img
                        className="relative w-[10px] h-[5px] shrink-0 hidden"
                        alt=""
                        src="../polygon-6.svg"
                    />
                    </div>
                </div>
                </div>
                <div className="absolute top-[379px] left-[180px] grid">
                    {sortedUsers.map(user => (
                        <JobCard user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobList;
