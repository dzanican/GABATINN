import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";

export const blogPosts = {
  "understanding-gaba": {
    title: "Understanding GABA: The Brain's Natural Calming Agent",
    date: "March 20, 2024",
    category: "Science",
    imageUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80",
    content: [
      {
        type: "paragraph",
        text: "GABA (Gamma-Aminobutyric Acid) is the primary inhibitory neurotransmitter in the brain, playing a crucial role in reducing neuronal excitability throughout the nervous system. This article explores how GABA works and its potential benefits for tinnitus sufferers.",
      },
      {
        type: "heading",
        text: "How GABA Works in the Brain",
      },
      {
        type: "paragraph",
        text: "When GABA binds to its receptors, it produces a calming effect by reducing neural activity. This mechanism is particularly relevant for individuals experiencing tinnitus, as it may help regulate the hyperactivity in auditory pathways associated with the condition.",
      },
      {
        type: "heading",
        text: "GABA and Tinnitus",
      },
      {
        type: "paragraph",
        text: "Research suggests that GABA levels may play a role in tinnitus perception. Lower GABA concentrations in certain brain regions have been associated with increased tinnitus severity, making GABA supplementation an area of interest for tinnitus management.",
      },
    ],
  },
  "tinnitus-management": {
    title: "Comprehensive Guide to Natural Tinnitus Management",
    date: "March 18, 2024",
    category: "Education",
    imageUrl:
      "https://images.unsplash.com/photo-1590424693420-d8e2c9097e5b?auto=format&fit=crop&q=80",
    content: [
      {
        type: "paragraph",
        text: "Living with tinnitus can be challenging, but there are various natural approaches that may help manage its impact. This guide explores evidence-based strategies for tinnitus relief.",
      },
      {
        type: "heading",
        text: "Lifestyle Modifications",
      },
      {
        type: "paragraph",
        text: "Simple changes in daily habits can significantly impact tinnitus perception. These include stress management, regular exercise, and maintaining good sleep hygiene.",
      },
      {
        type: "heading",
        text: "Nutritional Support",
      },
      {
        type: "paragraph",
        text: "Certain nutrients and supplements may help support auditory health and reduce tinnitus-related stress. GABA, magnesium, and B-vitamins are among the most studied compounds.",
      },
    ],
  },
  "latest-research": {
    title: "Latest Research in Tinnitus Treatment",
    date: "March 15, 2024",
    category: "Research",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    content: [
      {
        type: "paragraph",
        text: "Recent scientific studies have shed new light on tinnitus mechanisms and potential treatments. This article summarizes the most promising developments in tinnitus research.",
      },
      {
        type: "heading",
        text: "Neural Mechanisms",
      },
      {
        type: "paragraph",
        text: "New research has identified specific neural circuits involved in tinnitus, particularly focusing on the role of inhibitory neurotransmitters like GABA in modulating auditory processing.",
      },
      {
        type: "heading",
        text: "Emerging Treatments",
      },
      {
        type: "paragraph",
        text: "Several innovative approaches are being investigated, including targeted supplementation, sound therapy, and neuromodulation techniques.",
      },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <div className="flex items-center gap-4 mb-6">
            <span className="text-blue-600 font-medium">{post.category}</span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
                  >
                    {section.text}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-600 mb-6">
                  {section.text}
                </p>
              );
            })}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
