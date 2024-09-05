// import { useRef, useState } from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { cn } from "@/lib/utils";

import { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// interface FormData {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   age: number;
//   website?: string;
//   gender: "male" | "female" | "other";
//   terms: boolean;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// const FormWithRef: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [errors, setErrors] = useState<FormErrors>({});

//   const validateForm = (): boolean => {
//     const form = formRef.current;
//     if (!form) return false;

//     const newErrors: FormErrors = {};

//     const username = form.username.value;
//     if (!username) {
//       newErrors.username = "Username is required";
//     } else if (username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//     } else if (username.length > 20) {
//       newErrors.username = "Username must not exceed 20 characters";
//     }

//     const email = form.email.value;
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = "Invalid email address";
//     }

//     const password = form.password.value;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     } else if (!passwordRegex.test(password)) {
//       newErrors.password =
//         "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
//     }

//     const confirmPassword = form.confirmPassword.value;
//     if (!confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (confirmPassword !== password) {
//       newErrors.confirmPassword = "Passwords don't match";
//     }

//     const age = parseInt(form.age.value, 10);
//     if (isNaN(age)) {
//       newErrors.age = "Age is required";
//     } else if (age < 18) {
//       newErrors.age = "You must be at least 18 years old";
//     } else if (age > 120) {
//       newErrors.age = "Invalid age";
//     }

//     const website = form.website.value;
//     const urlRegex = /^https?:\/\/.+\..+$/;
//     if (website && !urlRegex.test(website)) {
//       newErrors.website = "Invalid URL";
//     }

//     const gender = form.gender.value;
//     if (!gender) {
//       newErrors.gender = "Please select a gender";
//     }

//     const terms = form.terms.checked;
//     if (!terms) {
//       newErrors.terms = "You must accept the terms and conditions";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (validateForm()) {
//       const form = formRef.current;
//       if (form) {
//         const formData: FormData = {
//           username: form.username.value,
//           email: form.email.value,
//           password: form.password.value,
//           confirmPassword: form.confirmPassword.value,
//           age: parseInt(form.age.value, 10),
//           website: form.website.value || undefined,
//           gender: form.gender.value as "male" | "female" | "other",
//           terms: form.terms.checked,
//         };
//         console.log(formData);
//       }
//     }
//   };

//   return (
//     <form
//       ref={formRef}
//       onSubmit={handleSubmit}
//       className="p-4 space-y-2 w-full max-w-md border rounded-md"
//     >
//       <div>
//         <Label htmlFor="username">Username</Label>
//         <Input id="username" name="username" type="text" />
//         {errors.username && (
//           <span className="text-xs text-red-500">{errors.username}</span>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="email">Email</Label>
//         <Input id="email" name="email" type="email" />
//         {errors.email && (
//           <span className="text-xs text-red-500">{errors.email}</span>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="password">Password</Label>
//         <Input id="password" name="password" type="password" />
//         {errors.password && (
//           <span className="text-xs text-red-500">{errors.password}</span>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="confirmPassword">Confirm Password</Label>
//         <Input id="confirmPassword" name="confirmPassword" type="password" />
//         {errors.confirmPassword && (
//           <span className="text-xs text-red-500">{errors.confirmPassword}</span>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="age">Age</Label>
//         <Input id="age" name="age" type="number" />
//         {errors.age && (
//           <span className="text-xs text-red-500">{errors.age}</span>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="website">Website (optional)</Label>
//         <Input id="website" name="website" type="url" />
//         {errors.website && (
//           <span className="text-xs text-red-500">{errors.website}</span>
//         )}
//       </div>

//       <div>
//         <Label>Gender</Label>
//         <select name="gender">
//           <option value="">Select gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         {errors.gender && (
//           <span className="text-xs text-red-500">{errors.gender}</span>
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
//             name="terms"
//             type="checkbox"
//             className={cn(
//               errors.terms && "focus-visible:ring-red-500 text-red-500 ",
//               "h-4 w-4"
//             )}
//           />
//           I accept the terms and conditions
//         </Label>
//         {errors.terms && (
//           <span className="text-xs text-red-500">{errors.terms}</span>
//         )}
//       </div>

//       <Button type="submit">Register</Button>
//     </form>
//   );
// };

// export default FormWithRef;

const FormWithRef = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      ref={formRef}
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(formRef?.current!);

        // const data = {
        //   name: formData.get("name"),
        //   email: formData.get("email"),
        //   age: formData.get("age"),
        //   password: formData.get("password"),
        //   confirmPassword: formData.get("confirm-password"),
        // };

        console.log(Object.fromEntries(formData));
      }}
      className="p-4 space-y-2 w-full max-w-md border rounded-md"
    >
      <Input
        ref={nameInputRef}
        name="name"
        placeholder="Enter your name"
        // className="focus-visible:ring-red-500"
      />
      <Input name="email" placeholder="Enter your email" />
      <Input name="age" placeholder="Enter your age" />
      <Input name="password" placeholder="Enter your password" />
      <Input name="confirm-password" placeholder="Confirm your password" />
      {/* <p
        className={cn(" text-blue-500 ", true && "text-red-500")}
        // style={{
        //   background: "red",
        // }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
        natus corporis odio rem doloribus dolor tenetur cumque. At quos nam
        itaque tempora reiciendis tempore assumenda veritatis libero suscipit
        animi.
      </p> */}
      <Button>Submit</Button>
      <Button
        type="button"
        onClick={() => {
          nameInputRef.current?.focus();
        }}
      >
        Focus Name Input
      </Button>
    </form>
  );
};

export default FormWithRef;
