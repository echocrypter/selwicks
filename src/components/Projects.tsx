import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Megaphone } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import './Projects.css';

const categories: Project['category'][] = [
  'Mobile Apps',
  'Desktop & Web Apps',
  'Websites',
  'AI Automation & AI Agents',
  'Digital Marketing',
  'UGC Ads',
];

const categoryIntros: Partial<Record<Project['category'], string>> = {
  'Digital Marketing': 'Meta ad campaigns we\'ve created and managed for businesses across fashion, food, education, and more.',
};

function ProjectCard({ project }: { project: Project }) {
  const [previewFailed, setPreviewFailed] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (project.image && image.src.endsWith('.png')) {
      image.src = project.image.replace(/\.png$/, '.jpg');
    } else {
      setPreviewFailed(true);
    }
  };

  const initials = project.name
    .split(/[\s(:]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  const className = `project-card group${project.video ? ' project-card--ugc' : ''}${project.category === 'Digital Marketing' ? ' project-card--marketing' : ''}`;
  const cardContent = (
    <>
      <div className="project-card__preview" aria-hidden="true">
        {project.video && !previewFailed ? (
          <video
            className="project-card__video"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setPreviewFailed(true)}
          />
        ) : project.image && !previewFailed ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            onError={handleImageError}
          />
        ) : project.category === 'Digital Marketing' ? (
          <Megaphone className="project-card__marketing-icon" aria-hidden="true" />
        ) : (
          <span className="project-card__initials">{initials}</span>
        )}
        <span className="project-card__preview-label">
          {project.video ? 'UGC video' : project.category === 'Digital Marketing' ? 'Meta ad campaign' : 'Selected work'}
        </span>
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.name}</h3>
        {project.tag && <span className="project-card__tag">{project.tag}</span>}
        {project.description && <p>{project.description}</p>}
        <span
          className={`project-card__arrow${project.actionLabel ? ' project-card__action-link' : ''}`}
          aria-hidden="true"
        >
          {project.actionLabel && <span>{project.actionLabel}</span>}
          <ArrowRight className="project-card__arrow-icon" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  return project.link ? (
    <a
      className={className}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} (opens in a new tab)`}
    >
      {cardContent}
    </a>
  ) : (
    <article className={className}>{cardContent}</article>
  );
}

function ProjectCarousel({
  category,
  items,
  intro,
}: {
  category: Project['category'];
  items: Project[];
  intro?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ pointerX: number; scrollLeft: number } | null>(null);
  const dragged = useRef(false);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const headingId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollButtons = () => {
      setCanScrollPrevious(track.scrollLeft > 8);
      setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };

    updateScrollButtons();
    track.addEventListener('scroll', updateScrollButtons, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragStart.current = {
      pointerX: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    dragged.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    if (!start || event.buttons !== 1) return;
    const distance = event.clientX - start.pointerX;
    if (Math.abs(distance) > 8) {
      dragged.current = true;
      event.currentTarget.scrollLeft = start.scrollLeft - distance;
    }
  };

  const stopDragging = () => {
    dragStart.current = null;
  };

  return (
    <section className="project-category" aria-labelledby={`${headingId}-heading`}>
      <div className="project-category__heading">
        <div>
          <h2 id={`${headingId}-heading`}>{category}</h2>
          {intro && <p className="project-category__intro">{intro}</p>}
          <p>{items.length} {items.length === 1 ? 'project' : 'projects'}</p>
        </div>
        <div className="project-carousel__controls">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrevious}
            aria-label={`Scroll ${category} to previous projects`}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            aria-label={`Scroll ${category} to next projects`}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="project-carousel">
        <div
          ref={trackRef}
          className="project-carousel__track"
          role="region"
          aria-label={`${category} projects`}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              scrollByCard(-1);
            } else if (event.key === 'ArrowRight') {
              event.preventDefault();
              scrollByCard(1);
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onClickCapture={(event) => {
            if (dragged.current) {
              event.preventDefault();
              event.stopPropagation();
              dragged.current = false;
            }
          }}
        >
          {items.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}

export const Projects: React.FC = () => (
  <div className="projects-page">
    <header className="projects-hero">
      <span className="projects-hero__badge">OUR WORK</span>
      <h1>Projects</h1>
      <p>A selection of mobile apps, desktop and web apps, and websites we have built.</p>
    </header>
    <div className="projects-list">
      {categories.map((category) => (
        <ProjectCarousel
          key={category}
          category={category}
          items={projects.filter((project) => project.category === category)}
          intro={categoryIntros[category]}
        />
      ))}
    </div>
  </div>
);
