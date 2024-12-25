import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPostCardProps {
  title?: string;
  excerpt?: string;
  date?: string;
  imageUrl?: string;
  category?: string;
  slug?: string;
}

const BlogPostCard = ({
  title = "Understanding Supplement Safety",
  excerpt = "Learn about the importance of third-party testing and quality control in supplements.",
  date = "March 15, 2024",
  imageUrl = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
  category = "Health",
  slug = "understanding-supplement-safety",
}: BlogPostCardProps) => {
  return (
    <Card className="w-full bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="link"
          className="px-0 text-blue-600 hover:text-blue-800"
          asChild
        >
          <a href={`/blog/${slug}`}>Read More →</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
