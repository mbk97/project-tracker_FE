import React from "react";
import background from "../assets/images/auth-img.jpg";
import { Form } from "antd";
import CustomButton from "components/button/CustomButton";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};

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
          <h1 className="text-center text-[1.5rem] font-semibold">
            Welcome back
          </h1>
          <p className="text-center w-[320px] mt-4">
            Enter your Credentials to access your account
          </p>
        </div>
        <div>
          <Form onFinish={handleSubmit}>
            <div className="mb-2 mt-2 md:w-[330px] w-[100%]">
              <p className="mb-1">Email</p>
              <Form.Item
                name={"email"}
                rules={[{ required: true, message: "Email is required" }]}
              >
                <input
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
                <input
                  disabled={false}
                  className="form-field__input"
                  placeholder="Password"
                  type="password"
                />
              </Form.Item>
            </div>
            <div className="grid place-items-center mt-[50px]">
              <CustomButton
                styles={{
                  width: "100%",
                }}
                text={"Login"}
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
