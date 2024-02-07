import React from "react";

import { Button, Img, Line, List, Text } from "components";

const RegistrationformTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[113px] w-full">
        <div className="flex flex-col items-center justify-start w-[43%] md:w-full">
          <Text
            className="text-black-900 text-xl tracking-[0.40px]"
            size="txtPoppinsRegular20"
          >
            Sign up to
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[0.80px]"
            size="txtPoppinsSemiBold40"
          >
            abc.com
          </Text>
          <Text
            className="mt-[3px] text-base text-blue_gray-400 tracking-[0.32px]"
            size="txtPoppinsLight16Bluegray400"
          >
            Are you looking for a remote job or hireing remote talent?{" "}
          </Text>
          <div className="flex flex-col md:gap-10 gap-[86px] items-center justify-start mt-[99px] w-full">
            <List
              className="flex flex-col gap-7 items-center w-full"
              orientation="vertical"
            >
              <div className="border border-gray-300_01 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 p-2.5 rounded-[15px] w-full">
                <div className="h-[45px] relative w-[19%] sm:w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                      <Img
                        className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                        src="images/img_ellipse3.png"
                        alt="ellipseThree"
                      />
                      <Img
                        className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                        src="images/img_ellipse5.png"
                        alt="ellipseFive"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[45px] inset-[0] justify-center m-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse4.png"
                    alt="ellipseFour"
                  />
                </div>
                <div className="flex flex-col items-start justify-start ml-5 sm:ml-[0] sm:mt-0 my-1">
                  <Text
                    className="text-black-900 text-xl tracking-[0.40px]"
                    size="txtPoppinsSemiBold20"
                  >
                    I’m a remote worker
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-black-900 tracking-[0.32px]"
                    size="txtPoppinsLight16"
                  >
                    I’m an employee looking for a remote job{" "}
                  </Text>
                </div>
                <div className="border border-gray-300_01 border-solid h-[25px] sm:ml-[0] ml-[46px] mr-0.5 rounded-[12px] w-[25px]"></div>
              </div>
              <div className="border-2 border-black-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 p-2.5 rounded-[15px] w-full">
                <div className="md:h-14 h-[45px] sm:mt-0 mt-[11px] relative w-[19%] sm:w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                      <Img
                        className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                        src="images/img_ellipse3_35x35.png"
                        alt="ellipseThree"
                      />
                      <Img
                        className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                        src="images/img_ellipse5_35x35.png"
                        alt="ellipseFive"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[45px] inset-[0] justify-center m-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse4_45x45.png"
                    alt="ellipseFour"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mb-[3px] ml-5 sm:ml-[0] sm:mt-0 mt-[7px]">
                  <Text
                    className="text-black-900 text-xl tracking-[0.40px]"
                    size="txtPoppinsSemiBold20"
                  >
                    I want to hire employees
                  </Text>
                  <Text
                    className="text-base text-black-900 tracking-[0.32px]"
                    size="txtPoppinsLight16"
                  >
                    I’m on employer hiring remote talent{" "}
                  </Text>
                </div>
                <Button
                  className="flex h-[25px] items-center justify-center mb-[41px] sm:ml-[0] ml-[84px] mr-0.5 rounded-[12px] w-[25px]"
                  size="xs"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark" />
                </Button>
              </div>
            </List>
            <Text
              className="text-black-900 text-xl tracking-[0.40px]"
              size="txtPoppinsSemiBold20"
            >
              <span className="text-black-900 font-poppins text-left text-base font-normal">
                Already have an account?{" "}
              </span>
              <span className="text-black-900 font-poppins text-left font-semibold">
                {" "}
              </span>
              <span className="text-black-900 font-poppins text-left font-medium">
                Sign in
              </span>
            </Text>
          </div>
        </div>
        <div className="h-[1024px] relative w-[49%] md:w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_rectangle8.png"
            alt="rectangleEight"
          />
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[17%] w-[78%]">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
              size="txtPoppinsSemiBold24"
            >
              abc.com is the best place to find remote talent. We’ve been super
              impress by the quality of applicants.{" "}
            </Text>
            <div className="flex flex-row gap-[11px] items-center justify-start mt-[47px] w-[43%] md:w-full">
              <Line className="bg-black-900 h-px my-[11px] w-[12%]" />
              <Text
                className="text-base text-black-900 tracking-[0.32px]"
                size="txtPoppinsRegular16"
              >
                Madhushan sasanka
              </Text>
            </div>
            <Text
              className="mt-0.5 text-base text-blue_gray-400_01 tracking-[0.32px]"
              size="txtPoppinsMedium16"
            >
              CEO, abc.com
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationformTwoPage;
