import { MinimalTiptapEditor } from "./components/RichTextEditor";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlogMutation } from "./hooks/useCreateBlogMutation";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title is too long" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(100, { message: "Description is too long" }),
  content: z.string().min(1, { message: "Content is required" }),
});

const New = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isPending, mutateAsync } = useCreateBlogMutation({
    onSuccess: (data) => {
      console.log(data);
      toast.success("Blog post created successfully!");
      navigate(`/blog/${data.id}`);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { title, description, content } = values;
    mutateAsync({
      title,
      description,
      content,
      user: {
        uid: user?.uid || "",
        email: user?.email || "",
        displayName: user?.displayName || "",
        photoURL: user?.photoURL || "",
      },
    });
  }

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            disabled={isPending}
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your title" {...field} />
                </FormControl>
                <FormDescription>Title of the blog post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isPending}
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    cols={30}
                    placeholder="Enter your description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Short description of the blog post
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isPending}
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="content">Content</FormLabel>
                <FormControl>
                  <MinimalTiptapEditor
                    id={"content"}
                    value={field.value}
                    placeholder="Enter your content"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="gap-2" disabled={isPending}>
            {isPending && <LoaderIcon className="animate-spin" size={18} />}
            {isPending ? "Creating..." : "Create Blog"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default New;
