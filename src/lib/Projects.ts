const projects = [
	{
		title: 'VR Drummer',
		technologies: ['Unity', 'VR'],
		description:
			'Made a simple VR drummer app in Unity.',
		url: 'https://www.youtube.com/watch?v=pO47Sb1C1MA',
		code: 'https://github.com/gavyn-ezell/CSE165-FINALPROJECT',
		img: 'vrdrummer.gif'
	},
	{
		title: 'super smash bros. player tracker',
		technologies: ['Express', 'Javascript', 'MySQL', 'GraphQL', 'Twilio'],
		description:
			'Built an Express app where you can create a personalized dashboard for updates on your favorite Smash Ultimate players. Communicates with a MySQL database for user management, and incorporates Start.gg\'s GraphQL API for player stats and info. Also incorporates notification system via Twilio.',
		url: 'https://www.youtube.com/watch?v=C5CvZujBBcg',
		code: 'https://github.com/gavyn-ezell/startgg-project',
		img: 'startggapp.gif'
	},
	{
		title: 'Ray tracer from Scratch',
		technologies: ['C++'],
		description:
			'Built an executable ray tracer completely from scratch in C++. Additionally built a script to help translate simple .obj files into a readable input/scene file format. Additionally uses a bounding volume hierarchy to accelerate rendering times.',
		url: '',
		code: 'https://github.com/gavyn-ezell/raytracer',
		img: 'raytrace.png'
	},
	{
		title: 'Gavyn\'s Voyage',
		technologies: ['Three.js', 'Javascript'],
		description:
			'A fun 3D website for others to learn about me!',
		url: 'https://gavyns-voyage.vercel.app/',
		code: 'https://github.com/gavyn-ezell/gavyns-voyage',
		img: 'voyage.gif'
	},
	{
		title: 'Eventify',
		technologies: ['MongoDB', 'React', 'Express', 'Javascript', 'AWS'],
		description:
			'Participated in ACM @ UCSD\'s Spring 2023 Project Group. Worked in a team of 6 to complete a simple MERN app for promoting and browsing events on campus. Did API development and database management.',
		url: 'https://www.youtube.com/watch?v=RAc_uTXVx88',
		code: 'https://github.com/acmucsd-projects/sp23-hack-team-3',
		img: 'eventify.gif'
	},
];

export default projects;
