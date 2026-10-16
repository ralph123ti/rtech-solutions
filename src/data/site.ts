export interface SocialLink {
  label: string
  url: string // leave empty ('') to hide the link
}

export const siteInfo = {
  name: 'RTech Solutions',
  email: 'rtechsolutions26@gmail.com',
  phone: '+263 71 413 223',
  whatsappUrl: 'https://wa.me/263771413223',
  location: 'Harare, Zimbabwe',
  socials: [
    { label: 'GitHub', url: '' }, // add your GitHub profile URL
    { label: 'LinkedIn', url: '' }, // add your LinkedIn profile URL
  ] as SocialLink[],
}

export const aboutInfo = {
  bio: [
    "I'm a passionate developer and digital creator with a strong focus on building useful, scalable and modern solutions.",
    'I love technology, problem-solving and helping businesses bring their ideas to life. I am still building my portfolio, and every project I add here is real work I have made.',
  ],
  skills: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'AI Application Development',
    'API Integration',
    'Digital Marketing',
    'Business Automation',
  ],
}