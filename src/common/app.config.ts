/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'alpha-AGI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'Alpha-AGI',
  },
  Meta: {
    Description: 'Launch alpha-AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'alpha-AGI | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://alpha-agi.com',
    // App: 'https://get.alpha-agi.com',
    CardImage: 'https://alpha-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/enricoros/alpha-agi',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://alpha-agi.com/privacy',
    TermsOfService: 'https://alpha-agi.com/terms',
  },
  Docs: {
    Public: (docPage: string) => `https://alpha-agi.com/docs/${docPage}`,
  }
} as const;