import { Form, Input } from "antd";
import background from "../assets/images/auth-img.jpg";
import CustomButton from "components/button/CustomButton";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import { useRegisterRequest } from "services/queries/auth";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useToast } from "hooks/toast";

const Signup = () => {
  const { mutate, isLoading } = useRegisterRequest();
  const { toastError } = useToast();
  const handleSubmit = async (values: any) => {
    console.log(values.password !== values.confirm_password);
    if (values.password !== values.confirm_password) {
      toastError("Passwords do not match");
      return;
    } else {
      mutate(values);
    }
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

      <div
        className="flex justify-center md:w-[30%] w-[100%] items-center flex-col 
      md:px-9 px-4"
      >
        <div className="md:mb-[10px] ">
          <div className="flex gap-3 mb-6">
            <img src={logo} alt="logo" className="h-7 w-7" />
            <h2 className="font-semibold text-[#000000]">TASK MANAGER</h2>
          </div>
          <h1 className="text-center text-[1.5rem] font-semibold">
            Get started
          </h1>
        </div>
        <div>
          <Form onFinish={handleSubmit}>
            <div className="mb-2 md:w-[330px] w-[100%]">
              <p className="mb-1">Name</p>
              <Form.Item
                name={"name"}
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input
                  disabled={false}
                  className="form-field__input"
                  placeholder="Full name"
                />
              </Form.Item>
            </div>
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
            <div className="mb-2 mt-2 md:w-[330px] w-[100%]">
              <p className="mb-1">Confirm password</p>
              <Form.Item
                name={"confirm_password"}
                rules={[{ required: true, message: "Confirm your password" }]}
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
                text={"Sign up"}
                loading={isLoading}
              />
            </div>
          </Form>
          <div className="grid place-items-center mt-9">
            <p>
              Already have an account?{" "}
              <Link to={"/"} className="text-[#4040f7]">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
