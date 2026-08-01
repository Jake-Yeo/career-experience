export type EvidenceStatus = 'confirmed' | 'clarify'

export type Contribution = { title: string; detail: string; status: EvidenceStatus }
export type Project = { name: string; description: string; role: string; contributions: Contribution[] }
export type Experience = {
  id: string
  company: string
  role: string
  employmentType: string
  period: string
  duration: string
  productName: string
  productUrl?: string
  summary: string
  technologies: string[]
  practices: string[]
  projects: Project[]
  storyPrompts: string[]
  openQuestions: string[]
}

export const invokeMedia: Experience = {
  id: 'invoke-media',
  company: 'Invoke Media',
  role: 'Web Developer',
  employmentType: 'Internship',
  period: 'January 2025 - April 2025',
  duration: '4 months',
  productName: 'Chunks Chunks Chunks',
  productUrl: 'https://www.chunkschunkschunks.com/',
  summary: 'Worked across frontend, backend, and cloud infrastructure on production applications as part of a five-person team, with a primary focus on video upload, processing, clipping, and playback workflows.',
  technologies: ['TypeScript', 'JavaScript', 'Python', 'Next.js', 'React', 'GraphQL', 'AWS AppSync', 'AWS Lambda', 'Amazon S3', 'FFmpeg', 'Auth0', 'PyTest', 'SQL', 'YAML'],
  practices: ['Daily scrum', 'Five-person software team', 'Cross-functional collaboration', 'Code review', 'CI/CD maintenance', 'Figma implementation', 'Miro documentation', 'Test automation'],
  projects: [
    {
      name: 'Chunks Chunks Chunks',
      description: 'An AI-assisted video clipping product that identifies candidate moments from long-form video for short-form social content.',
      role: 'Built core parts of the media pipeline and connected the cloud processing workflow to a responsive Next.js interface. The AI analysis model itself was outside the scope of the work.',
      contributions: [
        { title: 'Multipart video uploads', detail: 'Implemented multipart uploads that sent video chunks directly from the frontend to S3 using expiring presigned URLs, improving the reliability and speed of large uploads.', status: 'confirmed' },
        { title: 'Video normalization and HLS segmentation', detail: 'Used FFmpeg to normalize uploaded videos, convert them to HLS, and segment media into one-second units that downstream AI services could analyze.', status: 'confirmed' },
        { title: 'Event-driven clip generation', detail: 'Built Python Lambda functions triggered by S3 events to process video segments in parallel and assemble selected segments into downloadable MP4 clips.', status: 'confirmed' },
        { title: 'Storage lifecycle and clip delivery', detail: 'Configured S3 lifecycle behavior for generated media and implemented the workflow for storing, streaming, and downloading completed clips.', status: 'confirmed' },
        { title: 'GraphQL backend', detail: 'Created API endpoints through AWS AppSync and contributed GraphQL schemas used by the product frontend.', status: 'confirmed' },
        { title: 'Infrastructure configuration tooling', detail: 'Created a tool that split AWS configuration into service-specific YAML files, combined them for full deployments, and supported deploying selected services independently.', status: 'confirmed' },
        { title: 'Infrastructure recovery', detail: 'Recovered from infrastructure drift by redeploying AWS services while preserving stateful resources such as databases. Completed the recovery as the only available engineer before a CEO-led product demonstration.', status: 'confirmed' },
        { title: 'Testing and documentation', detail: 'Wrote PyTest coverage for Python Lambda behavior and documented AWS infrastructure and media workflows in Miro.', status: 'confirmed' },
      ],
    },
    {
      name: 'TrueLoyalty',
      description: 'A progressive web application for Earls that helps restaurant staff recognize returning guests, understand guest value, and retain service notes.',
      role: 'Focused on frontend delivery, translating Figma designs into the staff workflow used to view tables, guests, rankings, and customer notes.',
      contributions: [
        { title: 'Waitstaff workflow', detail: 'Implemented the opening workflow and responsive customer displays, including loyalty indicators, table data, and controls for sorting guests by importance.', status: 'confirmed' },
        { title: 'Design implementation', detail: 'Translated supplied Figma designs into production components within the existing progressive web application.', status: 'confirmed' },
      ],
    },
  ],
  storyPrompts: [
    'Designing the video pipeline from upload through segmentation, analysis handoff, clip generation, streaming, and download.',
    'Recovering the AWS environment before a CEO-led product demo while protecting stateful resources.',
    'Breaking a large AWS YAML configuration into maintainable service-specific files.',
    'Balancing backend, cloud, and frontend responsibilities on a five-person team.',
    'Leading a weekly scrum and communicating progress or blockers across the software team.',
  ],
  openQuestions: [
    'How much faster or more reliable did multipart uploads become? Even an approximate file size or before/after time helps.',
    'How were one-second segments selected and recombined into a clip after the AI returned candidate timestamps?',
    'Which database engine did the ER diagram describe, and what tables or relationships were most important?',
    'What CI/CD provider did the team use, and which pipeline failures or inefficiencies did you fix?',
    'What tests did you write with PyTest, and did you mock AWS services or use fixtures?',
  ],
}

export const ubcFacultyMedicine: Experience = {
  id: 'ubc-faculty-medicine',
  company: 'UBC Faculty of Medicine',
  role: 'Software Developer',
  employmentType: 'Internship',
  period: 'May 2025 - December 2025',
  duration: '8 months',
  productName: 'Faculty360',
  summary: 'Worked full stack on Faculty360 with two other developers, expanding a small internal application into a production platform for collecting faculty activity data and generating highly structured academic documents.',
  technologies: ['JavaScript', 'Python', 'PostgreSQL', 'SQL', 'GraphQL', 'AWS Lambda', 'OIDC', 'Docker', 'Gotenberg', 'Adobe PDF API', 'Jira', 'Miro'],
  practices: ['Full-stack development', 'Three-person development team', 'Cross-department discovery', 'User support', 'Technical documentation', 'Workflow diagramming', 'Iterative delivery'],
  projects: [
    {
      name: 'Faculty360 document builder',
      description: 'A visual authoring system that turns faculty employment, leave, education, research, and grant data into guideline-compliant academic documents.',
      role: 'Designed and built the central document-generation experience over the eight-month internship, spanning the visual editor, data queries, backend processing, and PDF/DOCX export pipeline.',
      contributions: [
        { title: 'Nested drag-and-drop editor', detail: 'Built a deeply nestable drag-and-drop interface whose components expose their own options and render faculty data as sections, lists, tables, headings, and numbered content.', status: 'confirmed' },
        { title: 'Data-aware formatting', detail: 'Enabled users to associate related records, highlight or label selected values, add headers, number entries, and switch between list and table presentations to satisfy strict guidelines.', status: 'confirmed' },
        { title: 'Frontend SQL query engine', detail: 'Implemented an embedded SQL-based query system that transforms selected faculty data during document generation, including selecting fields and applying formatting instructions.', status: 'confirmed' },
        { title: 'Document conversion pipeline', detail: 'Built Docker and AWS Lambda processing pipelines that used Gotenberg to render documents as PDF, then the Adobe PDF-to-DOCX API to produce editable Word documents.', status: 'confirmed' },
        { title: 'One-click document generation', detail: 'Automated production of multiple specialized 20-50 page documents that previously required substantial manual help, often from a co-op student, to assemble for each faculty member.', status: 'confirmed' },
      ],
    },
    {
      name: 'Faculty360 platform',
      description: 'The broader data platform used to collect and manage faculty career, education, research, leave, and grant information.',
      role: 'Contributed across frontend, backend, database, cloud authorization, support, and production feature delivery as one of three developers.',
      contributions: [
        { title: 'UBC authentication integration', detail: "Implemented an OIDC login flow on AWS and integrated Faculty360 with UBC's institutional sign-in system.", status: 'confirmed' },
        { title: 'Authorization and Lambda roles', detail: 'Implemented application roles and AWS execution roles for Lambda functions to control access across the platform.', status: 'confirmed' },
        { title: 'Database and GraphQL development', detail: 'Built PostgreSQL database functionality and GraphQL-backed application features supporting the expanding faculty data model.', status: 'confirmed' },
        { title: 'Stakeholder collaboration', detail: 'Worked with software, IT, HR, and departmental managers, including stakeholders in gynecology/oncology and family health, to translate complex administrative requirements into shipped features.', status: 'confirmed' },
        { title: 'Documentation and support', detail: 'Documented technical workflows in Miro, supported users, and shipped features for a platform intended for Faculty of Medicine adoption with potential broader UBC rollout.', status: 'confirmed' },
      ],
    },
  ],
  storyPrompts: [
    'Designing a composable document model that supports deep nesting and strict, user-configurable formatting rules.',
    'Building the end-to-end pipeline from structured PostgreSQL data to PDF and editable DOCX output.',
    'Replacing a time-intensive manual document process with repeatable one-click generation.',
    'Integrating UBC institutional login through OIDC and designing application and Lambda authorization roles.',
    'Converting requirements from IT, HR, and medical department managers into a cohesive product.',
    'Scaling a small application into a broader production platform with a three-developer team.',
  ],
  openQuestions: [
    'Which frontend framework and drag-and-drop library powered the document builder?',
    'Did the frontend SQL engine use an existing library, or did you design the parser and execution layer?',
    'Approximately how many faculty members or departments were using Faculty360 by December 2025?',
    'How long did manual document preparation take before Faculty360, and how long did generation take afterward?',
    'What AWS service handled the OIDC integration, and how were application roles represented?',
    'What testing strategy did the team use for nested document templates and PDF/DOCX output?',
  ],
}

export const experiences = [ubcFacultyMedicine, invokeMedia]
