import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Yashan Setia - Backend Engineer | Spring Boot | Scalable Systems</title>
        <meta name="description" content="Yashan Setia — Backend Engineer specializing in scalable systems using Spring Boot and Java. Software Engineer at Bessegen Infotech." />
        <meta name="keywords" content="Yashan Setia, Backend Engineer, Spring Boot, Java, Kotlin, PostgreSQL, REST API, Scalable Systems" />
        <meta name="author" content="Yashan Setia" />
        <meta property="og:title" content="Yashan Setia - Backend Engineer" />
        <meta property="og:description" content="Backend Engineer specializing in scalable systems using Spring Boot, with full-stack capabilities." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yashan Setia - Backend Engineer" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yashan Setia",
            "jobTitle": "Backend Engineer",
            "description": "Backend Engineer specializing in scalable systems using Spring Boot and Java.",
            "sameAs": [
              "https://github.com/Ysetia10",
              "https://www.linkedin.com/in/yashan-setia-03a463249/"
            ]
          }
        `}</script>
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
