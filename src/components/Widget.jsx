import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import tailwindStyles from "../index.css?inline";
function Widget() {
  const [raiting, setRaiting] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const onSelectStar = (index) => {
    setRaiting(index + 1);
  };

  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      feedback: form.feedback.value,
      raiting,
    };
    setSubmitting(true);
    console.log("submit");
    console.log("data", data);
  };
  return (
    <>
      <div className="widget fixed bottom-4 z-50 right-4">
        <Popover>
          <PopoverTrigger>
            <Button className="rounded-full shadow-lg hover:scale-105">
              <MessageCircle size={24} className="mr-2" />
              FeedBack
            </Button>
          </PopoverTrigger>
          <PopoverContent className="widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md">
            <style>{tailwindStyles}</style>
            {submitting ? (
              <div>
                <h1 className="text-lg font-bold">
                  Thank you for your feedback
                </h1>
                <p className="text-lg mt-4 ">
                  We appreciate you taking the time to send us your feedback.
                </p>
              </div>
            ) : (
              <div>
                <h1 className="text-lg font-bold">Send us your feedback</h1>
                <form className="space-y-2" onSubmit={submit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="text-black placeholder-gray-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">FeedBack</Label>
                    <Textarea
                      id="feedback"
                      className="min-h-[100px]"
                      placeholder="Tell us what you think"
                    ></Textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          onClick={() => onSelectStar(index)}
                          size={24}
                          className={` size-5 cursor-pointer ${
                            raiting > index
                              ? "fill-primary"
                              : "fill-muted stroke-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      type="submit"
                      className="rounded-full shadow-lg hover:scale-105"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

export default Widget;
