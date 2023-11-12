import React from "react";
import background from "../assets/images/auth-img.jpg";
import { Form, Input } from "antd";
import CustomButton from "components/button/CustomButton";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import { useLoginRequest } from "services/queries/auth";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const { mutate, isLoading } = useLoginRequest();
  const handleSubmit = async (values: any) => {
    mutate(values);
  };

  return (
    <div className="flex">
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hidden lg:block md:w-[70%] w-[0]"
      ></div>
      <div className="flex justify-center md:w-[30%] w-[100%] items-center flex-col md:px-9 px-4">
        <div className="md:mb-[10px] mt-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logo} alt="logo" className="h-7 w-7" />
            <h2 className="font-semibold text-[#000000]">TASK MANAGER</h2>
          </div>
          <h1 className="text-center text-[1.5rem] font-semibold">
            Welcome back
          </h1>
        </div>
        <div>
          <Form onFinish={handleSubmit}>
            <div className="mb-2 mt-2 md:w-[330px] w-[100%]">
              <p className="mb-1">Email</p>
              <Form.Item
                name={"email"}
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  disabled={false}
                  className="form-field__input"
                  placeholder="Email"
                  type="email"
                />
              </Form.Item>
            </div>
            <div className="mb-2 mt-2 md:w-[330px] w-[100%]">
              <p className="mb-1">Password</p>
              <Form.Item
                name={"password"}
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input.Password
                  className="form-field__input w-[800px]"
                  placeholder="Password"
                  type="password"
                  iconRender={(visible) =>
                    visible ? (
                      <BsEye className="cursor-pointer" />
                    ) : (
                      <BsEyeSlash className="cursor-pointer" />
                    )
                  }
                />
              </Form.Item>
            </div>
            <div className="grid place-items-center mt-[50px]">
              <CustomButton
                styles={{
                  width: "100%",
                }}
                text={"Login"}
                loading={isLoading}
              />
            </div>
          </Form>

          <div className="grid place-items-center mt-9">
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-[#4040f7]">
                sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
