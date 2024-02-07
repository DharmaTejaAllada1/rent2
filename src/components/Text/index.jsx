import React from "react";

const sizeClasses = {
  txtPoppinsBold48: "font-bold font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsRegular16Bluegray400: "font-normal font-poppins",
  txtPoppinsLight16Bluegray400: "font-light font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsMedium32Black900: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular14Black9007e: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
