'use client';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with forecasts, maps, and historical data visualization.',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Weather API'],
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Social Media Platform',
      description: 'Social networking platform with posts, comments, likes, and real-time messaging.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'AI Chatbot Integration',
      description: 'Intelligent chatbot with natural language processing for customer support automation.',
      technologies: ['Python', 'TensorFlow', 'React', 'REST API'],
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations and interactive chatbot.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.title}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
