// import { useForm, SubmitHandler } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Label } from "../ui/label";
// import { cn } from "@/lib/utils";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { Button } from "../ui/button";
// import { DevTool } from "@hookform/devtools";
// import { Input } from "../ui/input";

// type Gender = "male" | "female" | "other";

// // Define the form schema using Zod
// const formSchema = z
//   .object({
//     username: z
//       .string()
//       .min(3, "Username must be at least 3 characters")
//       .max(20, "Username must not exceed 20 characters"),
//     email: z.string().email("Invalid email address"),
//     password: z
//       .string()
//       .min(8, "Password must be at least 8 characters")
//       .regex(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//       ),
//     confirmPassword: z.string(),
//     age: z
//       .number()
//       .min(18, "You must be at least 18 years old")
//       .max(120, "Invalid age"),
//     website: z.string().url("Invalid URL").optional(),
//     gender: z.enum(["male", "female", "other"], {
//       required_error: "Please select a gender",
//     }),
//     terms: z
//       .boolean()
//       .refine(
//         (val) => val === true,
//         "You must accept the terms and conditions"
//       ),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

// type FormData = z.infer<typeof formSchema>;

// const ReactHookFormWithZod: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     control,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     mode: "onBlur",
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//     // Handle form submission
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="p-4 space-y-2 w-full max-w-md border rounded-md"
//     >
//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.username && "text-red-500"
//           )}
//           htmlFor="username"
//         >
//           Username
//         </Label>
//         <Input id="username" {...register("username")} />
//         {errors.username && (
//           <span className="text-xs text-red-500">
//             {errors.username.message}
//           </span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.email && "text-red-500"
//           )}
//           htmlFor="email"
//         >
//           Email
//         </Label>
//         <Input id="email" type="email" {...register("email")} />
//         {errors.email && (
//           <span className="text-xs text-red-500">{errors.email.message}</span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.password && "text-red-500"
//           )}
//           htmlFor="password"
//         >
//           Password
//         </Label>
//         <Input id="password" type="password" {...register("password")} />
//         {errors.password && (
//           <span className="text-xs text-red-500">
//             {errors.password.message}
//           </span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.confirmPassword && "text-red-500"
//           )}
//           htmlFor="confirmPassword"
//         >
//           Confirm Password
//         </Label>
//         <Input
//           id="confirmPassword"
//           type="password"
//           {...register("confirmPassword")}
//         />
//         {errors.confirmPassword && (
//           <span className="text-xs text-red-500">
//             {errors.confirmPassword.message}
//           </span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.age && "text-red-500"
//           )}
//           htmlFor="age"
//         >
//           Age
//         </Label>
//         <Input
//           id="age"
//           type="number"
//           {...register("age", { valueAsNumber: true })}
//         />
//         {errors.age && (
//           <span className="text-xs text-red-500">{errors.age.message}</span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.website && "text-red-500"
//           )}
//           htmlFor="website"
//         >
//           Website (optional)
//         </Label>
//         <Input id="website" type="url" {...register("website")} />
//         {errors.website && (
//           <span className="text-xs text-red-500">{errors.website.message}</span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.gender && "text-red-500"
//           )}
//         >
//           Gender
//         </Label>

//         <Select
//           onValueChange={(value) => {
//             setValue("gender", value as Gender);
//           }}
//         >
//           <SelectTrigger
//             {...register("gender", {
//               required: "Gender is required",
//             })}
//             className={cn(errors.gender && "focus:ring-red-500 text-red-500 ")}
//           >
//             <SelectValue
//               placeholder="Select gender"
//               className={cn(
//                 errors.gender && "focus:ring-red-500 text-red-500 "
//               )}
//             />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="male">Male</SelectItem>
//             <SelectItem value="female">Female</SelectItem>
//             <SelectItem value="other">Other</SelectItem>
//           </SelectContent>
//         </Select>
//         {errors.gender && (
//           <span className="text-xs text-red-500">{errors.gender.message}</span>
//         )}
//       </div>

//       <div>
//         <Label
//           className={cn(
//             "inline-flex items-center gap-2",
//             errors.terms && "text-red-500"
//           )}
//         >
//           <input
//             type="checkbox"
//             className={cn(
//               errors.terms && "focus-visible:ring-red-500 text-red-500 ",
//               "h-4 w-4"
//             )}
//             {...register("terms")}
//           />
//           I accept the terms and conditions
//         </Label>
//         {errors.terms && (
//           <span className="text-xs text-red-500">{errors.terms.message}</span>
//         )}
//       </div>

//       <Button type="submit">Register</Button>
//       <DevTool control={control} />
//     </form>
//   );
// };

// export default ReactHookFormWithZod;

import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  username: z.string().min(20, "asfasdf"),
  email: z.string().email("email hona chahiye"),
  password: z.string(),
  confirmPassword: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const ReactHookFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <form
      onSubmit={handleSubmit((value) => {
        console.log(value);
      })}
      className="p-4 space-y-2 w-full max-w-md border rounded-md"
    >
      <div>
        <Input placeholder="Enter your username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <Input placeholder="Enter your email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReactHookFormWithZod;
