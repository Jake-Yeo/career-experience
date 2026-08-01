export type CareerProject = {
  id: string
  name: string
  period: string
  context: string
  status?: string
  description: string
  role: string
  technologies: string[]
  contributions: string[]
  interviewPrompts: string[]
  sourceUrl?: string
  demoUrl?: string
  localPath?: string
}

export const careerProjects: CareerProject[] = [
  {
    id: 'pullup',
    name: 'PullUp',
    period: '2026 - Present',
    context: 'Team software project',
    status: 'In development',
    description: 'A full-stack social event platform for organizing pullups, inviting friends and social circles, managing RSVPs, and sharing event photos.',
    role: 'Major full-stack contributor across data modeling, Express APIs, authentication, Redux architecture, and event workflows.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Express', 'MongoDB', 'Mongoose', 'Auth0', 'MUI', 'Docker', 'Vitest', 'Playwright'],
    contributions: [
      'Created core MongoDB schemas and Express endpoints for users, friend requests, social circles, pullups, and RSVPs.',
      'Built Redux state and async API layers for users, friends, circles, pullups, and RSVP workflows, then wired dashboards and event cards to backend data.',
      'Implemented the pullup detail modal and connected RSVP and event-editing flows across the frontend and backend.',
      'Integrated Auth0 login, backend JWT validation, secure fetching, token-expiry handling, and onboarding/profile flows.',
      'Added API validation, ownership middleware, limits, error handling, 404 behavior, and numerous cross-stack reliability fixes.',
      'Maintained the project through a high volume of team integrations, merge conflict resolution, and incremental production-quality improvements.',
    ],
    interviewPrompts: [
      'Explain how Redux slices and API modules divide state ownership across users, friends, circles, pullups, and RSVPs.',
      'Walk through authentication from Auth0 login to backend JWT validation and secure API requests.',
      'Describe how a pullup is created, loaded, edited, and RSVP’d to across React, Express, and MongoDB.',
      'Discuss a difficult merge or integration bug and how you protected existing team work while resolving it.',
    ],
    localPath: '/Users/jakeyeo/Documents/GitHub/team10/PullUp',
  },
  {
    id: 'sightline',
    name: 'Sightline',
    period: 'October 2025',
    context: 'StormHacks 2025',
    description: 'An accessibility-first PWA that uses a phone camera and AI-generated audio descriptions to help blind and low-vision users understand nearby scenes.',
    role: 'Frontend contributor focused on the camera and scene-description experience across mobile and desktop devices.',
    technologies: ['Next.js', 'TypeScript', 'Gemini', 'ElevenLabs', 'MediaDevices API', 'PWA'],
    contributions: [
      'Built the initial camera interface and photo-capture flow for Mac and iPhone browsers.',
      'Implemented the Describe experience that captures a scene and presents the generated analysis.',
      'Refactored the camera UI into reusable components and resolved duplicate-description and integration issues.',
      'Updated mobile capture behavior under hackathon time constraints.',
    ],
    interviewPrompts: [
      'Explain the browser camera permissions and capture flow across desktop and iPhone.',
      'Discuss accessibility decisions for a camera product designed for blind and low-vision users.',
      'Describe the boundary between your frontend work and the Gemini/ElevenLabs integrations.',
    ],
    sourceUrl: 'https://github.com/xuanhieu2611/Sightline',
    demoUrl: 'https://sightline-xi.vercel.app/describe',
  },
  {
    id: 'sum-up-sundae',
    name: 'Sum-Up Sundae',
    period: 'January 2025',
    context: 'nwHacks 2025',
    status: 'Aquareum.tv Sponsor Prize winner',
    description: 'A weekly video-recap platform where friends share highlights every Sunday and unlock their group’s videos by contributing their own.',
    role: 'Backend-focused full-stack contributor responsible for the data model, API surface, and video upload integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Livepeer', 'Firebase', 'Postman'],
    contributions: [
      'Designed MongoDB schemas and Mongoose models for users, groups, memberships, and weekly video assets.',
      'Created Express routes and endpoints connecting the React client to backend group and video workflows.',
      'Integrated Livepeer video upload and playback and tested API behavior extensively with Postman.',
      'Contributed frontend API wiring, create/join group flows, conditional rendering, group loading, and final bug fixes.',
    ],
    interviewPrompts: [
      'Explain the schema relationships needed for users, groups, weekly posts, and locked viewing.',
      'Walk through the Livepeer upload and playback integration.',
      'Describe how the team scoped and shipped a working full-stack product during one weekend.',
      'Explain what made the project compelling to the Aquareum.tv sponsor judges.',
    ],
    sourceUrl: 'https://github.com/tyin76/sum-up-sundae',
  },
]
