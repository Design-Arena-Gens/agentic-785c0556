'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const modules = [
    {
      id: 1,
      title: "Foundations of AI Automation",
      duration: "4 weeks",
      level: "Beginner",
      icon: "🎯",
      description: "Master the fundamentals of AI and automation",
      lessons: [
        { id: "1-1", title: "Introduction to AI & Machine Learning", type: "video", duration: "45 min" },
        { id: "1-2", title: "Understanding Automation Concepts", type: "interactive", duration: "30 min" },
        { id: "1-3", title: "Setting Up Your AI Development Environment", type: "hands-on", duration: "1 hour" },
        { id: "1-4", title: "Python for AI Automation Basics", type: "coding", duration: "2 hours" },
        { id: "1-5", title: "Your First Automation Script", type: "project", duration: "3 hours" }
      ]
    },
    {
      id: 2,
      title: "Natural Language Processing & Chatbots",
      duration: "5 weeks",
      level: "Intermediate",
      icon: "💬",
      description: "Build intelligent conversational AI systems",
      lessons: [
        { id: "2-1", title: "NLP Fundamentals & Text Processing", type: "video", duration: "50 min" },
        { id: "2-2", title: "Working with OpenAI API & GPT Models", type: "hands-on", duration: "1.5 hours" },
        { id: "2-3", title: "Building Your First Chatbot", type: "project", duration: "4 hours" },
        { id: "2-4", title: "Advanced Prompt Engineering", type: "interactive", duration: "1 hour" },
        { id: "2-5", title: "Integrating LLMs into Workflows", type: "coding", duration: "3 hours" },
        { id: "2-6", title: "Multi-Agent AI Systems", type: "project", duration: "5 hours" }
      ]
    },
    {
      id: 3,
      title: "Computer Vision & Image Automation",
      duration: "4 weeks",
      level: "Intermediate",
      icon: "👁️",
      description: "Automate visual tasks with AI vision models",
      lessons: [
        { id: "3-1", title: "Computer Vision Basics", type: "video", duration: "40 min" },
        { id: "3-2", title: "Object Detection & Recognition", type: "hands-on", duration: "2 hours" },
        { id: "3-3", title: "Image Classification Models", type: "coding", duration: "2.5 hours" },
        { id: "3-4", title: "OCR & Document Processing Automation", type: "project", duration: "3 hours" },
        { id: "3-5", title: "Video Analysis & Processing", type: "hands-on", duration: "2 hours" }
      ]
    },
    {
      id: 4,
      title: "Web Scraping & Data Automation",
      duration: "3 weeks",
      level: "Intermediate",
      icon: "🕷️",
      description: "Extract and process data at scale",
      lessons: [
        { id: "4-1", title: "Web Scraping with Beautiful Soup & Selenium", type: "coding", duration: "2 hours" },
        { id: "4-2", title: "API Integration & Data Collection", type: "hands-on", duration: "1.5 hours" },
        { id: "4-3", title: "Data Cleaning with AI Assistance", type: "interactive", duration: "1 hour" },
        { id: "4-4", title: "Building Automated Data Pipelines", type: "project", duration: "4 hours" },
        { id: "4-5", title: "Real-time Data Processing", type: "coding", duration: "2.5 hours" }
      ]
    },
    {
      id: 5,
      title: "Workflow Automation with AI Agents",
      duration: "6 weeks",
      level: "Advanced",
      icon: "⚡",
      description: "Create intelligent automation systems",
      lessons: [
        { id: "5-1", title: "Understanding AI Agents & Autonomy", type: "video", duration: "45 min" },
        { id: "5-2", title: "Building Custom AI Agents", type: "coding", duration: "3 hours" },
        { id: "5-3", title: "LangChain & Agent Frameworks", type: "hands-on", duration: "2 hours" },
        { id: "5-4", title: "Tool Integration & Function Calling", type: "interactive", duration: "1.5 hours" },
        { id: "5-5", title: "Memory & Context Management", type: "coding", duration: "2 hours" },
        { id: "5-6", title: "Building a Complete Automation System", type: "project", duration: "8 hours" }
      ]
    },
    {
      id: 6,
      title: "Business Process Automation",
      duration: "4 weeks",
      level: "Advanced",
      icon: "📊",
      description: "Automate enterprise workflows and operations",
      lessons: [
        { id: "6-1", title: "Process Mining & Analysis", type: "video", duration: "40 min" },
        { id: "6-2", title: "RPA with AI Enhancement", type: "hands-on", duration: "2.5 hours" },
        { id: "6-3", title: "Email & Communication Automation", type: "coding", duration: "2 hours" },
        { id: "6-4", title: "Document Processing & Generation", type: "project", duration: "3 hours" },
        { id: "6-5", title: "CRM & Sales Automation", type: "hands-on", duration: "2 hours" },
        { id: "6-6", title: "End-to-End Business Automation", type: "project", duration: "6 hours" }
      ]
    },
    {
      id: 7,
      title: "Machine Learning Operations (MLOps)",
      duration: "5 weeks",
      level: "Advanced",
      icon: "🔧",
      description: "Deploy and maintain AI systems in production",
      lessons: [
        { id: "7-1", title: "MLOps Fundamentals", type: "video", duration: "50 min" },
        { id: "7-2", title: "Model Training & Versioning", type: "hands-on", duration: "2 hours" },
        { id: "7-3", title: "Deployment Strategies & CI/CD", type: "coding", duration: "3 hours" },
        { id: "7-4", title: "Monitoring & Performance Optimization", type: "interactive", duration: "1.5 hours" },
        { id: "7-5", title: "Scaling AI Systems", type: "hands-on", duration: "2.5 hours" },
        { id: "7-6", title: "Production ML Pipeline", type: "project", duration: "6 hours" }
      ]
    },
    {
      id: 8,
      title: "Advanced AI Automation Projects",
      duration: "8 weeks",
      level: "Expert",
      icon: "🚀",
      description: "Build industry-grade automation solutions",
      lessons: [
        { id: "8-1", title: "AI-Powered Content Generation System", type: "project", duration: "10 hours" },
        { id: "8-2", title: "Intelligent Customer Service Bot", type: "project", duration: "12 hours" },
        { id: "8-3", title: "Automated Trading & Analytics System", type: "project", duration: "15 hours" },
        { id: "8-4", title: "Smart Home Automation with AI", type: "project", duration: "10 hours" },
        { id: "8-5", title: "Healthcare Data Processing Pipeline", type: "project", duration: "12 hours" },
        { id: "8-6", title: "Capstone: Your Custom AI Solution", type: "project", duration: "20 hours" }
      ]
    }
  ];

  const learningMethods = [
    {
      icon: "🎥",
      title: "Video Lectures",
      description: "High-quality video content with expert instructors explaining concepts step-by-step"
    },
    {
      icon: "💻",
      title: "Hands-On Coding",
      description: "Interactive coding exercises with real-time feedback and automated testing"
    },
    {
      icon: "🎮",
      title: "Interactive Simulations",
      description: "Visual simulations and sandbox environments to experiment with AI models"
    },
    {
      icon: "🏗️",
      title: "Real-World Projects",
      description: "Build production-ready automation systems solving actual business problems"
    },
    {
      icon: "👥",
      title: "Community Learning",
      description: "Collaborate with peers, join study groups, and participate in challenges"
    },
    {
      icon: "🎯",
      title: "Personalized Path",
      description: "AI-driven curriculum that adapts to your learning pace and interests"
    }
  ];

  const features = [
    { icon: "⚡", text: "Learn at your own pace" },
    { icon: "🏆", text: "Industry-recognized certificates" },
    { icon: "🔄", text: "Lifetime access to all content" },
    { icon: "💼", text: "Career support & job placement" },
    { icon: "🛠️", text: "Access to premium AI tools" },
    { icon: "📱", text: "Mobile & desktop compatible" }
  ];

  const toggleLesson = (lessonId: string) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const calculateProgress = (moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return 0;
    const completed = module.lessons.filter(l => completedLessons.has(l.id)).length;
    return Math.round((completed / module.lessons.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-2xl">🤖</span>
              <span className="text-purple-300 font-semibold">AI Automation Mastery</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master AI Automation<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform Your Future
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most comprehensive AI automation course with hands-on projects, expert mentorship,
              and cutting-edge techniques used by industry leaders.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Start Learning Free
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20">
                View Curriculum
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <span className="text-3xl">👨‍🎓</span>
                <div className="text-left">
                  <div className="text-2xl font-bold">50,000+</div>
                  <div className="text-gray-400 text-sm">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <div className="text-left">
                  <div className="text-2xl font-bold">4.9/5.0</div>
                  <div className="text-gray-400 text-sm">Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <div className="text-left">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Learn in the Most Effective Way
          </h2>
          <p className="text-xl text-gray-300">
            Multiple learning methods designed for maximum retention and practical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningMethods.map((method, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Curriculum
          </h2>
          <p className="text-xl text-gray-300">
            8 comprehensive modules covering everything from basics to advanced automation
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module) => {
            const progress = calculateProgress(module.id);
            const isExpanded = selectedModule === module.id;

            return (
              <div
                key={module.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedModule(isExpanded ? null : module.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-5xl">{module.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            module.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                            module.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                            module.level === 'Advanced' ? 'bg-orange-500/20 text-orange-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {module.level}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{module.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>⏱️ {module.duration}</span>
                          <span>📚 {module.lessons.length} lessons</span>
                          {progress > 0 && <span className="text-purple-400">✓ {progress}% complete</span>}
                        </div>
                        {progress > 0 && (
                          <div className="mt-3 bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all"
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-white text-2xl ml-4">
                      {isExpanded ? '▲' : '▼'}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-white/10 bg-black/20 p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Lessons</h4>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => {
                        const isCompleted = completedLessons.has(lesson.id);
                        return (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                            onClick={() => toggleLesson(lesson.id)}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                isCompleted ? 'bg-purple-500 border-purple-500' : 'border-gray-500'
                              }`}>
                                {isCompleted && <span className="text-white text-sm">✓</span>}
                              </div>
                              <div>
                                <div className="text-white font-medium">{lesson.title}</div>
                                <div className="text-sm text-gray-400 flex gap-3">
                                  <span className={`${
                                    lesson.type === 'video' ? 'text-blue-400' :
                                    lesson.type === 'coding' ? 'text-green-400' :
                                    lesson.type === 'project' ? 'text-purple-400' :
                                    lesson.type === 'hands-on' ? 'text-orange-400' :
                                    'text-pink-400'
                                  }`}>
                                    {lesson.type === 'video' ? '🎥' :
                                     lesson.type === 'coding' ? '💻' :
                                     lesson.type === 'project' ? '🏗️' :
                                     lesson.type === 'hands-on' ? '🛠️' : '🎮'} {lesson.type}
                                  </span>
                                  <span>⏱️ {lesson.duration}</span>
                                </div>
                              </div>
                            </div>
                            <button className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              isCompleted
                                ? 'bg-gray-600 text-gray-300'
                                : 'bg-purple-600 hover:bg-purple-700 text-white'
                            }`}>
                              {isCompleted ? 'Completed' : 'Start'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white">
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already building AI automation systems and transforming their careers.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all transform hover:scale-105 shadow-2xl">
            Enroll Now - Start Free
          </button>
          <p className="text-gray-400 mt-4">No credit card required • 7-day money-back guarantee</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-400">
            <p className="mb-2">© 2024 AI Automation Mastery. All rights reserved.</p>
            <p className="text-sm">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
