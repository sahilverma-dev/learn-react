import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// components

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { useAddCommentMutation } from "../hooks/useAddCommentMutation";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  comment: z
    .string()
    .min(1, { message: "Comment is required" })
    .max(100, { message: "Comment is too long" }),
});

interface ICommentFormProps {
  id: string;
  onCancel: () => void;
}

const CommentForm: React.FC<ICommentFormProps> = ({ id, onCancel }) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const { mutateAsync, isPending } = useAddCommentMutation({
    onSuccess: (data) => {
      console.log(data);
      toast.success("Comment added successfully");
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { comment } = values;
    mutateAsync({
      id,
      comment,
      user: {
        uid: user?.uid || "",
        email: user?.email || "",
        displayName: user?.displayName || "",
        photoURL: user?.photoURL || "",
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 border rounded-md p-4"
      >
        <FormField
          disabled={isPending}
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  cols={30}
                  placeholder="Enter your comment"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Comment must be between 1 and 100 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 justify-end">
          <Button type="submit" className="gap-2" disabled={isPending}>
            {isPending && <LoaderIcon className="animate-spin" size={18} />}
            {isPending ? "Commenting..." : "Comment"}
          </Button>
          <Button variant={"destructive"} onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CommentForm;
