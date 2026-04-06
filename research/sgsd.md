---
layout: default
title: Semantically Grounded Skill Discovery via Vision-Language Models | Project
research_active: true
permalink: /research/sgsd/
wip: true
---

<style>
  .project-page {
    max-width: 980px;
    margin: 0 auto;
    padding: var(--space-8) var(--space-4) var(--space-20);
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
    padding: var(--space-8);
    margin-bottom: var(--space-8);
    background: color-mix(in srgb, var(--background-primary) 75%, var(--background-secondary) 25%);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
  }

  .project-title {
    margin-bottom: var(--space-3);
    font-family: "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
    font-size: clamp(1.9rem, 2.4vw, 2.7rem);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .project-meta {
    color: var(--text-secondary);
    margin-bottom: var(--space-6);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .project-links {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
    margin-bottom: 0;
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

  .wip-banner {
    border: 1px solid var(--border-color);
    border-left: 4px solid #1d4ed8;
    border-radius: 10px;
    padding: var(--space-6) var(--space-7);
    background: color-mix(in srgb, #1d4ed8 7%, var(--background-secondary) 93%);
    margin-bottom: var(--space-8);
  }

  .wip-banner strong {
    display: block;
    margin-bottom: var(--space-2);
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-2);
  }

  .project-card {
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: var(--space-7);
    margin-bottom: var(--space-6);
    background: var(--background-primary);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  }

  .project-card.snapshot {
    grid-column: span 12;
  }

  .project-card.now {
    grid-column: span 6;
  }

  .project-card.next {
    grid-column: span 6;
  }

  .project-card h2 {
    margin-top: 0;
    margin-bottom: var(--space-3);
    font-size: 1.2rem;
  }

  .project-card p,
  .project-card li {
    color: var(--text-secondary);
  }

  .project-card ul {
    margin: 0;
    padding-left: 1.1rem;
  }

  .project-card ul li + li {
    margin-top: 0.5rem;
  }

  details.full-draft {
    margin-top: var(--space-8);
    border: 1px dashed color-mix(in srgb, var(--text-primary) 22%, var(--border-color) 78%);
    border-radius: 12px;
    padding: var(--space-6) var(--space-7);
    background: color-mix(in srgb, var(--background-secondary) 85%, var(--background-primary) 15%);
  }

  details.full-draft summary {
    cursor: pointer;
    font-weight: 600;
    font-size: 1.02rem;
  }

  details.full-draft[open] summary {
    margin-bottom: var(--space-4);
  }

  .last-updated {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: var(--space-8);
    font-family: var(--font-mono);
  }

  @media (max-width: 820px) {
    .hero {
      padding: var(--space-6);
    }

    .project-card.now,
    .project-card.next {
      grid-column: span 12;
    }

    .project-card {
      padding: var(--space-6);
    }

    .project-meta {
      letter-spacing: 0.06em;
    }
  }
</style>

<main class="project-page">
  <section class="hero">
    <h1 class="project-title">Semantically Grounded Skill Discovery via Vision-Language Models</h1>

    <p class="project-meta"><strong>Bachelor's Dissertation</strong> · University of Bath · 2026</p>

    <div class="project-links">
      <a href="#">PDF (coming soon)</a>
      <a href="https://github.com/bmcd243/url_benchmark_clip/">Code</a>
      <a href="#">Videos (coming soon)</a>
    </div>
  </section>

  <section class="wip-banner" aria-label="Work in progress notice">
    <strong>Work in Progress</strong>
    This page is intentionally lightweight while experiments are still running. The full draft notes are preserved below and in the repository.
  </section>

  <div class="project-grid">
    <section class="project-card snapshot">
      <h2>Current Snapshot</h2>
      <p>
        This project investigates whether vision-language model priors can make unsupervised skill discovery
        more semantically interpretable and more transferable to downstream reinforcement learning tasks.
      </p>
    </section>

    <section class="project-card now">
      <h2>What Is Implemented So Far</h2>
      <ul>
        <li>Frozen CLIP ViT-B/32 integrated as a replacement encoder in URLB.</li>
        <li>Textured MuJoCo settings prepared to probe CLIP semantic priors.</li>
        <li>Evaluation setup in place for DIAYN and APS across multiple locomotion domains.</li>
      </ul>
    </section>

    <section class="project-card next">
      <h2>What Will Be Added Next</h2>
      <ul>
        <li>Quantitative results and comparison tables.</li>
        <li>t-SNE and trajectory visualizations.</li>
        <li>Short qualitative rollout videos for representative skills.</li>
      </ul>
    </section>
  </div>

  <details class="full-draft" markdown="1">
    <summary>View full draft content</summary>

## Abstract

One or two sentence summary of the project and main finding.

## Overview

Brief paragraph explaining the problem, your approach, and why it matters. Non-specialist friendly.

## Approach

- Frozen CLIP ViT-B/32 as a drop-in replacement for the CNN encoder in URLB
- Textured MuJoCo environments designed to activate CLIP's visual priors
- Evaluated on DIAYN and APS across three locomotion domains

## Results

Key finding in one sentence. Include your best result number if it tells a good story.

![t-SNE visualisation of CLIP vs CNN embeddings](#)

## Qualitative Results

Embed or link to eval videos showing learned skills across environments.

## Citation

```bibtex
@thesis{yourname2026,
  title={Semantically Grounded Unsupervised Skill Discovery via Vision-Language Models},
  author={Your Name},
  year={2026},
  school={University of Bath}
}
```
  </details>

  <p class="last-updated">Last updated: {{ "now" | date: "%-d %B %Y" }}</p>
</main>