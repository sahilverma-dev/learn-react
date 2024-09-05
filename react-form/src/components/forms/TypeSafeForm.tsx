import { useState, FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface FormData {
  name: string;
  email: string;
  age: number;
}

interface FormErrors {
  name?: string;
  email?: string;
  age?: string;
}

const TypeSafeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: 0,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [submitResult, setSubmitResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "age" ? parseInt(value) || 0 : value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.age <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    if (validateForm()) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitResult("Form submitted successfully!");
        console.log(formData);
      } catch (error) {
        setSubmitResult("An error occurred while submitting the form.");
      }
    } else {
      setSubmitResult("Please correct the errors in the form.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-2 w-full max-w-md border rounded-md"
    >
      <div>
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email}</span>
        )}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <Input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && (
          <span className="text-sm text-red-500">{errors.age}</span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>

      {submitResult && <div>{submitResult}</div>}
    </form>
  );
};

export default TypeSafeForm;
