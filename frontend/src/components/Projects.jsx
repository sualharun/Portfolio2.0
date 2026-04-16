import ProjectCarousel from './ProjectCarousel.jsx';

const projectItems = [
  {
    id: 'smart-glasses',
    title: 'Smart Glasses Assistant',
    description:
      'Wearable AI assistive system for face and object recognition with spoken feedback and mobile/cloud sync.',
    tech: 'Wearable HW · AI/ML · Computer Vision · Cloud Sync · Mobile',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'echomap',
    title: 'EchoMap',
    description:
      'Takes raw Amboseli field recordings and runs each through a 3-stage DSP pipeline that separates elephant harmonics from mechanical noise, then serves cleaned audio, before/after spectrograms, and recording metrics through a research dashboard.',
    tech: 'DSP · Audio Processing · Python · Research Dashboard',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cloud-cost-advisor',
    title: 'Cloud Cost Advisor',
    description:
      'Enterprise browser extension with Java Spring Boot backend delivering real-time cost recommendations across Azure, AWS, and GCP. Cross-cloud normalization engine using K-means clustering, Redis caching reducing latency by 40%, and time-series forecasting achieving 25–35% savings on cloud spend.',
    tech: 'Java · Spring Boot · Azure/AWS/GCP · Redis · K-means',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'distributed-pipeline',
    title: 'Distributed File Processing Pipeline',
    description:
      'Async processing engine with Next.js frontend and ECS Fargate backend. Event-driven distributed system reducing processing time by 80%. Fault-tolerant architecture with DynamoDB-tracked job recovery and 99.9% job completion rate.',
    tech: 'Next.js · AWS · ECS Fargate · Terraform · DynamoDB · SQS',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'focusflow',
    title: 'FocusFlow',
    description:
      'Full-stack Pomodoro productivity app with React and Spring Boot, real-time collaborative sessions via WebSocket/STOMP, OAuth2 Google login, activity logging and analytics pipeline optimizing work intervals by 25%.',
    tech: 'Spring Boot · React · WebSocket · OAuth2 · PostgreSQL · Tailwind',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommender',
    description:
      'ML-powered movie recommendation site with Spring Boot backend integrated with Python model using TF-IDF vectorization and cosine similarity on movie descriptions, exposed through REST APIs.',
    tech: 'Java · Spring Boot · Python · Data Science',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Projects({ items }) {
  void items;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">03 / Projects</span>
          <h2 className="section-title">SELECTED<br/>WORK.</h2>
        </div>
        <ProjectCarousel items={projectItems} />
      </div>
    </section>
  );
}
