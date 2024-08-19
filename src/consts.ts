import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Towsif Hassan",
  DESCRIPTION: "Welcome to my portfolio, blog and project showcase site.",
  AUTHOR: "Towsif Hassan",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "towsifhassanz3@gmail.com",
    HREF: "mailto:towsifhassanz3@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "infibrocco",
    HREF: "https://github.com/infibrocco/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "infibrocco",
    HREF: "https://www.linkedin.com/in/towsifhassan/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "infibrocco",
    HREF: "https://twitter.com/infibrocco",
  },
]

