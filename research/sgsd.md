---
layout: default
title: Semantically Grounded Skill Discovery via Vision-Language Models | Project
research_active: true
permalink: /research/sgsd/
---
<style>
  .project-page {
    max-width: 820px;
    margin: 0 auto;
    padding: var(--space-6) var(--space-4) var(--space-12);
    position: relative;
  }

  .project-page::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 280px;
    background:
      radial-gradient(120% 160% at 10% 0%, rgba(37, 99, 235, 0.14), transparent 50%),
      radial-gradient(90% 120% at 90% 0%, rgba(16, 185, 129, 0.1), transparent 48%);
    z-index: -1;
    pointer-events: none;
  }

  .hero {
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: var(--space-6);
    margin-bottom: var(--space-6);
    background: color-mix(in srgb, var(--background-primary) 75%, var(--background-secondary) 25%);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
  }

  .project-title {
    margin: 0 0 var(--space-3);
    font-family: "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
    font-size: clamp(1.9rem, 2.4vw, 2.7rem);
    line-height: 1.15;
  }

  .project-meta {
    color: var(--text-secondary);
    margin: 0 0 var(--space-4);
    font-size: 0.95rem;
  }

  .project-links {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .project-links a {
    font-weight: 600;
    font-size: 0.92rem;
    border: 1px solid var(--border-color);
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    transition: transform var(--transition), background-color var(--transition), border-color var(--transition);
  }

  .project-links a:hover {
    opacity: 1;
    transform: translateY(-1px);
    background: var(--background-secondary);
    border-color: color-mix(in srgb, var(--text-primary) 25%, var(--border-color) 75%);
  }

  .section-heading {
    font-size: 1.5rem;
    font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
    margin: 0 0 var(--space-4);
    padding-bottom: var(--space-2);
    border-bottom: 1px solid var(--border-color);
  }

  .abstract {
    margin: 0;
    color: var(--text-primary);
    font-size: 1.05rem;
    line-height: 1.75;
  }

  .project-card {
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: var(--space-6);
    background: var(--background-primary);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  }

  .abstract-card {
    border-left: 4px solid #059669;
  }

  .project-card h2 {
    margin: 0 0 var(--space-4);
  }

  .citation-section {
    margin-top: var(--space-8);
  }

  .citation-block {
    margin: 0;
    padding: var(--space-6);
    overflow-x: auto;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--background-secondary);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.88rem;
    line-height: 1.7;
    white-space: pre-wrap;
  }

  @media (max-width: 640px) {
    .hero,
    .project-card {
      padding: var(--space-4);
    }

    .citation-block {
      padding: var(--space-4);
    }
  }
</style>

<main class="project-page">
  <section class="hero">
    <h1 class="project-title">Semantically Grounded Skill Discovery via Vision-Language Models</h1>
    <p class="project-meta"><strong>Bachelor's Dissertation</strong> · University of Bath · 2026</p>
    <div class="project-links">
      <a href="{{ site.baseurl }}/assets/sgsd.pdf" target="_blank" rel="noopener">PDF</a>
      <a href="https://github.com/bmcd243/url_benchmark_clip/" target="_blank" rel="noopener">Code</a>
    </div>
  </section>

  <section aria-labelledby="abstract-heading">
    <div class="project-card abstract-card">
      <h2 class="section-heading" id="abstract-heading">Abstract</h2>
      <p class="abstract">
        Unsupervised skill discovery methods enable agents to learn diverse behaviours without task-specific rewards,
        but existing approaches rely on task-trained visual encoders that lack semantic structure.
        We replace the standard CNN encoder in DIAYN and APS with a frozen CLIP ViT-B/32 encoder,
        and introduce textured MuJoCo environments designed to activate CLIP's visual priors.
        We evaluate across three locomotion domains — textured walker, quadruped, and cheetah —
        and show that CLIP representations improve both skill diversity during pretraining and
        downstream task performance during finetuning.
      </p>
    </div>
  </section>

  <section class="citation-section" aria-labelledby="citation-heading">
    <h2 class="section-heading" id="citation-heading">Citation</h2>
    <pre class="citation-block">@thesis{mcdowell2026sgsd,
  title     = {Semantically Grounded Skill Discovery via Vision-Language Models},
  author    = {Ben McDowell},
  year      = {2026},
  school    = {University of Bath},
  type      = {Bachelor's Dissertation}
}</pre>
  </section>
</main>
