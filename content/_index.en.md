---
title: "Home"
date: 2023-10-24
type: landing
translationKey: "home"

design:
  # Default spacing between sections
  spacing: "6rem"

sections:
  - block: hero
    content:
      # Title in HTML to control size/contrast
      title: '<span class="block text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Let’s put Latin America on the map of global research</span>'
      # Larger, high-contrast custom button
      text: |
        <a href="/en/cta/"
           class="inline-block mt-6 text-lg md:text-xl font-extrabold px-7 py-4 rounded-2xl shadow-lg no-underline
                  bg-[#C83737] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C83737]
                  text-white">
          Join us
        </a>
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      background:
        color: "navy"
        image:
          filename: "3azulrojo.png"
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false
        text_color_light: true   # ensure clear text over the background

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: "Who we are"
          text: "MetaDocencia is a nonprofit founded in 2020. Our community brings together people and organizations that build local scientific capacity to transform global science. We grow science through networks—from Latin America to the world."
          image: "quienesomos.jpg"
          button:
            text: "Learn about us"
            url: "/en/who-we-are/"
        - title: "What we do"
          text: "We work so that the production, communication, and application of scientific and technical knowledge are globally equitable."
          feature_icon: check
          features:
            - "We strengthen research infrastructure"
            - "We train researchers and practitioners"
            - "We build community"
          image: "organigramaapaisado.png"
          button:
            text: "Explore our projects"
            url: "/en/what-we-do/"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  - block: stats
    content:
      items:
        - statistic: "NN"
          description: |
            Funded  
            projects
        - statistic: "+1,500"
          description: |
            people  
            trained
        - statistic: "+1,000"
          description: |
            people in the  
            Slack community
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["1rem", 0, "1rem", 0]

  - block: testimonials
    content:
      title: ""
      text: ""
      items:
        - name: "Julio Zetter"
          role: "Chief Coordinator of the SciELO Mexico database and virtual library"
          image: "juliozetter.jpeg"
          text: "I can only thank the instructors who made this course possible; it is undoubtedly the seed of great outcomes. Thank you so much, MetaDocencia."
    design:
      spacing:
        padding: ["6rem", 0, 0, 0]

  - block: cta-card
    content:
      title: "Support Latin American science"
      text: "Here’s how you can help"
      button:
        text: "Join us"
        url: "/en/cta/"
    design:
      card:
        css_class: "bg-primary-700"
        css_style: ""
---
