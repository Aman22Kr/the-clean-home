import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/servicesData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, CheckCircle2, Bookmark } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const { showToast } = useApp();

  const post = BLOG_POSTS.find((p) => p.slug === postSlug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center p-4">
        <div className="max-w-md bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Article Not Found</h2>
          <p className="text-xs text-slate-600">The article you were looking for does not exist or has been archived.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#083838] text-white text-xs font-semibold rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Wellness Journal</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Article link copied to clipboard!');
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <button
            type="button"
            onClick={handleCopyShare}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Article</span>
          </button>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#083838] font-display leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 border-b border-slate-200 pb-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.author}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-16/9 bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-[#EBF5F4] border border-teal-800/20 rounded-2xl p-6 space-y-3">
          <h4 className="text-sm font-bold text-[#083838] uppercase tracking-wider">
            Key Environmental Wellness Takeaways
          </h4>
          <div className="space-y-2">
            {post.keyTakeaways.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-6">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* In-Article Action Prompt */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#083838]">
              Concerned about indoor air allergens in your home?
            </h4>
            <p className="text-xs text-slate-500">
              Our technicians perform on-site indoor air inspections with before-and-after proof.
            </p>
          </div>
          <Link
            to="/book"
            className="px-5 py-2.5 bg-[#083838] hover:bg-[#0c4e4e] text-white text-xs font-semibold rounded-xl whitespace-nowrap shadow-sm transition-colors"
          >
            Schedule Assessment
          </Link>
        </div>

        {/* Related Articles */}
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-bold text-[#083838] font-display">
            Related Wellness Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-teal-700/60 transition-all hover:shadow-xs group"
              >
                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block mb-1">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {rel.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-teal-800 font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <AdPlaceholder />
      </div>
    </div>
  );
};
