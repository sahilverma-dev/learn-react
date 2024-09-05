import { useForm, SubmitHandler } from "react-hook-form";

import { DevTool } from "@hookform/devtools";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { cn } from "@/lib/utils";

type Gender = "male" | "female" | "other";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  website?: string;
  gender: Gender;
  terms: boolean;
}

const ReactHookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-2 w-full max-w-md border rounded-md"
    >
      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.username && "text-red-500"
          )}
          htmlFor="username"
        >
          Username
        </Label>
        <Input
          id="username"
          type="text"
          autoComplete="username"
          placeholder="Enter your username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username must not exceed 20 characters",
            },
          })}
          className={cn(
            errors.username && "focus-visible:ring-red-500 text-red-500 "
          )}
        />
        {errors.username && (
          <span className="text-xs text-red-500">
            {errors.username.message}
          </span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.email && "text-red-500"
          )}
          htmlFor="email"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={cn(
            errors.email && "focus-visible:ring-red-500 text-red-500 "
          )}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.password && "text-red-500"
          )}
          htmlFor="password"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          })}
          className={cn(
            errors.password && "focus-visible:ring-red-500 text-red-500 "
          )}
        />
        {errors.password && (
          <span className="text-xs text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.confirmPassword && "text-red-500"
          )}
          htmlFor="confirmPassword"
        >
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          autoComplete="current-password"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords don't match",
          })}
          className={cn(
            errors.confirmPassword && "focus-visible:ring-red-500 text-red-500 "
          )}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.age && "text-red-500"
          )}
          htmlFor="age"
        >
          Age
        </Label>
        <Input
          id="age"
          type="number"
          placeholder="Enter your age"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "You must be at least 18 years old" },
            max: { value: 120, message: "Invalid age" },
          })}
          className={cn(
            errors.age && "focus-visible:ring-red-500 text-red-500 "
          )}
        />
        {errors.age && (
          <span className="text-xs text-red-500">{errors.age.message}</span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.website && "text-red-500"
          )}
          htmlFor="website"
        >
          Website (optional)
        </Label>
        <Input
          id="website"
          type="url"
          placeholder="https://example.com"
          {...register("website", {
            pattern: {
              value: /^https?:\/\/.+\..+$/,
              message: "Invalid URL",
            },
          })}
          className={cn(
            errors.website && "focus-visible:ring-red-500 text-red-500 "
          )}
        />
        {errors.website && (
          <span className="text-xs text-red-500">{errors.website.message}</span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.gender && "text-red-500"
          )}
        >
          Gender
        </Label>
        <Select
          onValueChange={(value) => {
            setValue("gender", value as Gender);
          }}
        >
          <SelectTrigger
            {...register("gender", {
              required: "Gender is required",
            })}
            className={cn(errors.gender && "focus:ring-red-500 text-red-500 ")}
          >
            <SelectValue
              placeholder="Select gender"
              className={cn(
                errors.gender && "focus:ring-red-500 text-red-500 "
              )}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.gender && (
          <span className="text-xs text-red-500">{errors.gender.message}</span>
        )}
      </div>

      <div>
        <Label
          className={cn(
            "inline-flex items-center gap-2",
            errors.terms && "text-red-500"
          )}
        >
          <input
            type="checkbox"
            className={cn(
              errors.terms && "focus-visible:ring-red-500 text-red-500 ",
              "h-4 w-4"
            )}
            {...register("terms", {
              required: "You must accept the terms and conditions",
            })}
          />
          I accept the terms and conditions
        </Label>
        {errors.terms && (
          <p className="text-xs text-red-500">{errors.terms.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button type="submit">Register</Button>
        <Button
          type="button"
          onClick={() => {
            setFocus("gender");
          }}
        >
          Focus on gender
        </Button>
      </div>
      <DevTool control={control} />
    </form>
  );
};

export default ReactHookForm;
