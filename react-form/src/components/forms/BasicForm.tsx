import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface FormState {
  name: string;
  email: string;
}

const BasicForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
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
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BasicForm;
