import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Camera,
  Video,
  PenTool,
  Mic,
  TrendingUp,
  Users,
  Award,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    { name: 'Photography/Videography', icon: Camera, level: 90 },
    { name: 'Design', icon: PenTool, level: 85 },
    { name: 'Content Editing', icon: PenTool, level: 95 },
    { name: 'Hosting', icon: Mic, level: 80 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Content Creator - Bánh Bao Thúy Đỗ',
      description: 'Participated in developing scripts and acting for TikTok channel Bánh Bao Thúy Đỗ',
      achievements: [
        'Many videos with 1-3 million views',
        'Average interaction > 1k likes',
        '4 months of work'
      ],
      category: 'Content Creation'
    },
    {
      id: 2,
      title: 'Collaborator Booking KOL/KOC - TikToday',
      description: 'Supported booking and establishing relationships with KOL/KOCs',
      achievements: [
        'Supported more than 15 campaign bookings',
        'Established relationships with nearly 40 KOL/KOCs',
        '3 months of work'
      ],
      category: 'Marketing'
    },
    {
      id: 3,
      title: 'Marketing Intern - MAAS',
      description: 'Conducted market research, wrote content, implemented email marketing, and developed communication strategies',
      achievements: [
        'Deep market research',
        'Implemented email marketing',
        'Developed communication strategies'
      ],
      category: 'Marketing'
    }
  ]

  const achievements = [
    {
      title: 'Swin-Biz-Case Challenge',
      description: 'Proposal for a revenue increase plan for the GWS brand',
      type: 'Competition'
    },
    {
      title: 'Startup Business 2025',
      description: 'Proposal for a business plan for the "Freelance Store" app',
      type: 'Competition'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-pink-600"
            >
              Thuy Portfolio
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-pink-100"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === section.id
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Background Hero"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none select-none"
          style={{ objectPosition: 'center' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                TT
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              PHAM THANH THUY
            </h1>
            <p className="text-xl md:text-2xl text-pink-600 mb-8 font-medium">
              Social Media Intern
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              4th-year Journalism student with a passion for Marketing and Content Creation. Experienced in building viral content and managing marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3"
              >
                Contact
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 text-pink-400 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                 I am Pham Thanh Thuy, a 4th-year Journalism student at the University of Social Sciences and Humanities, HCMC, with a special passion for Marketing. Previously, I interned at MAAS as a Marketing Intern, responsible for market research, content writing, email marketing, and communication planning for the company.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 Currently, I am a Content Creator for the TikTok channel "Banh Bao Thuy Do" with many viral videos. Through this application, I hope to join the team, not only to learn but also to contribute with my experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <PenTool className="w-6 h-6 text-pink-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Has design thinking</h3>
                  </div>
                  <p className="text-gray-600">
                    Not only at work, but also in team assignments at school, I am always responsible for design and bring high results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-6 h-6 text-pink-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Early internship</h3>
                  </div>
                  <p className="text-gray-600">
                    Became a Marketing intern from the beginning of my 3rd year and was able to improve both writing and design skills early.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-pink-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Versatile</h3>
                  </div>
                  <p className="text-gray-600">
                    Besides design and writing, I can also take photos, shoot videos, and host events (MC).
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{skill.name}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="max-w-4xl mx-auto border-pink-100">
              <CardHeader>
                <CardTitle className="text-pink-600">Special</CardTitle>
                <CardDescription>
                  Experienced in making proposals for marketing competitions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Proposal to increase revenue for GWS brand
                    </h4>
                    <Badge variant="secondary">Swin-Biz-Case Challenge</Badge>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Proposal for business plan for "Freelance Store" app
                    </h4>
                    <Badge variant="secondary">Startup Business 2025</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="border-pink-200 text-pink-600">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        Project {project.id}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Achievements:</h4>
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                        <p className="text-gray-600 mb-3">{achievement.description}</p>
                        <Badge variant="secondary">{achievement.type}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feel free to contact me to discuss collaboration opportunities or learn more about my experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-pink-100">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-pink-600 mr-3" />
                        <span className="text-gray-600">thuy.pham@email.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-pink-600 mr-3" />
                        <span className="text-gray-600">+84 xxx xxx xxx</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-pink-600 mr-3" />
                        <span className="text-gray-600">Ho Chi Minh City, Vietnam</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Social Media</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      <Button variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                        <Github className="w-4 h-4 mr-2" />
                        TikTok
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-pink-100 text-center">
                  <p className="text-gray-600 mb-4">
                    Ready to start a new project? Contact me today!
                  </p>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Pham Thanh Thuy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

