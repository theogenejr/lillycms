"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PostMetadata } from "../editor/PostMetadata";
import EditorY from "../editor/editor-y";

export default function NewPostComponent() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <div className="mb-4">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="content">Content</Label>
            <EditorY />
          </div>
        </div>
        <div className="w-full lg:w-64 lg:sticky lg:top-4 self-start">
          <PostMetadata />
          <Button type="submit" className="w-full mt-4">
            Save Post
          </Button>
        </div>
      </form>
    </div>
  );
}
