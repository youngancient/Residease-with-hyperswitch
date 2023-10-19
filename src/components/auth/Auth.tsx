import {
  ErrorStyles,
  FormContainerStyle,
  FormLinkStyle,
  FormStyle,
} from "@/styles/ComponentStyles/AuthStyles/AuthStyles";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { ButtonLoader, CheckBox } from "../Icons/DashboardIcons";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { setUser, updateUsers, userSelector } from "@/redux/userSlice";
import { Router, useRouter } from "next/router";

interface IForm {
  email: string;
  password: string;
}

export const LoginForm: FunctionComponent = () => {
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [userLoading, setUserLoading] = useState(false);
  const { allUsers } = useAppSelector(userSelector);
  const [userError, setUserError] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const login = (data: IForm) => {
    setUserLoading(true);
    setTimeout(() => {
      const findUser = allUsers.find(
        (ele) => ele.email === data.email
        
      );
      if (findUser) {
        setUserError(null);
        dispatch(setUser(data));
        router.push("/dashboard");
        reset();
      } else {
        setUserError("Wrong Login Creditials!");
        setUserLoading(false);
      }
    }, 2000);
  };

  return (
    <FormContainerStyle>
      <FormStyle>
        <form onSubmit={handleSubmit(login)}>
          <div className="head">
            <h3>Sign In</h3>
            <p>
              {userError === null ? "Please enter your details." : userError}
            </p>
          </div>
          <div className="form">
            <div className="form-ele">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="sample@gmail.com"
                {...register("email", { required: "Email is required" })}
              />
              <ErrorStyles>{errors?.email && errors.email.message}</ErrorStyles>
            </div>
            <div className="form-ele">
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 8,
                })}
              />
              <ErrorStyles>
                {errors?.password && errors.password.message}
              </ErrorStyles>
              {errors?.password && errors?.password.type === "minLength" && (
                <ErrorStyles>min length is 8</ErrorStyles>
              )}
            </div>
          </div>
          <div className="below">
            <div className="one">
              <div className="remember">
                <CheckBox
                  isSelected={isRemembered}
                  handleClick={() => setIsRemembered(!isRemembered)}
                />
                <p>Remember me</p>
              </div>
              <Link href="#">
                <FormLinkStyle>Forgot password?</FormLinkStyle>
              </Link>
            </div>
            <div className="button">
              <button type="submit">
                {userLoading ? <ButtonLoader /> : "Sign in"}
              </button>
            </div>
            <div className="last">
              <span>Don’t have an account? </span>
              <Link href="/auth/signup">
                <FormLinkStyle>Sign Up</FormLinkStyle>
              </Link>
            </div>
          </div>
        </form>
      </FormStyle>
    </FormContainerStyle>
  );
};

interface ISignupForm extends IForm {
  password2: string;
}

export const SignupForm: FunctionComponent = () => {
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      password2: "",
    },
  });
  const [userLoading, setUserLoading] = useState(false);
  const { allUsers } = useAppSelector(userSelector);
  const [userError, setUserError] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const signup = (data: ISignupForm) => {
    setUserLoading(true);
    setTimeout(() => {
      if (data.password !== data.password2) {
        console.log(data);
        setUserError("Passwords do not match!");
        setUserLoading(false);
      } else {
        const findUser = allUsers.find(
          (ele) => ele.email === data.email
        );
        if (findUser) {
          setUserError("This Email has been used already!");
          setUserLoading(false);
        } else {
          setUserError(null);
          dispatch(updateUsers({email : data.email, password : data.password}));
          router.push("/auth");
          reset();
        }
      }
    }, 2000);
  };

  return (
    <FormContainerStyle>
      <FormStyle>
        <form onSubmit={handleSubmit(signup)}>
          <div className="head">
            <h3>Sign Up</h3>
            <p>{userError === null ? "Please provide details." : userError}</p>
          </div>
          <div className="form">
            <div className="form-ele">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="form-ele">
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 8,
                })}
                
              />
              <ErrorStyles>
                {errors?.password && errors.password.message}
              </ErrorStyles>
              {errors?.password && errors?.password.type === "minLength" && (
                <ErrorStyles>min length is 8</ErrorStyles>
              )}
            </div>
            <div className="form-ele">
              <label htmlFor="pwd">Repeat Password</label>
              <input type="password" {...register("password2", {
                  required: "Password is required",
                  minLength: 8,
                })} />
                <ErrorStyles>
                {errors?.password2 && errors.password2.message}
              </ErrorStyles>
              {errors?.password2 && errors?.password2.type === "minLength" && (
                <ErrorStyles>min length is 8</ErrorStyles>
              )}
            </div>
          </div>
          <div className="below">
            <div className="button">
              <button type="submit">
                {userLoading ? <ButtonLoader /> : "Sign up"}
              </button>
            </div>
            <div className="last">
              <span>Already have an account?</span>
              <Link href="/auth/">
                <FormLinkStyle>Sign In</FormLinkStyle>
              </Link>
            </div>
          </div>
        </form>
      </FormStyle>
    </FormContainerStyle>
  );
};
