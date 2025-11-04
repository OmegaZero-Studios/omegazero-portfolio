'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Moon, Sun, ChevronDown } from 'lucide-react';

interface Game {
  title: string;
  description: string;
  tech: string[];
  role: string;
  team: string;
  duration: string;
  links: {
    playStore?: string;
    appStore?: string;
    web?: string;
    video?: string;
  };
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'games', 'about', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      const form = e.currentTarget;
      form.reset();
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with id "${id}" not found`);
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    } finally {
      setIsMenuOpen(false);
    }
  };

  const games: Game[] = [
    {
      title: "Crapsee",
      description: "Multiplayer simulation game based on Craps casino game. Cross-platform with real-time multiplayer using WebRTC.",
      tech: ["Unity3D", "C#", "MongoDB", "Socket.IO", "WebRTC", "PlasticSCM"],
      role: "Team Lead & Lead Programmer",
      team: "6 members",
      duration: "May 2021 - Feb 2025",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.orangeblack.crapsee",
        appStore: "https://apps.apple.com/us/app/crapsee-the-craps-game-app/id1613172827",
        web: "https://crapsee.live/"
      }
    },
    {
      title: "Water Slipper",
      description: "Puzzle game where players avoid obstacles and pull pins to guide a slipper through the correct path.",
      tech: ["Unity3D", "C#", "Photoshop"],
      role: "Team Lead & Programmer",
      team: "2 members",
      duration: "Jul 2020 - Feb 2021",
      links: {
        appStore: "https://apps.apple.com/us/app/water-slipper/id1526680629"
      }
    },
    {
      title: "Fire Escape 3D",
      description: "Action game where players escape environments while avoiding fire and completing objectives.",
      tech: ["Unity3D", "C#", "3DS MAX", "Photoshop"],
      role: "Team Lead & Programmer",
      team: "2 members",
      duration: "May 2020 - Jul 2020",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.BYgames.FireEscape3D"
      }
    },
    {
      title: "Tube Man",
      description: "Fast-paced arcade game where players tap colored tubes before they reach the top.",
      tech: ["Unity3D", "C#", "Photoshop"],
      role: "Team Lead & Programmer",
      team: "2 members",
      duration: "Apr 2020 - May 2020",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.byvlgames.TubeMan"
      }
    },
    {
      title: "Crazy Chemist",
      description: "Puzzle game where players solve chemical reactions by opening different jars.",
      tech: ["Unity3D", "C#", "Blender", "Photoshop"],
      role: "Team Lead & Programmer",
      team: "2 members",
      duration: "Apr 2020",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.BYgames.CrazyChemist"
      }
    },
    {
      title: "The Commando",
      description: "Top-down strategic shooting game with tactical gameplay and enemy AI systems.",
      tech: ["Unity3D", "C#", "Blender", "Mixamo Fuse"],
      role: "Programmer & VFX Artist",
      team: "5 members",
      duration: "Aug 2017 - Mar 2018",
      links: {
        video: "https://www.youtube.com/watch?v=oiI29Lnf-QQ"
      }
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b ${isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'}`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                ΩZ
              </div>
              <span className="font-bold text-xl">OmegaZero Studios</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'games', 'about', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  aria-label={`Navigate to ${item} section`}
                  aria-current={activeSection === item ? 'page' : undefined}
                  className={`capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 ${
                    activeSection === item
                      ? 'text-blue-400'
                      : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={!isDarkMode}
              >
                {isDarkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={!isDarkMode}
              >
                {isDarkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <div className="px-4 py-4 space-y-3" role="menu">
              {['home', 'games', 'about', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  role="menuitem"
                  aria-label={`Navigate to ${item} section`}
                  aria-current={activeSection === item ? 'page' : undefined}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    activeSection === item
                      ? 'bg-blue-600 text-white'
                      : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section id="home" aria-labelledby="hero-heading" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl text-white mb-6">
            NH
          </div>
          <h1 id="hero-heading" className="text-5xl sm:text-6xl font-bold">
            <span>Md Nazmul Haque</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Chowdhury
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Lead Game Developer | Unity Expert | Multiplayer Systems Architect
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className={`px-6 py-3 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="text-3xl font-bold text-blue-500">6+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
            </div>
            <div className={`px-6 py-3 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="text-3xl font-bold text-purple-500">15+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Shipped Games</div>
            </div>
            <div className={`px-6 py-3 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="text-3xl font-bold text-pink-500">1M+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Downloads</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a href="mailto:nazmulredoy.csecu@gmail.com" className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label="Send email to Nazmul Haque">
              <Mail size={20} aria-hidden="true" />
              <span>Get In Touch</span>
            </a>
            <button
              onClick={() => scrollToSection('games')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-300 hover:bg-gray-100'}`}
              aria-label="Navigate to projects section"
            >
              <span>View Projects</span>
              <ChevronDown size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

        {/* Featured Project */}
        <section aria-labelledby="featured-project-heading" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="featured-project-heading" className="text-4xl font-bold mb-4">Featured Project</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>My flagship multiplayer game - 3+ years of development</p>
          </div>
          <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Crapsee</h3>
                  <p className="text-blue-400 font-semibold mb-4">Team Lead & Lead Programmer</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Cross-platform multiplayer simulation game based on Craps casino game. Features real-time multiplayer using WebRTC, 
                    scalable backend with MongoDB, and seamless cross-platform play.
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technical Highlights</div>
                  <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Real-time multiplayer with WebRTC</li>
                    <li>• MongoDB for scalable data management</li>
                    <li>• Cross-platform Unity deployment</li>
                    <li>• Socket-based networking architecture</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {games[0].tech.map(tech => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={games[0].links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Download Crapsee on Google Play Store">
                    <ExternalLink size={16} aria-hidden="true" />
                    <span>Play Store</span>
                  </a>
                  <a href={games[0].links.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label="Download Crapsee on Apple App Store">
                    <ExternalLink size={16} aria-hidden="true" />
                    <span>App Store</span>
                  </a>
                  <a href={games[0].links.web} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" aria-label="Play Crapsee on web browser">
                    <ExternalLink size={16} aria-hidden="true" />
                    <span>Play Web</span>
                  </a>
                </div>
              </div>
              <div className={`rounded-xl p-8 flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-6xl mb-6">
                    🎲
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Team: {games[0].team} | {games[0].duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Games Portfolio */}
        <section id="games" aria-labelledby="games-heading" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="games-heading" className="text-4xl font-bold mb-4">Game Portfolio</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>15+ shipped titles across mobile, web, and PC platforms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.slice(1).map((game, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`h-48 flex items-center justify-center text-6xl ${isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-200 to-gray-300'}`}>
                  {index === 0 ? '💧' : index === 1 ? '🔥' : index === 2 ? '🎯' : index === 3 ? '🧪' : '🎖️'}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{game.description}</p>
                    <div className="text-xs text-gray-500 mb-2">
                      {game.role} • {game.team} • {game.duration}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {game.tech.slice(0, 3).map(tech => (
                      <span key={tech} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {game.links.playStore && (
                      <a href={game.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-2 rounded text-sm bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label={`Download ${game.title} on Google Play Store`}>
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Play</span>
                      </a>
                    )}
                    {game.links.appStore && (
                      <a href={game.links.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-2 rounded text-sm bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label={`Download ${game.title} on Apple App Store`}>
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>App</span>
                      </a>
                    )}
                    {game.links.video && (
                      <a href={game.links.video} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-2 rounded text-sm bg-red-600 hover:bg-red-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" aria-label={`Watch ${game.title} gameplay video`}>
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Video</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* About Section */}
        <section id="about" aria-labelledby="about-heading" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="about-heading" className="text-4xl font-bold mb-4">About Me</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>6+ years of professional game development experience</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6">Professional Journey</h3>
              <div className="space-y-6">
                <div className={`pb-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">Lead Game Developer</h4>
                      <p className="text-blue-400 text-sm">Crapsee Corp.</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">Feb 2023 - Present</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Overseeing design and programming of games. Planning development for future versions.
                  </p>
                </div>
                <div className={`pb-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">Game Developer</h4>
                      <p className="text-blue-400 text-sm">ORANGEBLACK Software Inc.</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">May 2020 - Jan 2023</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Developed mobile, web, and PC games. Designed Crapsee multiplayer simulation game.
                  </p>
                </div>
                <div className="pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">Lead Game Developer</h4>
                      <p className="text-blue-400 text-sm">AGAMiLabs Ltd.</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">Feb 2019 - May 2019</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Led team of 5-10 members developing mobile games including AR and VR experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-6">Education & Certification</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">B.Sc (Engg.) in Computer Science</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>University of Chittagong</p>
                    <p className="text-xs text-gray-500">2015 - 2019</p>
                  </div>
                  <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h4 className="font-bold">ITEE FE Certification</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full Passer (AM) - October 2019</p>
                  </div>
                </div>
              </div>
              <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-6">Achievements</h3>
                <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏆</span>
                    <span>Runner-up at Quiz Contest - 4th AUW ICT Fest 2018</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🥉</span>
                    <span>Special Mention (4th) - IIUC Programming Contest 2015</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">💻</span>
                    <span>Onsite Contestant - ACM ICPC DHAKA REGIONAL 2015</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Skills Section */}
        <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="skills-heading" className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              A = Team Lead/Managerial • B = Professional • C = Personal Projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">Game Development</h3>
              <div className="space-y-4">
                {[
                  { name: "Unity3D", level: "A" },
                  { name: "C#", level: "A" },
                  { name: "Gameplay Programming", level: "A" },
                  { name: "Multiplayer Systems", level: "A" },
                  { name: "Unreal Engine", level: "C" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        skill.level === 'A' 
                          ? 'bg-green-100 text-green-700'
                          : skill.level === 'B'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full rounded-full ${
                          skill.level === 'A' ? 'bg-green-500 w-full' 
                          : skill.level === 'B' ? 'bg-blue-500 w-4/5' 
                          : 'bg-purple-500 w-3/5'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">Version Control & PM</h3>
              <div className="space-y-4">
                {[
                  { name: "Plastic SCM", level: "A" },
                  { name: "GitHub", level: "A" },
                  { name: "Trello", level: "A" },
                  { name: "Perforce", level: "B" },
                  { name: "Slack", level: "B" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        skill.level === 'A' 
                          ? 'bg-green-100 text-green-700'
                          : skill.level === 'B'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full rounded-full ${
                          skill.level === 'A' ? 'bg-green-500 w-full' 
                          : skill.level === 'B' ? 'bg-blue-500 w-4/5' 
                          : 'bg-purple-500 w-3/5'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">3D & Design</h3>
              <div className="space-y-4">
                {[
                  { name: "Photoshop", level: "C" },
                  { name: "Blender", level: "C" },
                  { name: "Moho Anime Studio", level: "B" },
                  { name: "3DS MAX", level: "C" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        skill.level === 'A' 
                          ? 'bg-green-100 text-green-700'
                          : skill.level === 'B'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full rounded-full ${
                          skill.level === 'A' ? 'bg-green-500 w-full' 
                          : skill.level === 'B' ? 'bg-blue-500 w-4/5' 
                          : 'bg-purple-500 w-3/5'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="contact-heading" className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Open to senior roles, studio partnerships, and freelance opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:nazmulredoy.csecu@gmail.com" className={`flex items-center space-x-3 p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} aria-label="Send email to nazmulredoy.csecu@gmail.com">
                  <Mail className="text-blue-500" size={20} aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>nazmulredoy.csecu@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+8801852114544" className={`flex items-center space-x-3 p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} aria-label="Call +880 1852 114544">
                  <div className="text-green-500 text-xl" aria-hidden="true">📱</div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+880 1852 114544</div>
                  </div>
                </a>
                <a href="skype:nazmulredoy.csecu?chat" className={`flex items-center space-x-3 p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} aria-label="Chat on Skype with nazmulredoy.csecu">
                  <div className="text-blue-400 text-xl" aria-hidden="true">💬</div>
                  <div>
                    <div className="font-semibold">Skype</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>nazmulredoy.csecu</div>
                  </div>
                </a>
                <div className="flex items-center space-x-3 p-3 rounded-lg">
                  <div className="text-purple-500 text-xl">📍</div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>
              <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="flex space-x-4">
                  <a href="https://github.com/nazmulhaque" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`} aria-label="Visit Nazmul Haque's GitHub profile">
                    <Github size={24} aria-hidden="true" />
                  </a>
                  <a href="https://linkedin.com/in/nazmulhaque" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`} aria-label="Visit Nazmul Haque's LinkedIn profile">
                    <Linkedin size={24} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className={`rounded-xl p-8 shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="contact-name" className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email <span aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  aria-disabled={formStatus === 'sending'}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    formStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : formStatus === 'sending'
                      ? 'bg-gray-600 text-gray-300 cursor-wait'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? '✓ Message Sent!' : 'Send Message'}
                </button>
                {/* Live region for form status announcements */}
                <div
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className="sr-only"
                >
                  {formStatus === 'sending' && 'Sending your message...'}
                  {formStatus === 'success' && 'Message sent successfully!'}
                </div>
              </form>
            </div>
          </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`} role="contentinfo">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
              ΩZ
            </div>
            <span className="font-bold">OmegaZero Studios</span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Md Nazmul Haque Chowdhury. All rights reserved.
          </p>
          <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
