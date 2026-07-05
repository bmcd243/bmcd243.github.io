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

  /* ── Hero ── */
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

  /* ── WIP banner ── */
  .wip-banner {
    border: 1px solid var(--border-color);
    border-left: 4px solid #1d4ed8;
    border-radius: 10px;
    padding: var(--space-6) var(--space-7);
    background: color-mix(in srgb, #1d4ed8 7%, var(--background-secondary) 93%);
    margin-bottom: var(--space-8);
  }
  .wip-banner strong { display: block; margin-bottom: var(--space-2); }

  /* ── Cards ── */
  .project-card {
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: var(--space-7);
    margin-bottom: var(--space-6);
    background: var(--background-primary);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  }
  .project-card h2 { margin-top: 0; margin-bottom: var(--space-4); font-size: 1.2rem; }
  .project-card p, .project-card li { color: var(--text-secondary); }

  /* ── Abstract ── */
  .abstract-card {
    border-left: 4px solid #059669;
  }
  .abstract-card p { font-size: 1.02rem; line-height: 1.75; color: var(--text-primary); }

  /* ── Section headings ── */
  .section-heading {
    font-size: 1.5rem;
    font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
    letter-spacing: -0.01em;
    margin: var(--space-10) 0 var(--space-2);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--border-color);
  }
  .section-subheading {
    font-size: 1.05rem;
    font-weight: 600;
    margin: var(--space-6) 0 var(--space-3);
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.8rem;
  }

  /* ── Environment tabs ── */
  .tab-bar {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
    margin-bottom: var(--space-5);
  }
  .tab-btn {
    font-size: 0.88rem;
    font-weight: 600;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--border-color);
    background: transparent;
    cursor: pointer;
    color: var(--text-secondary);
    transition: all 0.15s;
  }
  .tab-btn:hover { background: var(--background-secondary); color: var(--text-primary); }
  .tab-btn.active {
    background: var(--text-primary);
    color: var(--background-primary);
    border-color: var(--text-primary);
  }
  .tab-panel { display: none; }
  .tab-panel.active { display: block; }

  /* ── Video grid ── */
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--space-4);
    margin-bottom: var(--space-6);
  }
  .video-item {
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
    background: var(--background-secondary);
  }
  .video-item video,
  .video-item .video-placeholder {
    width: 100%;
    aspect-ratio: 16/9;
    display: block;
    background: color-mix(in srgb, var(--background-secondary) 60%, var(--border-color) 40%);
    object-fit: cover;
  }
  .video-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-family: var(--font-mono);
  }
  .video-caption {
    padding: var(--space-3) var(--space-4);
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.4;
  }
  .video-caption strong {
    display: block;
    color: var(--text-primary);
    font-size: 0.88rem;
    margin-bottom: 2px;
  }

  /* ── Method badge ── */
  .method-badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    margin-bottom: var(--space-3);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .badge-diayn { background: color-mix(in srgb, #1d4ed8 12%, transparent); color: #1d4ed8; }
  .badge-aps   { background: color-mix(in srgb, #059669 12%, transparent); color: #059669; }
  .badge-cnn   { background: color-mix(in srgb, #9333ea 12%, transparent); color: #9333ea; }

  /* ── Comparison row (CNN vs CLIP side by side) ── */
  .comparison-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
    margin-bottom: var(--space-6);
  }
  .comparison-col h4 {
    margin: 0 0 var(--space-3);
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--text-secondary);
  }

  /* ── Ablation table-like layout ── */
  .ablation-group {
    margin-bottom: var(--space-8);
  }
  .ablation-group h3 {
    font-size: 1rem;
    margin-bottom: var(--space-4);
    color: var(--text-primary);
  }

  /* ── Citation ── */
  .citation-block {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    background: var(--background-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: var(--space-5);
    overflow-x: auto;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  @media (max-width: 640px) {
    .comparison-row { grid-template-columns: 1fr; }
    .video-grid { grid-template-columns: 1fr; }
    .hero { padding: var(--space-6); }
  }
</style>

<main class="project-page">

  <!-- ── Hero ── -->
  <section class="hero">
    <h1 class="project-title">Semantically Grounded Skill Discovery via Vision-Language Models</h1>
    <p class="project-meta"><strong>Bachelor's Dissertation</strong> · University of Bath · 2026</p>
    <div class="project-links">
      <a href="https://github.com/bmcd243/url_benchmark_clip/">PDF</a>
      <a href="https://github.com/bmcd243/url_benchmark_clip/">Code</a>
    </div>
  </section>

  <!-- ── WIP banner ── -->
  <section class="wip-banner" aria-label="Work in progress notice">
    <strong>Work in Progress</strong>
    Experiments are still running. Results, tables, and videos will be added as they complete.
  </section>

  <!-- ── Abstract ── -->
  <div class="project-card abstract-card">
    <h2>Abstract</h2>
    <p>
      Unsupervised skill discovery methods enable agents to learn diverse behaviours without task-specific rewards,
      but existing approaches rely on task-trained visual encoders that lack semantic structure.
      We replace the standard CNN encoder in DIAYN and APS with a frozen CLIP ViT-B/32 encoder,
      and introduce textured MuJoCo environments designed to activate CLIP's visual priors.
      We evaluate across three locomotion domains — textured walker, quadruped, and cheetah —
      and show that CLIP representations improve both skill diversity during pretraining and
      downstream task performance during finetuning.
    </p>
  </div>

  <!-- ════════════════════════════════════════
       PRETRAINING — LEARNED SKILLS
  ═══════════════════════════════════════════ -->
  <h2 class="section-heading">Pretraining: Learned Skills</h2>
  <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">
    Each video shows a single skill rollout sampled after 2 million pretraining frames.
    Skills are sampled from the learned skill space and executed without any downstream reward signal.
  </p>

  <!-- Environment tabs -->
  <div class="tab-bar" id="pretrain-tabs">
    <button class="tab-btn active" onclick="switchTab('pretrain', 'quadruped', this)">Textured Quadruped</button>
    <button class="tab-btn" onclick="switchTab('pretrain', 'walker', this)">Textured Walker</button>
    <button class="tab-btn" onclick="switchTab('pretrain', 'cheetah', this)">Textured Cheetah</button>
  </div>

  <!-- Quadruped -->
  <div class="tab-panel active" id="pretrain-quadruped">
    <p class="section-subheading">DIAYN CLIP</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>Skill 1</strong>Textured Quadruped · DIAYN CLIP</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>Skill 2</strong>Textured Quadruped · DIAYN CLIP</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>Skill 3</strong>Textured Quadruped · DIAYN CLIP</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>Skill 4</strong>Textured Quadruped · DIAYN CLIP</div>
      </div>
    </div>
    <p class="section-subheading">APS CLIP</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>Skill 1</strong>Textured Quadruped · APS CLIP</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>Skill 2</strong>Textured Quadruped · APS CLIP</div>
      </div>
    </div>
  </div>

 <!-- Walker -->
<div class="tab-panel" id="pretrain-walker">
  <p class="section-subheading">DIAYN CLIP — 16 skills</p>
  <div class="video-grid">
    {% assign diayn_clip_walker = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15" | split: "," %}
    {% assign diayn_clip_walker_files = "video_skill0_4223_2080755100ee0dbb6044.gif,video_skill1_4224_e75c4a02b5ec03ae8af0.gif,video_skill2_4225_e81ddc755811fdb1e57e.gif,video_skill3_4005_54498687b8f10a678dbf.gif,video_skill4_4006_953fd08cb08a31258c71.gif,video_skill5_4007_215580d085c1a69b7ddb.gif,video_skill6_4008_01b1c21c199f1bf8ae8b.gif,video_skill7_4009_d8eee9412d821c859090.gif,video_skill8_4010_74e095b15c232f90ddd2.gif,video_skill9_4216_ffb63da55b97bd4736b8.gif,video_skill10_4217_2001b7372bc0ad44546a.gif,video_skill11_4218_6241a06a1369e1bbadfb.gif,video_skill12_4219_abb0e89f5bf0a8549e83.gif,video_skill13_4220_cb57595346bb21630c40.gif,video_skill14_4221_9c8299eb54b0c03d82d9.gif,video_skill15_4222_526c31647f91b9e3aebc.gif" | split: "," %}
    {% for i in diayn_clip_walker %}
      {% assign file = diayn_clip_walker_files[forloop.index0] %}
      <div class="video-item">
        <img src="/assets/videos/diayn_clip_walker/{{ file }}" alt="DIAYN CLIP Walker Skill {{ i }}" style="width:100%;display:block;">
        <div class="video-caption"><strong>Skill {{ i }}</strong>Textured Walker · DIAYN CLIP</div>
      </div>
    {% endfor %}
  </div>

  <p class="section-subheading">DIAYN CNN — 16 skills</p>
  <div class="video-grid">
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill0_1052_61768ff6c24af0912268.gif" alt="Skill 0" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 0</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill1_1053_97af6de85585f048a1bd.gif" alt="Skill 1" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 1</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill2_1054_222be64aaebae8770ff7.gif" alt="Skill 2" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 2</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill3_1055_f68ec34dc1c6c6cf893e.gif" alt="Skill 3" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 3</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill4_1056_33bd976ebca939d4c7dd.gif" alt="Skill 4" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 4</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill5_1262_9f980eda2a4b566a93bd.gif" alt="Skill 5" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 5</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill6_1263_fd6041b4f3da6564200a.gif" alt="Skill 6" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 6</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill7_1264_efbbb0592c17173d6044.gif" alt="Skill 7" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 7</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill8_1265_b327ac2ea029ca5063fe.gif" alt="Skill 8" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 8</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill9_1266_056a85bf6e5fd67cf35a.gif" alt="Skill 9" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 9</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill10_1267_ab928998d617d5c957f5.gif" alt="Skill 10" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 10</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill11_1268_8d953163af8960f48437.gif" alt="Skill 11" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 11</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill12_1269_a7cbb5e6ad7bffb75182.gif" alt="Skill 12" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 12</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill13_1270_c752a928244860151dc6.gif" alt="Skill 13" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 13</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill14_1271_606f93184bcaf7a0ed14.gif" alt="Skill 14" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 14</strong>Textured Walker · DIAYN CNN</div></div>
    <div class="video-item"><img src="/assets/videos/diayn_cnn_walker/video_skill15_1051_d3cf41f743a5a6eba66c.gif" alt="Skill 15" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 15</strong>Textured Walker · DIAYN CNN</div></div>
  </div>

  <p class="section-subheading">APS CLIP — 10 skills</p>
  <div class="video-grid">
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill0_4216_a942741760313b579f4c.gif" alt="Skill 0" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 0</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill1_4217_2ea4485520609b4bbc55.gif" alt="Skill 1" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 1</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill2_4218_70124a58b275acd8bf1b.gif" alt="Skill 2" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 2</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill3_4219_efc81ef87208f02623e4.gif" alt="Skill 3" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 3</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill4_4220_c858761590c270c22d30.gif" alt="Skill 4" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 4</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill5_4221_42ee25eb974fa88e200f.gif" alt="Skill 5" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 5</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill6_4222_ffb4ed53160a6ad16dd6.gif" alt="Skill 6" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 6</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill7_4223_0fc44056b8a71ff5ba52.gif" alt="Skill 7" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 7</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill8_4224_d5df988e8cb9383f3ef9.gif" alt="Skill 8" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 8</strong>Textured Walker · APS CLIP</div></div>
    <div class="video-item"><img src="/assets/videos/aps_clip_walker/video_skill9_4225_32d59bcabf34965f571a.gif" alt="Skill 9" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 9</strong>Textured Walker · APS CLIP</div></div>
  </div>

  <p class="section-subheading">APS CNN — 10 skills</p>
  <div class="video-grid">
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill0_1684_d5c8e661becebe26b5e9.gif" alt="Skill 0" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 0</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill1_1685_def2381b0f17baea6e7b.gif" alt="Skill 1" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 1</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill2_1686_ba531830a55530683721.gif" alt="Skill 2" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 2</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill3_1687_0ec7cb1776f3a91a4592.gif" alt="Skill 3" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 3</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill4_1688_a50882b7f682636bb48c.gif" alt="Skill 4" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 4</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill5_1689_6789f52d4060258f21c6.gif" alt="Skill 5" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 5</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill6_1690_d5c046a260d7730c158f.gif" alt="Skill 6" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 6</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill7_1691_5fb9adb09ee4266f158b.gif" alt="Skill 7" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 7</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill8_1692_600ddcfdb4a32a8af765.gif" alt="Skill 8" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 8</strong>Textured Walker · APS CNN</div></div>
    <div class="video-item"><img src="/assets/videos/aps_cnn_walker/video_skill9_1693_f9ad72a174fcd2829343.gif" alt="Skill 9" style="width:100%;display:block;"><div class="video-caption"><strong>Skill 9</strong>Textured Walker · APS CNN</div></div>
  </div>
</div>

  <!-- ════════════════════════════════════════
       FINETUNING RESULTS
  ═══════════════════════════════════════════ -->
  <h2 class="section-heading">Finetuning: Downstream Task Performance</h2>
  <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">
    Each video shows the finetuned policy on a downstream task after 100k finetuning frames,
    loaded from the 2M pretraining checkpoint.
  </p>

  <div class="tab-bar" id="finetune-tabs">
    <button class="tab-btn active" onclick="switchTab('finetune', 'quadruped', this)">Textured Quadruped</button>
    <button class="tab-btn" onclick="switchTab('finetune', 'walker', this)">Textured Walker</button>
    <button class="tab-btn" onclick="switchTab('finetune', 'cheetah', this)">Textured Cheetah</button>
  </div>

  <!-- Quadruped finetuning -->
  <div class="tab-panel active" id="finetune-quadruped">
    <p class="section-subheading">Stand</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Quadruped Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>APS CLIP</strong>Quadruped Stand</div>
      </div>
    </div>
    <p class="section-subheading">Walk</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Quadruped Walk</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>APS CLIP</strong>Quadruped Walk</div>
      </div>
    </div>
    <p class="section-subheading">Run</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Quadruped Run</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>APS CLIP</strong>Quadruped Run</div>
      </div>
    </div>
    <p class="section-subheading">Jump</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Quadruped Jump</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>APS CLIP</strong>Quadruped Jump</div>
      </div>
    </div>
  </div>

  <!-- Walker finetuning -->
  <div class="tab-panel" id="finetune-walker">
    <p class="section-subheading">Stand · Walk · Run · Flip</p>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Walker Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Walker Walk</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Walker Run</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>DIAYN CLIP</strong>Walker Flip</div>
      </div>
    </div>
  </div>

  <!-- Cheetah finetuning — CNN vs CLIP comparison -->
  <div class="tab-panel" id="finetune-cheetah">
    <p style="color: var(--text-secondary); margin-bottom: var(--space-5); font-size: 0.92rem;">
      Cheetah is not in the original URLB benchmark, so we run our own CNN baseline —
      enabling a direct side-by-side comparison between CNN and CLIP encoders.
    </p>
    <p class="section-subheading">Run</p>
    <div class="comparison-row">
      <div class="comparison-col">
        <h4>CNN Baseline</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CNN</strong>Cheetah Run</div>
        </div>
      </div>
      <div class="comparison-col">
        <h4>CLIP (Ours)</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP</strong>Cheetah Run</div>
        </div>
      </div>
    </div>
    <p class="section-subheading">Flip</p>
    <div class="comparison-row">
      <div class="comparison-col">
        <h4>CNN Baseline</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CNN</strong>Cheetah Flip</div>
        </div>
      </div>
      <div class="comparison-col">
        <h4>CLIP (Ours)</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP</strong>Cheetah Flip</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════════
       ABLATIONS
  ═══════════════════════════════════════════ -->
  <h2 class="section-heading">Ablation Studies</h2>
  <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">
    All ablations are run on Textured Quadruped with DIAYN CLIP unless otherwise noted.
    Videos show finetuned policies on the downstream stand task.
  </p>

  <div class="ablation-group">
    <h3>Skill Space Size</h3>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>8 Skills</strong>Quadruped Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>16 Skills (default)</strong>Quadruped Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>32 Skills</strong>Quadruped Stand</div>
      </div>
    </div>
  </div>

  <div class="ablation-group">
    <h3>Background Modification</h3>
    <div class="comparison-row">
      <div class="comparison-col">
        <h4>Plain (no texture)</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CNN · Plain Quadruped</strong>Stand</div>
        </div>
      </div>
      <div class="comparison-col">
        <h4>Textured (ours)</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP · Textured Quadruped</strong>Stand</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ablation-group">
    <h3>Larger CLIP Model (ViT-g-14)</h3>
    <div class="comparison-row">
      <div class="comparison-col">
        <h4>ViT-B/32 (default)</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP ViT-B/32</strong>Quadruped Stand</div>
        </div>
      </div>
      <div class="comparison-col">
        <h4>ViT-g-14</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP ViT-g-14</strong>Quadruped Stand</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ablation-group">
    <h3>Pretraining Duration</h3>
    <div class="video-grid">
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>100k frames</strong>Quadruped Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>500k frames</strong>Quadruped Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>1M frames</strong>Quadruped Stand</div>
      </div>
      <div class="video-item">
        <div class="video-placeholder">coming soon</div>
        <div class="video-caption"><strong>2M frames</strong>Quadruped Stand</div>
      </div>
    </div>
  </div>

  <div class="ablation-group">
    <h3>L2 Normalisation</h3>
    <div class="comparison-row">
      <div class="comparison-col">
        <h4>Without L2 normalisation</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP · No L2</strong>Quadruped Stand</div>
        </div>
      </div>
      <div class="comparison-col">
        <h4>With L2 normalisation (default)</h4>
        <div class="video-item">
          <div class="video-placeholder">coming soon</div>
          <div class="video-caption"><strong>DIAYN CLIP · L2</strong>Quadruped Stand</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Citation ── -->
  <h2 class="section-heading">Citation</h2>
  <pre class="citation-block">@thesis{mcdowell2026sgsd,
  title     = {Semantically Grounded Skill Discovery via Vision-Language Models},
  author    = {Ben McDowell},
  year      = {2026},
  school    = {University of Bath},
  type      = {Bachelor's Dissertation}
}</pre>

</main>

<script>
function switchTab(group, env, btn) {
  document.querySelectorAll('#' + group + '-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('[id^="' + group + '-"]').forEach(p => p.classList.remove('active'));
  document.getElementById(group + '-' + env).classList.add('active');
}
</script>