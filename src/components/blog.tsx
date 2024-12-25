import React from "react";
import Navbar from "@/components/navigation/Navbar";
import BlogPostCard from "@/components/cards/BlogPostCard";
import { blogPosts } from "./blog-post";

interface BlogPageProps {
  posts?: Array<React.ComponentProps<typeof BlogPostCard>>;
}

const BlogPage = ({ posts }: BlogPageProps) => {
  const defaultPosts = Object.entries(blogPosts).map(([slug, post]) => ({
    ...post,
    slug,
    excerpt: post.content[0].text,
  }));

  const displayPosts = posts || defaultPosts;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest research, insights, and updates
              about tinnitus management and GABA supplements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
