import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const RegistrationformThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1341px] mx-auto md:px-5 w-full">
          <div className="h-[1024px] relative w-3/5 md:w-full">
            <Img
              className="h-[1024px] m-auto object-cover w-full"
              src="images/img_rectangle11.png"
              alt="rectangleEleven"
            />
            <div className="absolute bottom-[3%] flex flex-col items-start justify-start left-[8%] w-3/4">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[0.80px]"
                size="txtPoppinsBold40"
              >
                abc.com
              </Text>
              <Text
                className="mt-[273px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
                size="txtPoppinsMedium32"
              >
                abc.com is the best place to find remote talent. We’ve been
                super impress by the quality of applicants.{" "}
              </Text>
              <div className="flex flex-col items-start justify-start mt-[311px]">
                <Text
                  className="text-white-A700 text-xl tracking-[0.40px]"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  Madhushan sasanka
                </Text>
                <Text
                  className="text-base text-white-A700 tracking-[0.32px]"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  CEO, abc.com
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[199px] w-[33%] md:w-full">
            <div className="flex flex-col items-start justify-start">
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
                Let’s get started with your 30 days free trial
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start mt-[66px] w-full">
              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 tracking-[0.32px]"
                    size="txtPoppinsRegular16"
                  >
                    Name
                  </Text>
                  <Line className="bg-black-900 h-px w-full" />
                </div>
                <Input
                  name="groupFortyTwo"
                  placeholder="Email"
                  className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-base text-left tracking-[0.32px] w-full"
                  wrapClassName="pr-[35px] w-full"
                  type="email"
                ></Input>
                <Input
                  name="groupFortyOne"
                  placeholder="Password"
                  className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-base text-left tracking-[0.32px] w-full"
                  wrapClassName="pr-[35px] w-full"
                  type="password"
                ></Input>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-[99%] md:w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[435px] sm:min-w-full text-center text-xl tracking-[0.40px]"
                  shape="round"
                >
                  Create Account
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[435px] sm:min-w-full"
                  leftIcon={
                    <div className="mt-px mb-1 mr-[18px] w-[23px] bg-black-900">
                      <Img src="images/img_contrast.svg" alt="contrast" />
                    </div>
                  }
                  shape="round"
                  color="blue_gray_400"
                  variant="outline"
                >
                  <div className="font-medium leading-[normal] text-left text-xl tracking-[0.40px]">
                    Sign up with Google
                  </div>
                </Button>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[66px] mt-[156px] text-black-900 text-xl tracking-[0.40px]"
              size="txtPoppinsSemiBold20"
            >
              <span className="text-black-900 font-poppins text-left text-base font-normal">
                Already have an account?{" "}
              </span>
              <span className="text-black-900 font-poppins text-left font-semibold">
                {" "}
              </span>
              <span className="text-light_blue-A200 font-poppins text-left font-medium">
                Sign in
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationformThreePage;
