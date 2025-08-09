import React from 'react';

const MailIcon = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.659-.75a.75.75 0 0 0-.659.38.75.75 0 0 0 .216.999l7.5 5.25a.75.75 0 0 0 .868 0l7.5-5.25a.75.75 0 0 0 .216-.999.75.75 0 0 0-.659-.38H4.159Z" />
  </svg>
);

const PinIcon = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.47 3.84a6.75 6.75 0 0 1 9.69 6.05c0 4.28-5.48 8.87-8.03 10.77a1.5 1.5 0 0 1-1.76 0C8.84 18.76 3.36 14.17 3.36 9.89a6.75 6.75 0 0 1 8.11-6.05Zm.53 4.41a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452H17.21V14.86c0-1.333-.027-3.046-1.857-3.046-1.86 0-2.145 1.45-2.145 2.948v5.69H9.06V9h3.106v1.561h.044c.433-.82 1.492-1.686 3.07-1.686 3.285 0 3.89 2.162 3.89 4.974v6.603zM5.337 7.433a1.804 1.804 0 1 1 0-3.609 1.804 1.804 0 0 1 0 3.609zM6.995 20.452H3.68V9h3.315v11.452z"/>
  </svg>
);

const GitHubIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.082 3.292 9.387 7.863 10.905.575.11.786-.25.786-.556 0-.274-.01-1.002-.015-1.966-3.198.695-3.873-1.542-3.873-1.542-.523-1.328-1.277-1.681-1.277-1.681-1.043-.713.079-.699.079-.699 1.153.081 1.761 1.184 1.761 1.184 1.026 1.76 2.692 1.252 3.347.958.104-.744.402-1.252.732-1.54-2.553-.29-5.237-1.277-5.237-5.684 0-1.255.45-2.28 1.187-3.083-.119-.29-.515-1.46.112-3.043 0 0 .966-.31 3.167 1.177a10.97 10.97 0 0 1 2.885-.388c.979.005 1.965.133 2.885.388 2.2-1.487 3.165-1.177 3.165-1.177.629 1.583.233 2.753.114 3.043.739.803 1.185 1.828 1.185 3.083 0 4.418-2.69 5.39-5.252 5.676.413.355.785 1.052.785 2.12 0 1.53-.014 2.761-.014 3.139 0 .309.208.672.793.556C20.214 21.384 23.5 17.079 23.5 12 23.5 5.648 18.352.5 12 .5Z" clipRule="evenodd"/>
  </svg>
);

const Avatar = ({ name, color = 'bg-green-300' }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center text-white text-2xl font-bold shadow`}> 
      {initials}
    </div>
  );
};

const EquipoCard = ({ persona }) => (
  <div className="w-full bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
    <Avatar name={persona.nombre} color={persona.color} />
    <h3 className="mt-4 text-lg font-semibold text-gray-800">{persona.nombre}</h3>
    <p className="text-gray-600">{persona.titulo}</p>

    <div className="mt-4 w-full space-y-2 text-sm text-gray-700">
      <div className="flex items-center justify-center gap-2">
        <MailIcon className="w-4 h-4 text-blue-600" />
        <a href={`mailto:${persona.email}`} className="text-blue-600 hover:underline">{persona.email}</a>
      </div>
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <PinIcon className="w-4 h-4 text-teal-600" />
        <span>{persona.lugar}</span>
      </div>
    </div>

    <div className="mt-4 flex items-center gap-4">
      <a href={persona.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 hover:opacity-80">
        <LinkedInIcon />
      </a>
      <a href={persona.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-900 hover:opacity-80">
        <GitHubIcon />
      </a>
    </div>
  </div>
);

const Equipo = () => {
  const integrantes = [
    {
      nombre: 'Dayron Zuriel Del Rosal Nicolas',
      titulo: 'Ing. Desarrollo y Gestión de Software',
      email: 'dayron.delrosal@gmail.com',
      lugar: 'Hidalgo, Mex',
      linkedin: 'https://www.linkedin.com/in/dayron-zuriel-del-rosal-nicolas-72472a379/',
      github: 'https://github.com/dayronZ',
      color: 'bg-green-400',
    },
    {
      nombre: 'Leydi Amillaly Flores Mora',
      titulo: 'Ing. Desarrollo y Gestión de Software',
      email: 'Leydi Amillaly@gmail.com',
      lugar: 'Hidalgo, Mex',
      linkedin: 'https://www.linkedin.com/in/leydi-amillaly-flores-mora-299a322b7/',
      github: 'https://github.com/amillaly/',
      color: 'bg-yellow-400',
    },
    {
      nombre: 'Kevin Manuel Ruiz Arteaga',
      titulo: 'Ing. Desarrollo y Gestión de Software',
      email: 'Kevin.Manuel@gmail.com',
      lugar: 'Hidalgo, Mex',
      linkedin: 'http://linkedin.com/in/kevin-manuel-ruiz-arteaga-326a54304/',
      github: 'https://github.com/KEIRMAUZ/',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nuestro Equipo</h2>
      <div className="grid grid-cols-3 gap-6">
        {integrantes.map((persona) => (
          <EquipoCard key={persona.email} persona={persona} />
        ))}
      </div>
    </div>
  );
};

export default Equipo;


