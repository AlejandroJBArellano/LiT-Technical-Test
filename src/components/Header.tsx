import React from 'react'

const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[119px] text-lg text-gray-700">
          <div className="absolute top-[119px] left-[0px] bg-white w-[1440px] h-[89px]" />
          <img
            className="absolute top-[42px] left-[180px] w-[60px] h-[60px]"
            alt=""
            src="./LiT-logo.png"
          />
          <div className="absolute top-[5px] left-[1091px] inline-block">
            Become our partner
          </div>
          <div className="absolute top-[5px] left-[995px] inline-block">
            Become our partner
          </div>
          <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[30px]" />
          <div className="absolute top-[29.75px] left-[-0.25px] border-t-[0.5px_solid_#c4c4c4] box-border w-[1440.5px] h-[0.5px]" />
          <div className="absolute top-[55px] left-[574px] flex flex-row items-center justify-start gap-[30px] text-gray-600">
            <div className="relative w-[84px] h-[19px] shrink-0">
              <b className="absolute top-[0px] left-[0px] inline-block">
                Dashboard
              </b>
            </div>
            <div className="relative w-[100px] h-[19px] shrink-0">
              <div className="absolute top-[0px] left-[0px] w-[82px] h-[19px]">
                <b className="absolute top-[0px] left-[0px] inline-block">
                  LiT Recruit
                </b>
              </div>
              <img
                className="absolute top-[8.25px] left-[90.67px] w-[8.66px] h-[3.75px]"
                alt=""
                src="../polygon-4.svg"
              />
            </div>
            <div className="relative w-[52px] h-[19px] shrink-0">
              <b className="absolute top-[0px] left-[0px] inline-block">
                Events
              </b>
            </div>
            <div className="relative w-[84px] h-[19px] shrink-0">
              <b className="absolute top-[0px] left-[0px] inline-block">
                Level up
              </b>
              <img
                className="absolute top-[7.25px] left-[74.67px] w-[8.66px] h-[3.75px]"
                alt=""
                src="../polygon-4.svg"
              />
            </div>
            <b className="relative inline-block">LiT Community</b>
            <img
              className="relative w-[21.01px] h-[20px] shrink-0"
              alt=""
              src="envelope.svg"
            />
            <img
              className="relative w-[50px] h-[40px] shrink-0"
              alt=""
              src="group-19.svg"
            />
          </div>
          <div className="absolute top-[3px] left-[675px] w-[585px] h-[23px] text-base">
            <div className="absolute top-[0px] left-[0px] w-[585px] h-[23px]">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[20px]">
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <div className="relative w-[99px] h-[16px] shrink-0">
                    <img
                      className="absolute top-[7.25px] left-[89.67px] w-[8.66px] h-[3.75px]"
                      alt=""
                      src="../polygon-4.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] inline-block">
                      Get involved
                    </div>
                  </div>
                  <div className="relative w-[154px] h-[16px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] inline-block">{`Founders & Investors`}</div>
                    <img
                      className="absolute top-[7.75px] left-[144.67px] w-[8.66px] h-[3.75px]"
                      alt=""
                      src="../polygon-1.svg"
                    />
                  </div>
                  <div className="relative inline-block">Chapters</div>
                  <div className="relative inline-block">Blog</div>
                  <div className="relative inline-block">Tiendita</div>
                </div>
                <div className="relative w-[89px] h-[23px] shrink-0 overflow-hidden text-white">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3px] bg-pink-100" />
                  <b className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_24.5px)] flex items-center w-[49px]">
                    Donate
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>   

  )
}

export default Header