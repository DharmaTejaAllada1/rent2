import React from "react";

import { Img, Text } from "components";

const RegistrationformFourPage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-poppins gap-[13px] justify-end mx-auto sm:pr-5 pr-[34px] py-[34px] w-full">
        <div className="h-[897px] md:h-[899px] mr-[55px] mt-[19px] md:px-5 relative w-[97%] md:w-full">
          <Img
            className="absolute h-[880px] inset-y-[0] left-[0] my-auto object-cover w-[54%]"
            src="images/img_willowymandel.png"
            alt="willowymandel"
          />
          <div className="absolute flex flex-col items-start justify-start right-[20%] top-[16%]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.64px]"
              size="txtPoppinsMedium32Black900"
            >
              Create an account
            </Text>
            <Text
              className="mt-0.5 text-base text-blue_gray-400 tracking-[0.32px]"
              size="txtPoppinsLight16Bluegray400"
            >
              Share your thoughts with the world from today{" "}
            </Text>
          </div>
          <Text
            className="absolute right-[37%] text-base text-blue_gray-400 top-[37%] tracking-[0.32px]"
            size="txtPoppinsRegular16Bluegray400"
          >
            Continue with........
          </Text>
          <Text
            className="absolute bottom-[21%] right-[26%] text-black-900 text-xl tracking-[0.40px]"
            size="txtPoppinsSemiBold20"
          >
            <span className="text-black-900 font-poppins text-left text-base font-normal">
              Already have an account?{" "}
            </span>
            <span className="text-black-900 font-poppins text-left font-semibold">
              {" "}
            </span>
            <span className="text-pink-300 font-poppins text-left font-medium">
              Sign in
            </span>
          </Text>
          <Text
            className="absolute left-[5%] sm:text-4xl md:text-[38px] text-[40px] text-black-900 top-[0] tracking-[0.80px]"
            size="txtPoppinsSemiBold40"
          >
            abc.com
          </Text>
          <div className="absolute bottom-[31%] flex md:flex-col flex-row md:gap-10 items-center justify-between right-[0] w-[49%]">
            <div className="border-2 border-pink-300 border-solid flex flex-col h-[200px] items-center justify-center p-[49px] md:px-10 sm:px-5 rounded-[10px] w-[200px]">
              <div className="flex flex-col gap-[25px] items-center justify-start my-1.5 w-full">
                <Img
                  className="h-[34px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Text
                  className="text-black-900 text-xl tracking-[0.40px]"
                  size="txtPoppinsMedium20"
                >
                  Facebook
                </Text>
              </div>
            </div>
            <div className="border border-blue_gray-200 border-solid flex flex-col h-[200px] items-center justify-end p-[53px] md:px-10 sm:px-5 rounded-[10px] w-[200px]">
              <div className="flex flex-col gap-[29px] items-center justify-start mt-0.5 w-4/5 md:w-full">
                <Img
                  className="h-[31px] w-[30px]"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Text
                  className="text-black-900 text-xl tracking-[0.40px]"
                  size="txtPoppinsMedium20"
                >
                  Google
                </Text>
              </div>
            </div>
            <div className="border border-blue_gray-200 border-solid flex flex-col h-[200px] items-center justify-center p-[26px] sm:px-5 rounded-[10px] w-[200px]">
              <div className="flex flex-col gap-[25px] items-center justify-start my-[29px] w-full">
                <Img
                  className="h-[34px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-black-900 text-xl tracking-[0.40px]"
                  size="txtPoppinsMedium20"
                >
                  Email address
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mr-[55px] md:px-5 px-[87px]">
          <Text
            className="text-base text-blue_gray-400 tracking-[0.32px]"
            size="txtPoppinsRegular16Bluegray400"
          >
            <span className="text-blue_gray-400 font-poppins text-left font-normal">
              By Register you agree with{" "}
            </span>
            <span className="text-pink-300 font-poppins text-left font-normal">
              terms and conditions
            </span>
            <span className="text-blue_gray-400 font-poppins text-left font-normal">
              {" "}
              and{" "}
            </span>
            <span className="text-pink-300 font-poppins text-left font-normal">
              privercy policy
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default RegistrationformFourPage;
