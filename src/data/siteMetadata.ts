export const siteMetadata = {
  // Site name, used for og:site_name, RSS, and the footer.
  title: 'Fajar — DevOps / Platform Engineer',
  // The homepage <title>: the site name plus the specialisms, so the one page
  // with no page-specific title still says what the site is about.
  homeTitle: 'Fajar — DevOps & Platform Engineer on OpenShift',
  // Appended to every inner page's <title> so a shared link carries the brand.
  titleSuffix: 'Fajar',
  author: 'Fajar',
  headerTitle: 'FAJAR.DEV',
  description: 'DevOps / Platform Engineer — building platforms that hold up in production.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://fajjjar.my.id',
  siteRepo: 'https://github.com/fajar/fajjjar.my.id',
  siteLogo: '/static/images/logo.svg',
  socialBanner: '/static/images/og-default.png',
  email: 'mailto:fajar@example.com',
  github: 'https://github.com/fajar',
  twitter: 'https://twitter.com/fajarcodes',
  linkedin: 'https://linkedin.com/in/fajar',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    plausibleDataDomain: '',
    umamiWebsiteId: '',
    simpleAnalytics: false,
    googleAnalyticsId: '',
    posthogAnalyticsId: '',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: import.meta.env.PUBLIC_GISCUS_REPO,
      repositoryId: import.meta.env.PUBLIC_GISCUS_REPOSITORY_ID,
      category: import.meta.env.PUBLIC_GISCUS_CATEGORY,
      categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      themeDark: 'dark',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
};
