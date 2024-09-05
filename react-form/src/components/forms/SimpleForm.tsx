import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SimpleForm = () => {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name);
      }}
      className="p-4 space-y-2 w-full max-w-md border rounded-md"
    >
      <Input
        value={name}
        autoFocus
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <div className="flex gap-2">
        <Button>Submit</Button>
        <Button variant={"secondary"} type="button" onClick={() => setName("")}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SimpleForm;
