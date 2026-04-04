---
layout: default
title: Semantically Grounded Unsupervised Skill Discovery via Vision-Language Models | Project
research_active: true
permalink: /research/semantically-grounded-unsupervised-skill-discovery-via-vision-language-models/
---

# Semantically Grounded Unsupervised Skill Discovery via Vision-Language Models

## Project Overview

Unsupervised skill discovery is a promising route toward generally capable agents, especially when rewards are sparse, expensive to define, or unavailable. Instead of training for one fixed task, agents discover reusable skills that can later be composed and adapted.

The main limitation in many existing methods is semantic ambiguity: discovered skills can be diverse but hard to interpret. This project investigates how pretrained vision-language models (VLMs) can provide semantic structure so discovered skills are both behaviorally diverse and human-describable.

## Motivation

Traditional unsupervised objectives are often geometry-driven, rewarding coverage or latent separability rather than concept-level meaning. As a result, many discovered skills are difficult to name, audit, or reuse.

VLMs provide a strong prior by embedding observations into a representation space aligned with language. The project hypothesis is that adding VLM-based semantic grounding produces skill libraries that are more interpretable and more transferable to downstream tasks.

## Method

The framework has four core components:

1. Skill-conditioned policy $\pi(a_t \mid s_t, z)$ with a latent skill variable $z$.
2. Frozen VLM encoder that maps observations to semantic embeddings.
3. Combined objective balancing skill identifiability, semantic separation, and behavioral stability.
4. Post-hoc language alignment for automatic skill labeling and retrieval.

Trajectory-level semantic representation:

$$
e_t = f_{\text{VLM}}(o_t), \quad E(\tau) = g(e_1, e_2, \dots, e_T)
$$

Training objective (simplified):

$$
\mathcal{L} = \lambda_1 \mathcal{L}_{\text{MI}}(z, \tau) + \lambda_2 \mathcal{L}_{\text{sem-sep}}(E(\tau), z) + \lambda_3 \mathcal{L}_{\text{stability}}
$$

## Expected Contributions

- Semantically interpretable unsupervised skills.
- Better skill reuse and transfer in downstream policy learning.
- Language-based skill inspection, selection, and debugging.
- Evaluation protocol combining behavior diversity with semantic metrics.

## Limitations and Risks

- Semantic aliasing between behaviorally distinct trajectories.
- VLM blind spots for non-visual or hidden state variables.
- Reward hacking against embedding-space objectives.
- Domain mismatch between pretrained VLM data and target environments.

## Evaluation Plan

- Diversity and consistency of discovered skills.
- Language-to-skill retrieval quality.
- Downstream adaptation efficiency.
- Human interpretability assessment.

## Summary

This project studies whether foundation-model semantics can turn unsupervised exploration into meaningful skill discovery. If successful, the resulting skill libraries should be easier to understand, safer to deploy, and more effective as reusable building blocks for generalist agents.