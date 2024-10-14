"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TipTapEditor from "@/components/editor/TipTapEditor";
import NovelEditor from "@/components/editor/NovelEditor";
import { PostMetadata } from "../editor/PostMetadata";

export default function NewPostComponent() {
  const [editorType, setEditorType] = useState<"tiptap" | "novel">("tiptap");
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
            <Tabs
              value={editorType}
              onValueChange={(value) =>
                setEditorType(value as "tiptap" | "novel")
              }>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tiptap">TipTap Editor</TabsTrigger>
                <TabsTrigger value="novel">Novel Editor</TabsTrigger>
              </TabsList>
              <TabsContent value="tiptap">
                <TipTapEditor />
              </TabsContent>
              <TabsContent value="novel">
                <NovelEditor />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="w-full lg:w-64">
          <PostMetadata />
          <Button type="submit" className="w-full mt-4">
            Save Post
          </Button>
        </div>
      </form>
    </div>
  );
}
