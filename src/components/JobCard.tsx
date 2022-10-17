import React from 'react'
import { User } from '../types/User'
import { FunctionComponent } from 'react';
import { strSpreaded } from '../utils/strSpreaded';
import { Perk } from '../types/Perk';
import { perksSre } from '../utils/perksSrc';

const JobCard: FunctionComponent<{user: User}> = ({user}) => {
  return (
    <div className="relative w-[1081px] h-[120px]">
      <div className="absolute h-[99.17%] top-[0%] right-[0px] bottom-[0.83%] bg-white w-[1080px]" />
      <div className="absolute h-[50%] w-[5.55%] top-[25%] right-[92.51%] bottom-[25%] left-[1.94%] bg-gray-300" />
      <a href={`/${user._id.$oid}`} className="absolute cursor-pointer h-[13.33%] w-[24.98%] top-[26.67%] right-[65.68%] bottom-[60%] left-[9.34%] inline-block text-pink-200">
        <>
          {strSpreaded(user["Job Title"], 35)}
        </>
      </a>
      <div className="absolute h-[13.33%] w-full top-[42.5%] right-[81.13%] bottom-[44.17%] left-[9.34%] inline-block">
          {user["Company Name"]}
      </div>
      <div className="absolute h-[11.67%] w-[9.34%] top-[63.33%] right-[81.31%] bottom-[25%] left-[9.34%] text-sm inline-block">
          {user.Time}
      </div>
      <div className="absolute h-[50%] w-[10%] top-[28.33%] right-[51.71%] bottom-[21.67%] left-[40.15%] text-gray-700">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[21.59%] leading-[20px] inline-block">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
              {user["Job Type"]}
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px] block w-full">
              {strSpreaded(user["Location Full"], 15)}
          </p>
          <p className="m-[0]">{user.Seniority}</p>
          </div>
          <img
          className="absolute h-[25%]  top-[5%] right-[82.95%] bottom-[70%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="ellipse-4.png"
          />
          <img
          className="absolute h-[25%]  top-[38.33%] right-[82.95%] bottom-[36.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="ellipse-4.png"
          />
          <img
          className="absolute h-[25%]  top-[71.67%] right-[82.95%] bottom-[3.33%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="ellipse-4.png"
          />
      </div>
      <div className="absolute h-[0.83%] w-full top-[97.92%] right-[-0.05%] bottom-[1.25%] left-[0.05%] border-t-[1px_solid_#c4c4c4] box-border" />
      <div className="absolute h-[48.33%] top-[24.17%] right-[21px] bottom-[27.5%] w-[252px]">
          <div className="absolute h-full top-[0%] right-[0px] bottom-[0%] flex flex-row items-start justify-start gap-[15px]">
              {user["Perks (coming soon)"]?.split(" ;").map(perk => perk && (
                  <img
                      className="relative w-[54px] h-[58px] shrink-0"
                      alt=""
                      src={perksSre(perk as Perk)}
                  />
              ))}
          </div>
      </div>
  </div>
  )
}

export default JobCard