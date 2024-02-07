import React from "react";

import { Img, Input, Line, Text } from "components";

const RegistrationformOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-poppins h-[1018px] mx-auto relative w-full">
        <div className="bg-gradient  flex flex-col h-full items-start justify-end m-auto p-[88px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[47px] mt-1.5 w-2/5 md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtPoppinsBold48"
            >
              Sign Up
            </Text>
            <div className="flex flex-col gap-[47px] items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[34px] items-center justify-start w-[44%] md:w-full">
                  <Line className="bg-black-900 h-[3px] mb-1.5 mt-3.5 w-[37%]" />
                  <Text
                    className="text-base text-pink-100 tracking-[0.48px]"
                    size="txtPoppinsBold16"
                  >
                    Sign up with
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between mt-16 w-full">
                  <div className="border border-gray-200 border-solid flex sm:flex-1 flex-col items-center justify-start p-[11px] rounded-md w-[49%] sm:w-full">
                    <div className="flex flex-row gap-[13px] items-start justify-center w-[76%] md:w-full">
                      <Img
                        className="h-[25px] md:h-auto object-cover w-[25px]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                      <Text
                        className="mt-1 text-gray-800 text-xs"
                        size="txtPoppinsMedium12"
                      >
                        Continue with Google
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-200 border-solid flex sm:flex-1 flex-col items-center justify-start p-3 rounded-md w-[49%] sm:w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-start w-[84%] md:w-full">
                      <Img
                        className="h-6 md:h-auto object-cover w-6"
                        src="images/img_image3.png"
                        alt="imageThree"
                      />
                      <Text
                        className="mt-0.5 text-gray-800 text-xs"
                        size="txtPoppinsMedium12"
                      >
                        Continue with Facebook
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[226px] mt-[43px] text-black-900 text-xl tracking-[0.60px]"
                  size="txtPoppinsBold20"
                >
                  or
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-3.5 items-end justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-3.5 items-start justify-start sm:mt-0 mt-[5px] w-[49%] sm:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Name
                        </Text>
                        <Input
                          name="groupSeventeen"
                          placeholder="abc"
                          className="p-0 placeholder:text-black-900_7e text-left text-sm tracking-[0.25px] w-full"
                          wrapClassName="border border-gray-200 border-solid w-full"
                          shape="round"
                          color="gray_50"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[49%] sm:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Email
                        </Text>
                        <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col items-start justify-end p-3 rounded-[10px] w-full">
                          <Text
                            className="ml-1 md:ml-[0] mt-0.5 text-black-900_7e text-sm tracking-[0.25px]"
                            size="txtPoppinsRegular14Black9007e"
                          >
                            abc@abc.com
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Password
                      </Text>
                      <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                        <Text
                          className="mb-[7px] md:ml-[0] ml-[7px] text-black-900_7e text-sm tracking-[0.25px]"
                          size="txtPoppinsRegular14Black9007e"
                        >
                          **********
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start mt-7 w-[81%] md:w-full">
                  <div className="bg-gray-50 border border-gray-300 border-solid h-[22px] mb-8 sm:mt-0 mt-[3px] rounded-md w-[22px]"></div>
                  <Text
                    className="leading-[22.00px] text-black-900 text-sm tracking-[0.25px] w-[90%] sm:w-full"
                    size="txtPoppinsRegular14"
                  >
                    I’ve read and agree with terms of service and our privecy
                    policy
                  </Text>
                </div>
                <div className="bg-pink-100 flex flex-col h-20 items-center justify-start mt-[37px] p-7 sm:px-5 rounded-[35px] shadow-bs w-20">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
                <Text
                  className="mt-[35px] text-base text-black-900 tracking-[0.48px]"
                  size="txtPoppinsLight16"
                >
                  <span className="text-black-900 font-poppins text-left font-normal">
                    Already have an account ?{" "}
                  </span>
                  <span className="text-black-900 font-poppins text-left font-light">
                    {" "}
                  </span>
                  <span className="text-pink-100 font-poppins text-left font-medium">
                    Sign in
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute bottom-[0] h-[881px] object-cover right-[0]"
          src="images/img_layer12.png"
          alt="layerTwelve"
        />
      </div>
    </>
  );
};

export default RegistrationformOnePage;
