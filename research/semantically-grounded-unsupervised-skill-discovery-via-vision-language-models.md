---
layout: default
title: Semantically Grounded Unsupervised Skill Discovery via Vision-Language Models | Project
research_active: true
permalink: /research/semantically-grounded-unsupervised-skill-discovery-via-vision-language-models/
wip: true
---

<style>
  .project-page {
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-8) var(--space-4) var(--space-20);
  }

  .project-title {
    margin-bottom: var(--space-3);
  }

  .project-meta {
    color: var(--text-secondary);
    margin-bottom: var(--space-5);
    font-size: 0.98rem;
  }

  .project-links {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
    margin-bottom: var(--space-8);
  }

  .project-links a {
    font-weight: 500;
  }

  .wip-banner {
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--primary);
    border-radius: 8px;
    padding: var(--space-4) var(--space-5);
    background: var(--background-secondary);
    margin-bottom: var(--space-8);
  }

  .wip-banner strong {
    display: block;
    margin-bottom: var(--space-2);
  }

  .project-card {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: var(--space-5);
    margin-bottom: var(--space-6);
  }

  .project-card h2 {
    margin-top: 0;
    margin-bottom: var(--space-3);
    font-size: 1.3rem;
  }

  .project-card p,
  .project-card li {
    color: var(--text-secondary);
  }

  .project-card ul {
    margin: 0;
    padding-left: 1.1rem;
  }

  details.full-draft {
    margin-top: var(--space-8);
    border: 1px dashed var(--border-color);
    border-radius: 8px;
    padding: var(--space-4) var(--space-5);
    background: var(--background-secondary);
  }

  details.full-draft summary {
    cursor: pointer;
    font-weight: 600;
  }

  .last-updated {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: var(--space-6);
  }
</style>

<main class="project-page">
  <h1 class="project-title">Semantically Grounded Unsupervised Skill Discovery via Vision-Language Models</h1>

  <p class="project-meta"><strong>Bachelor's Dissertation</strong> · University of Bath · 2026</p>

  <div class="project-links">
    <a href="#">PDF (coming soon)</a>
    <a href="https://github.com/bmcd243/url_benchmark_clip/">Code</a>
    <a href="#">Videos (coming soon)</a>
  </div>

  <section class="wip-banner" aria-label="Work in progress notice">
    <strong>Work in Progress</strong>
    This page is intentionally lightweight while experiments are still running. The full draft notes are preserved below and in the repository.
  </section>

  <section class="project-card">
    <h2>Current Snapshot</h2>
    <p>
      This project investigates whether vision-language model priors can make unsupervised skill discovery
      more semantically interpretable and more transferable to downstream reinforcement learning tasks.
    </p>
  </section>

  <section class="project-card">
    <h2>What Is Implemented So Far</h2>
    <ul>
      <li>Frozen CLIP ViT-B/32 integrated as a replacement encoder in URLB.</li>
      <li>Textured MuJoCo settings prepared to probe CLIP semantic priors.</li>
      <li>Evaluation setup in place for DIAYN and APS across multiple locomotion domains.</li>
    </ul>
  </section>

  <section class="project-card">
    <h2>What Will Be Added Next</h2>
    <ul>
      <li>Quantitative results and comparison tables.</li>
      <li>t-SNE and trajectory visualizations.</li>
      <li>Short qualitative rollout videos for representative skills.</li>
    </ul>
  </section>

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