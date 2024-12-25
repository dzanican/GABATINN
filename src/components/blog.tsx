import React from "react";
import Navbar from "@/components/navigation/Navbar";
import BlogPostCard from "@/components/cards/BlogPostCard";

interface BlogPageProps {
  posts?: Array<React.ComponentProps<typeof BlogPostCard>>;
}

const BlogPage = ({
  posts = [
    {
      title: "The Science Behind Supplement Absorption",
      excerpt:
        "Discover how different forms of supplements affect their bioavailability and effectiveness in the body.",
      date: "March 20, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
      category: "Science",
      slug: "science-behind-supplement-absorption",
    },
    {
      title: "Natural vs. Synthetic Supplements",
      excerpt:
        "Understanding the differences between natural and synthetic supplements, and which might be right for you.",
      date: "March 18, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80",
      category: "Education",
      slug: "natural-vs-synthetic-supplements",
    },
    {
      title: "Supplement Timing: When to Take What",
      excerpt:
        "Learn the optimal timing for different supplements to maximize their benefits and avoid interactions.",
      date: "March 15, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
      category: "Tips",
      slug: "supplement-timing-guide",
    },
  ],
}: BlogPageProps) => {
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
              about supplements and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
