
export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    status: string;
    liveUrl?: string;
    repoUrl?: string;
};

export const projects: Project[] = [
    {
        id: 'liftr',
        title: 'Liftr',
        description: 'A weightlifting workout tracker with a focus on local-first design.',
        image: 'placeholder',//TODO: fix img serving
        technologies: ['React Native', 'TypeScript', 'Expo'],
        status: 'In-Progress',
        repoUrl: 'https://github.com/CollinDiMaio/Liftr'
    },

    {
        id: 'portfolio_site',
        title: 'Portfolio Site',
        description: 'A simple static web page that serves as a showcase of my projects.',
        image: 'placeholder',//TODO: fix img serving
        technologies: ['HTML', 'CSS', 'TypeScript', 'Svelte', 'Sveltekit'],
        status: 'Complete'
    },
];