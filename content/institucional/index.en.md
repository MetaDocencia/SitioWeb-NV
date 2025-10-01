---
title: "Institutional"
type: landing
slug: "institucional"
design:
  spacing: "2rem"

sections:

  # ===== Vision =====
  - block: markdown
    id: vision
    content:
      title: ""
      text: |
        <div class="text-center max-w-3xl mx-auto">
          <!-- RED line above Vision -->
          <div style="height:4px;background:#C83737;border-radius:6px;margin:0 auto 1.5rem auto;width:120px;"></div>
          <h3 class="text-2xl font-semibold mb-3">Our vision</h3>
          <p class="text-lg">
            We work to make the production, communication, and application of scientific and technical knowledge equitable globally.
          </p>
        </div>

  # ===== Mission =====
  - block: markdown
    id: mision
    content:
      title: ""
      text: |
        <div class="text-center max-w-3xl mx-auto">
          <!-- BLUE line above Mission -->
          <div style="height:4px;background:#00506F;border-radius:6px;margin:0 auto 1.5rem auto;width:120px;"></div>
          <h3 class="text-2xl font-semibold mb-3">Our mission</h3>
          <p class="text-lg">
            To advance innovation with a local perspective that responsibly builds scientific and technical capacities through the co-creation of networks, learning spaces, and accessible resources for Spanish-speaking communities.
          </p>
        </div>

  # ===== Values =====
  - block: features
    id: valores
    content:
      title: ""
      text: |
        <div class="text-center">
          <div style="height:4px;background:#F77B20;border-radius:6px;margin:0 auto 1.25rem auto;width:120px;"></div>
          <h3 class="text-2xl font-semibold mb-3">Our values</h3>
        </div>
      items:
        - name: "Community"
          description: "To work for and with other people, putting collective interests upfront any individual interest."
        - name: "Integrity"
          description: "To act following these values, building and sustaining trust, through openness and transparency (with attention to privacy), and by being accountable for our actions."
        - name: "Education"
          description: "To contribute to the progress of society through community and individual learning."
        - name: "Wellbeing"
          description: "To treat other folks with kindness, empathy, and respect. We seek to understand each other and prioritize mental and physical health, to maintain a healthy and safe work environment."
        - name: "Diversity"
          description: "To recognize our differences from other people and respectfully welcome all differences."
        - name: "Inclusion"
          description: "To open all doors for as many persons as possible, through universal accessibility to our resources and recognition for the work done."
        - name: "Science and Research"
          description: "To promote knowledge generation based on theory, reasoning, experience, and evidence."
        - name: "Autonomy"
          description: "To act responsibly and according to individual, collective, or regional criteria."
        - name: "Versatility"
          description: "To adapt our actions to the different situations that may arise."
    design:
      columns: 3

  # ===== Governance links =====
  - block: markdown
    id: governance-links
    content:
      title: "Governance"
      text: |
        <div class="max-w-3xl mx-auto text-center">
          <p class="mb-4">
            If you are interested in our governance, we suggest these links:
          </p>
          <div class="flex flex-wrap md:flex-nowrap justify-center gap-3">
            <a href="https://zenodo.org/records/7398893#.Y7gW1HaZNPY"
               class="inline-block px-5 py-2 rounded-md font-semibold text-white no-underline"
               style="background:#00506F;">
               MetaDocencia’s Governance (2022)
            </a>
            <a href="https://zenodo.org/records/12522913"
               class="inline-block px-5 py-2 rounded-md font-semibold text-white no-underline"
               style="background:#C83737;">
               Governance 2.0 (2024)
            </a>
          </div>
        </div>
    design:
      css_class: "bg-gray-50 dark:bg-gray-800"

  # ===== How we are organized (orange CTA card) =====
  - block: cta-card
    id: organization
    content:
      title: "How we are organized"
      text: "At MetaDocencia, we have defined an efficient and versatile organizational structure to tackle the challenges ahead."
      button:
        text: "See the complete organizational chart in Zenodo"
        url: "https://doi.org/10.5281/zenodo.11456152"
    design:
      card:
        css_class: "shadow-sm"
        css_style: "background-color:#F77B20;color:#FFFFFF;"
---
