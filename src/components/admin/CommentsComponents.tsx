"use client";

import { useState } from "react";
import { Trash2, MessageCirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Comment = {
  id: string;
  author: string;
  content: string;
  postTitle: string;
  createdAt: string;
  status: "approved" | "pending" | "spam";
};

const initialComments: Comment[] = [
  {
    id: "1",
    author: "John Doe",
    content: "Great article! Very informative.",
    postTitle: "10 Tips for Better Productivity",
    createdAt: "2023-05-15T10:30:00Z",
    status: "approved",
  },
  {
    id: "2",
    author: "Jane Smith",
    content: "I disagree with point number 3. Here's why...",
    postTitle: "Controversial Opinion Piece",
    createdAt: "2023-05-14T15:45:00Z",
    status: "pending",
  },
  {
    id: "3",
    author: "Spam Bot",
    content: "Check out these amazing deals!",
    postTitle: "How to Spot Spam Comments",
    createdAt: "2023-05-13T08:15:00Z",
    status: "spam",
  },
];

export default function CommentsComponent() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [filter, setFilter] = useState<"all" | "approved" | "pending" | "spam">(
    "all"
  );
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);
  const [newComment, setNewComment] = useState<
    Omit<Comment, "id" | "createdAt" | "status">
  >({
    author: "",
    content: "",
    postTitle: "",
  });
  const [commentToDelete, setCommentToDelete] = useState<Comment | null>(null);

  const filteredComments =
    filter === "all"
      ? comments
      : comments.filter((comment) => comment.status === filter);

  const handleAddComment = () => {
    const id = (comments.length + 1).toString();
    const createdAt = new Date().toISOString();
    setComments([
      ...comments,
      { ...newComment, id, createdAt, status: "pending" },
    ]);
    setNewComment({ author: "", content: "", postTitle: "" });
    setIsAddCommentOpen(false);
  };

  const handleDeleteComment = () => {
    if (commentToDelete) {
      setComments(
        comments.filter((comment) => comment.id !== commentToDelete.id)
      );
      setCommentToDelete(null);
    }
  };

  const handleUpdateStatus = (id: string, newStatus: Comment["status"]) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, status: newStatus } : comment
      )
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-5">Comments</h1>
      <div className="flex justify-between mb-5">
        <Select
          value={filter}
          onValueChange={(value: "all" | "approved" | "pending" | "spam") =>
            setFilter(value)
          }>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="spam">Spam</SelectItem>
          </SelectContent>
        </Select>
        <Dialog open={isAddCommentOpen} onOpenChange={setIsAddCommentOpen}>
          <DialogTrigger asChild>
            <Button>
              <MessageCirclePlus className="mr-2 h-4 w-4" /> Add Comment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Comment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="author" className="text-right">
                  Author
                </Label>
                <Input
                  id="author"
                  value={newComment.author}
                  onChange={(e) =>
                    setNewComment({ ...newComment, author: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="postTitle" className="text-right">
                  Post Title
                </Label>
                <Input
                  id="postTitle"
                  value={newComment.postTitle}
                  onChange={(e) =>
                    setNewComment({ ...newComment, postTitle: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">
                  Content
                </Label>
                <Textarea
                  id="content"
                  value={newComment.content}
                  onChange={(e) =>
                    setNewComment({ ...newComment, content: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleAddComment}>Add Comment</Button>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Author</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Post Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredComments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>{comment.author}</TableCell>
              <TableCell>{comment.content.slice(0, 50)}...</TableCell>
              <TableCell>{comment.postTitle}</TableCell>
              <TableCell>
                {new Date(comment.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                <Select
                  value={comment.status}
                  onValueChange={(value: Comment["status"]) =>
                    handleUpdateStatus(comment.id, value)
                  }>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="spam">Spam</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setCommentToDelete(comment)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the comment by {comment.author} and remove it
                        from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => setCommentToDelete(null)}>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteComment}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
