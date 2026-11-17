import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  Clock3,
  Cloud,
  Code2,
  Copy,
  Layers,
  Megaphone,
  Search,
  type LucideIcon,
} from 'lucide-react';
import { blogCategories, blogPosts, type BlogBodyBlock, type BlogPost } from '../content/blogPosts';
import { SITE_ORIGIN } from '../config/site';
import { ContactCTA } from './ContactCTA';
import './Blog.css';

const useBlogReveals = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.blog-page [data-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
};

const categoryIcons: Record<string, LucideIcon> = {
  'Software Development': Code2,
  'AI & Automation': Bot,
  'Product Building': Layers,
  DevOps: Cloud,
  'Digital Marketing': Megaphone,
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

const articleTitle = (post: BlogPost) => post.articleTitle ?? post.title;

const categoryClass = (category: string) =>
  `blog-cover--${category.toLowerCase().replace(/[^a-z]+/g, '-')}`;

const addOrUpdateMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
  let element: HTMLMetaElement | HTMLLinkElement | null =
    document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    if (selector.startsWith('link')) {
      element.setAttribute('rel', 'canonical');
    } else {
      const property = selector.match(/\[property="([^"]+)"\]/)?.[1];
      if (property) element.setAttribute('property', property);
      else element.setAttribute('name', selector.match(/\[name="([^"]+)"\]/)?.[1] ?? 'description');
    }
    document.head.append(element);
  }
  element.setAttribute(attribute, value);
};

const setArticleMetadata = (post: BlogPost) => {
  const title = `${articleTitle(post)} | Selwicks Insights`;
  const canonical = `${SITE_ORIGIN}/blog/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle(post),
    description: post.excerpt,
    image: `${SITE_ORIGIN}/founder.jpeg`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Selwicks' },
    mainEntityOfPage: canonical,
  };

  document.title = title;
  addOrUpdateMeta('meta[name="description"]', 'content', post.excerpt);
  addOrUpdateMeta('link[rel="canonical"]', 'href', canonical);
  addOrUpdateMeta('meta[property="og:title"]', 'content', title);
  addOrUpdateMeta('meta[property="og:description"]', 'content', post.excerpt);
  addOrUpdateMeta('meta[property="og:url"]', 'content', canonical);
  addOrUpdateMeta('meta[property="og:type"]', 'content', 'article');
  addOrUpdateMeta('meta[property="og:image"]', 'content', `${SITE_ORIGIN}/founder.jpeg`);

  let jsonLd = document.head.querySelector<HTMLScriptElement>('#blog-article-jsonld');
  if (!jsonLd) {
    jsonLd = document.createElement('script');
    jsonLd.id = 'blog-article-jsonld';
    jsonLd.type = 'application/ld+json';
    document.head.append(jsonLd);
  }
  jsonLd.textContent = JSON.stringify(structuredData);
};

interface PostCoverProps {
  post: BlogPost;
  featured?: boolean;
}

const PostCover: React.FC<PostCoverProps> = ({ post, featured = false }) => {
  const Icon = categoryIcons[post.category] ?? Code2;
  return (
    <div className={`blog-cover ${categoryClass(post.category)} ${featured ? 'blog-cover--featured' : ''} ${post.image ? 'blog-cover--image' : ''}`}>
      {post.image ? (
        <img
          className="blog-cover__image"
          src={post.image}
          alt={post.imageAlt ?? post.title}
          loading={featured ? undefined : 'lazy'}
        />
      ) : (
        <Icon aria-hidden="true" />
      )}
      {featured && <span>Featured insight</span>}
    </div>
  );
};

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
  related?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false, related = false }) => (
  <article
    className={`blog-post-card ${featured ? 'blog-post-card--featured' : ''} ${related ? 'blog-post-card--related' : ''} ${!post.published ? 'blog-post-card--upcoming' : ''}`}
  >
    <PostCover post={post} featured={featured} />
    <div className="blog-post-card__content">
      <div className="blog-post-card__badges">
        <span className="blog-category-badge">{post.category}</span>
        {!post.published && <span className="blog-coming-soon">Coming soon</span>}
      </div>
      <h2>
        {post.published ? <a href={`/blog/${post.slug}`}>{post.title}</a> : post.title}
      </h2>
      <p>{post.excerpt}</p>
      <div className="blog-post-card__meta">
        <span><Clock3 aria-hidden="true" />{post.readTime} read</span>
        <time dateTime={post.date}><CalendarDays aria-hidden="true" />{formatDate(post.date)}</time>
      </div>
    </div>
  </article>
);

const BlogListing: React.FC = () => {
  useBlogReveals();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = !search
        || post.title.toLowerCase().includes(search)
        || post.excerpt.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost = filteredPosts.find((post) => post.featured && post.published);
  const gridPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-container blog-hero__content" data-reveal>
          <span className="blog-eyebrow">Insights</span>
          <h1>Insights</h1>
          <p className="blog-hero__subtitle">
            Practical thinking on software, AI, and building products that scale.
          </p>
          <p className="blog-hero__description">
            No fluff and no jargon. Just lessons from the team at Selwicks on building, automating, and growing.
          </p>
        </div>
      </section>

      <section className="blog-container blog-listing" aria-label="Blog posts">
        <div className="blog-listing__controls" data-reveal>
          <div className="blog-category-filters" role="group" aria-label="Filter articles by category">
            {['All', ...blogCategories].map((category) => (
              <button
                type="button"
                key={category}
                className={`blog-filter-chip ${selectedCategory === category ? 'is-active' : ''}`}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="blog-search">
            <Search aria-hidden="true" />
            <span className="sr-only">Search articles by title or excerpt</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search insights"
            />
          </label>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="blog-empty-state" role="status">
            <h2>No insights found</h2>
            <p>Try a different search or category.</p>
            <button
              type="button"
              className="blog-empty-state__reset"
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {featuredPost && <PostCard post={featuredPost} featured />}
            {gridPosts.length > 0 && (
              <div className="blog-post-grid">
                {gridPosts.map((post) => <PostCard key={post.slug} post={post} />)}
              </div>
            )}
          </>
        )}
      </section>

      <ContactCTA />
    </div>
  );
};

const renderBodyBlock = (block: BlogBodyBlock, index: number) => {
  if (block.type === 'heading') return <h2 key={`heading-${index}`}>{block.text}</h2>;
  if (block.type === 'paragraph') return <p key={`paragraph-${index}`}>{block.text}</p>;
  const List = block.ordered ? 'ol' : 'ul';
  return (
    <List key={`list-${index}`}>
      {block.items.map((item) => <li key={item}>{item}</li>)}
    </List>
  );
};

const ArticlePage: React.FC<{ post: BlogPost }> = ({ post }) => {
  useBlogReveals();
  const [shareStatus, setShareStatus] = useState('');
  const title = articleTitle(post);
  const canonical = `${SITE_ORIGIN}/blog/${post.slug}`;
  const relatedPosts = blogPosts
    .filter((candidate) => candidate.published && candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  useEffect(() => {
    setArticleMetadata(post);
  }, [post]);

  const copyLink = async () => {
    if (!navigator.clipboard) {
      setShareStatus('Copy isn’t available here. Copy the article URL from your address bar.');
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus('Link copied.');
    } catch {
      setShareStatus('Could not copy the link. Copy the article URL from your address bar.');
    }
  };

  const shareText = encodeURIComponent(`${title} ${canonical}`);
  const encodedUrl = encodeURIComponent(canonical);

  return (
    <div className="blog-page blog-article-page">
      <div className="blog-container blog-article">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <a href="/blog/index.html">Blog</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Article</span>
        </nav>

        <header className="blog-article__header" data-reveal>
          <span className="blog-category-badge">{post.category}</span>
          <h1>{title}</h1>
          <p className="blog-article__excerpt">{post.excerpt}</p>
          <div className="blog-author">
            <img src="/founder.jpeg" alt="Hammad Ahmad, Founder of Selwicks" />
            <div className="blog-author__details">
              <span>{post.author}</span>
              <span>Founder of Selwicks</span>
            </div>
            <div className="blog-article__meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} read</span>
            </div>
          </div>
        </header>

        <article className="blog-article__body" data-reveal>
          {post.body.map(renderBodyBlock)}
        </article>

        <div className="blog-share" aria-label="Share this article" data-reveal>
          <span>Share</span>
          <button type="button" onClick={copyLink} aria-label="Copy article link">
            {shareStatus === 'Link copied.' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <span aria-hidden="true" className="blog-share__linkedin">in</span>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
          >
            <span aria-hidden="true">X</span>
          </a>
          <a
            href={`https://wa.me/?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
          >
            <span aria-hidden="true">W</span>
          </a>
          <span className="blog-share__status" role="status" aria-live="polite">{shareStatus}</span>
        </div>

        {relatedPosts.length > 0 && (
          <section className="blog-related" aria-labelledby="blog-related-title" data-reveal>
            <h2 id="blog-related-title">Related articles</h2>
            <div className="blog-post-grid blog-post-grid--related">
              {relatedPosts.map((related) => <PostCard key={related.slug} post={related} related />)}
            </div>
          </section>
        )}

        <a className="blog-back-link" href="/blog/index.html">
          <ArrowRight aria-hidden="true" />
          Back to Insights
        </a>
      </div>

      <ContactCTA />
    </div>
  );
};

const ArticleNotFound: React.FC = () => (
  <div className="blog-container blog-not-found">
    <h1>Article not found</h1>
    <a href="/blog/index.html">Back to Insights</a>
  </div>
);

export const Blog: React.FC = () => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isListing = pathname === '/blog' || pathname === '/blog/index.html';
  if (isListing) return <BlogListing />;

  const slug = pathname.split('/').pop();
  const post = blogPosts.find((item) => item.slug === slug && item.published);
  return post ? <ArticlePage post={post} /> : <ArticleNotFound />;
};
