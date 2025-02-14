// place files you want to import through the `$lib` alias in this folder.
const Projects = [
    {
        title: 'TwoFrame',
        type: 'Web Application',
        skills: ["Skills: ", 'TypeScript, ', 'Next.js, ', 'Tailwind, ', 'HeroUI, ', 'Supabase, ', 'Drizzle, ', 'Docker, ', 'Python'],
        github: 'https://github.com/TwoFrame/twoframe',
        bullets: [
            "Formed a small team of developers to make a full-stack Next.js site for managing video game tournaments.", 
            "Designed a data schema and developed a fully functioning backend using Supabase.",
            "Wrote a script to properly generate and display double-elimination brackets that take into account fair seeding and double-jeopardy avoidance."
        ],
        gif: 'twoframe.gif'
        

    },
    {
        title: 'VR Drummer',
        type: '3D Unity Game',
        skills: ['Skills: ', 'Unity, ', 'C#, ', 'Meta Quest Development'],
        github: 'https://github.com/gavyn-ezell/CSE165-FINALPROJECT',
        site:'https://www.youtube.com/watch?v=pO47Sb1C1MA',
        bullets: [
            'Designed and created a Quest 2 VR game to simulate a real life drum kit, and included a simple 3D interfaced metronome.'
        ],
        gif: 'vrdrummer.gif'
    },
    {
        title: 'Super Smash Bros. Player Tracker',
        type: 'Web Application',
        skills: ['Skills: ', 'Javascript, ', 'Express.js, ', 'MySQL, ', 'API, ', 'GraphQL, ', 'Twilio'],
        github: 'https://github.com/gavyn-ezell/startgg-project',
        site:'https://www.youtube.com/watch?v=C5CvZujBBcg',
        bullets: [
            "Developed a website for monitoring pro players in the Super Smash Bros. Ultimate competitive scene, using Express.js and MySQL.", 
            "Utilized Start.gg’s GraphQL API to fetch data for competitor info, such as their recent tournament placements, upcoming tourneys, and socials.",
            "Incorporated Twilio’s Messaging API for a simple notification system."
        ],
        gif: 'startggapp.gif'
        
    },
    {
        title: 'Ray Tracer from Scratch',
        type: '3D Rendering Engine',
        skills: ['Skills: ', 'C++'],
        github: 'https://github.com/gavyn-ezell/raytracer',
        bullets: [
            "Built a ray tracer in C++ to read a formatted scene description file and render a 2D image.", 
            "Implemented a bounding volume hierarchy for accelerated rendering runtime, cutting hours of rendering time down to seconds.",
            "Additionally created a script for translating .obj files into readable files for the ray tracer."
        ],
        gif: 'raytrace.png'
    },
    {
        title: 'Eventify',
        type: 'Web Application',
        skills: ["Skills: ", 'Javascript, ', 'Express.js, ', 'MongoDB, ', 'Mongoose, ', 'React, ', 'REST'],
        github: 'https://github.com/acmucsd-projects/sp23-hack-team-3',
        site:'https://www.youtube.com/watch?v=RAc_uTXVx88',
        bullets: [
            "Participated in ACM @ UCSD's Spring 2023 Project Group, working with 5 others to build a website for event promotion and search on campus,  using the MERN stack", 
            "Designed and implemented a RESTful API using Express.js to handle authentication, and manage user and event information.",
            "Utilized AWS S3 for simple media storage."
        ],
        gif: 'eventify.gif'
    },
    {
        title: 'Gavyn\'s Voyage',
        type: '3D Website',
        skills: ['Skills: ', 'JavaScript, ', 'Three.js', 'GLSL'],
        github: 'https://github.com/gavyn-ezell/gavyns-voyage',
        site: 'https://gavyns-voyage.vercel.app/',
        bullets: [
            'Built an interactive 3D website to learn about me using Three.js',
            'Wrote multiple shaders in GLSL, inspired by the style and environment of The Legend of Zelda: Wind Waker',
        ],
        gif: 'voyage.gif'
    },
    {
        title: 'VR Air Racing Game',
        type: '3D Unity Game',
        skills: ['Skills: ', 'Unity, ', 'C#, ', 'Meta Quest Development'],
        site: 'https://youtube.com/shorts/iK48hEC3VT8?feature=share',
        bullets: [
            'Built a VR air racing game, using the Quest 2’s hand tracking capabilities for user interaction and control.'
        ],
        gif: 'airrace.gif'
    },
]

export default Projects;