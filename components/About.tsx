'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building responsive, user-friendly applications 
              that make a difference.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development has equipped me with a diverse skill set, from frontend frameworks like 
              React and Next.js to backend technologies and cloud services. I'm always eager to learn new technologies 
              and stay updated with the latest industry trends.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
