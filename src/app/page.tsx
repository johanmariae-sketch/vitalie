'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  Sparkles,
  Heart,
  Droplets,
  Snowflake,
  HandHeart,
  Phone,
  MapPin,
  Clock,
  Instagram,
  ArrowRight,
  Star,
  Users,
  Award,
  Calendar,
  Menu,
  X,
  Play,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState, useRef, useCallback } from 'react';
import {
  LeafDecoration,
  StonesDecoration,
  BambooDecoration,
  WaterDropsDecoration,
  LotusDecoration,
} from '@/components/ui/spa-decorations';

const services = [
  {
    icon: Stethoscope,
    title: 'Consultas Medicas',
    description:
      'Evaluaciones personalizadas con nuestro equipo de especialistas en medicina estética y funcional.',
  },
  {
    icon: Sparkles,
    title: 'Tratamientos Faciales',
    description:
      'Rejuvenecimiento, limpieza profunda, y protocolos avanzados para una piel radiante.',
  },
  {
    icon: Heart,
    title: 'Tratamientos Corporales',
    description:
      'Moldea y cuida tu cuerpo con tecnologia de vanguardia y tecnicas especializadas.',
  },
  {
    icon: Droplets,
    title: 'Sueroterapia',
    description:
      'Terapia intravenosa con vitaminas y minerales para revitalizar tu organismo desde adentro.',
  },
  {
    icon: Snowflake,
    title: 'Crioterapia',
    description:
      'Tratamiento con frío extremo para reducir inflamación, dolor y rejuvenecer tejidos.',
  },
  {
    icon: HandHeart,
    title: 'Masajes & Spa',
    description:
      'Relajación profunda y bienestar con masajes terapéuticos y tratamientos de spa.',
  },
];

const doctors = [
  {
    name: 'Dra. Rosaly Pichardo',
    specialty: 'Fundadora & Directora de Bienestar',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    phone: '18096924071',
    consult: 'RD$2,000',
  },
  {
    name: 'Dr. Carlos Lopez Collado',
    specialty: 'Medicina Estética',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
    phone: '18294236902',
    consult: 'RD$5,000',
  },
  {
    name: 'Dr. Jorge Garcia Vincitore',
    specialty: 'Medicina Regenerativa & Funcional',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    phone: '18096924071',
    consult: 'Consultar',
  },
  {
    name: 'Dra. Arlin Polanco',
    specialty: 'Medicina Estética',
    image:
      'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=400&auto=format&fit=crop',
    phone: '18096924071',
    consult: 'Consultar',
  },
  {
    name: 'Dra. Esmeralda Arredondo',
    specialty: 'Dermatología',
    image:
      'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=400&auto=format&fit=crop',
    phone: '18096924071',
    consult: 'Consultar',
  },
];

const stats = [
  { icon: Users, value: '10,000+', label: 'Pacientes satisfechos' },
  { icon: Award, value: '15+', label: 'Años de experiencia' },
  { icon: Star, value: '5', label: 'Especialistas certificados' },
  { icon: Calendar, value: '6', label: 'Dias a la semana' },
];

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El Centro', href: '#centro' },
  { label: 'Doctores', href: '#doctores' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const videoTestimonials = [
  {
    name: 'Dr. Lopez',
    role: 'Testimonio Profesional',
    thumbnail: 'https://vitalierd.com/wp-content/uploads/drlopez.png',
    quote:
      'En Vitalie combinamos ciencia y bienestar para ofrecer resultados reales. Cada paciente recibe un protocolo personalizado basado en sus necesidades únicas.',
    rating: 5,
  },
  {
    name: 'JCP',
    role: 'Paciente Vitalie',
    thumbnail: 'https://vitalierd.com/wp-content/uploads/jcp2.png',
    quote:
      'Mi experiencia en Vitalie fue transformadora. El equipo médico es excepcional y los resultados hablan por si solos. Totalmente recomendado.',
    rating: 5,
  },
];

const testimonials = [
  {
    name: 'Maria G.',
    treatment: 'Tratamiento Facial',
    quote:
      'Desde mi primera visita a Vitalie me sentí en casa. El equipo es increíblemente profesional y los resultados superaron mis expectativas. Mi piel se ve y se siente renovada.',
    rating: 5,
  },
  {
    name: 'Carolina R.',
    treatment: 'Sueroterapia',
    quote:
      'La sueroterapia cambió mi nivel de energía completamente. El Dr. López explicó todo el proceso y me sentí segura en todo momento. Recomiendo Vitalie al 100%.',
    rating: 5,
  },
  {
    name: 'Andrea P.',
    treatment: 'Crioterapia',
    quote:
      'Después de varias sesiones de crioterapia, la diferencia es notable. El ambiente del centro es hermoso y relajante. Quiérete bonito es más que un slogan, es una experiencia.',
    rating: 5,
  },
  {
    name: 'Laura M.',
    treatment: 'Botox & Rellenos',
    quote:
      'La Dra. Polanco tiene manos de ángel. Resultados naturales, sin exagerar. Me veo fresca y descansada, justo lo que quería. El mejor centro estético de Santo Domingo.',
    rating: 5,
  },
  {
    name: 'Sofia T.',
    treatment: 'Masaje & Spa',
    quote:
      'Vitalie es mi escape semanal. Los masajes son terapéuticos de verdad y el equipo siempre está atento a lo que necesitas. Un lugar donde realmente te cuidan.',
    rating: 5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-md ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2b5134]">
              <span className="text-xl font-bold text-[#f0ece2]">V</span>
            </div>
            <span className="text-2xl font-bold tracking-wide text-[#2b5134]">
              Vitalie
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-semibold text-[#2d3d19] hover:opacity-70 transition-opacity duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/18096924071"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-lg font-bold bg-[#2b5134] text-[#f0ece2] hover:bg-[#2d3d19] transition-colors duration-300"
            >
              Reservar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#2b5134]"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#e8e4da] overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#2d3d19] font-medium py-2 hover:text-[#2b5134] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/18096924071"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 bg-[#2b5134] text-[#f0ece2] rounded-full text-center font-semibold"
              >
                Reservar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#f0ece2] relative overflow-hidden">
      <LeafDecoration className="top-20 -right-8 w-[130px] md:w-[170px] rotate-45" flip />
      <BambooDecoration className="-right-1 bottom-0 h-[300px]" flip />
      <StonesDecoration className="-left-8 bottom-20 w-[130px] md:w-[160px]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#b1bdae] font-medium mb-4">
            Testimonios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2b5134] mb-4">
            Lo que dicen <em className="font-light italic">nuestros pacientes</em>
          </h2>
          <p className="text-[#5a6b4a] max-w-2xl mx-auto text-lg">
            La confianza de nuestros pacientes es nuestro mayor logro.
          </p>
        </motion.div>

        {/* Video Testimonials from vitalierd.com */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {videoTestimonials.map((video, i) => (
            <motion.div
              key={video.name}
              variants={fadeInUp}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={`Testimonio de ${video.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Play Button */}
                <button
                  onClick={() => setActiveVideo(activeVideo === i ? null : i)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-[#2b5134]/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-[#2b5134] transition-colors"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </button>

                {/* Name overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#2b5134]">
                    Video Testimonio
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: video.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#2d3d19] leading-relaxed mb-4 italic text-sm">
                  &ldquo;{video.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2b5134] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {video.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#2b5134] text-sm">{video.name}</p>
                    <p className="text-xs text-[#b1bdae]">{video.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Written Testimonials Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-[#b1bdae]/40 absolute top-8 left-8" />
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center pt-8"
                >
                  <p className="text-lg md:text-xl text-[#2d3d19] leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg font-bold text-[#2b5134]">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-[#b1bdae]">
                    {testimonials[current].treatment}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border-2 border-[#2b5134] flex items-center justify-center text-[#2b5134] hover:bg-[#2b5134] hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-[#2b5134] w-8' : 'bg-[#b1bdae]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border-2 border-[#2b5134] flex items-center justify-center text-[#2b5134] hover:bg-[#2b5134] hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-[#5a6b4a] mb-4">
            Mira más testimonios y contenido en nuestras redes
          </p>
          <a
            href="https://instagram.com/vitalierd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#2b5134] text-[#2b5134] rounded-full font-semibold hover:bg-[#2b5134] hover:text-[#f0ece2] transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Síguenos en @vitalierd
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Navbar */}
      <Navbar />

      {/* Hero with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://videos.pexels.com/video-files/3188080/3188080-uhd_2560_1440_30fps.mp4"
        posterSrc="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1920&auto=format&fit=crop"
        title="Quiérete Bonito"
        date="Tu Bienestar Tiene Lugar"
        scrollToExpand="Desliza para descubrir"
        textBlend
      >
        {/* Intro after hero expand */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2b5134]">
            Tu belleza interior, <em className="font-light italic">reflejada por fuera</em>
          </h2>
          <p className="text-lg md:text-xl text-[#5a6b4a] leading-relaxed mb-8">
            En Vitalie creemos que resaltar tu belleza comienza por quererte a ti mismo.
            Nuestro centro de bienestar integra medicina estética, tratamientos
            corporales y cuidado holístico para ayudarte a sentirte y verte
            increíble.
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2b5134] text-[#f0ece2] rounded-full text-lg font-semibold hover:bg-[#2d3d19] transition-colors"
          >
            Conoce Nuestros Servicios
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </ScrollExpandMedia>

      {/* Services Section */}
      <section id="servicios" className="py-20 md:py-28 bg-white relative overflow-hidden">
        <LeafDecoration className="top-10 -left-10 w-[150px] md:w-[200px]" />
        <LeafDecoration className="bottom-10 -right-10 w-[120px] md:w-[180px]" flip />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b1bdae] font-medium mb-4">
              Nuestros Servicios
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2b5134] mb-4">
              Tratamientos <em className="font-light italic">Especializados</em>
            </h2>
            <p className="text-[#5a6b4a] max-w-2xl mx-auto text-lg">
              Cada tratamiento está diseñado para ofrecerte resultados visibles
              con la mas alta calidad médica y humana.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group p-8 rounded-2xl border border-[#e8e4da] bg-[#faf8f4] hover:bg-[#2b5134] hover:border-[#2b5134] transition-all duration-500 cursor-pointer"
              >
                <service.icon className="w-10 h-10 mb-5 text-[#2b5134] group-hover:text-[#b1bdae] transition-colors duration-500" />
                <h3 className="text-xl font-bold mb-3 text-[#2d3d19] group-hover:text-[#f0ece2] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#5a6b4a] group-hover:text-[#b1bdae] leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2b5134]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#b1bdae]" />
                <p className="text-3xl md:text-4xl font-bold text-[#f0ece2] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-[#b1bdae]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About / El Centro */}
      <section id="centro" className="py-20 md:py-28 bg-[#f0ece2] relative overflow-hidden">
        <StonesDecoration className="-right-5 top-20 w-[140px] md:w-[180px]" />
        <BambooDecoration className="-left-2 top-0 h-full" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#b1bdae] font-medium mb-4">
                El Centro
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2b5134] mb-6">
                Un espacio diseñado <em className="font-light italic">para tu bienestar</em>
              </h2>
              <p className="text-[#5a6b4a] text-lg leading-relaxed mb-6">
                Vitalie es más que un centro estético. Somos un santuario donde
                la ciencia y el cuidado se encuentran para crear experiencias de
                bienestar personalizadas. Cada detalle de nuestro espacio esta
                pensado para que te sientas en calma desde el momento en que
                llegas.
              </p>
              <p className="text-[#5a6b4a] text-lg leading-relaxed mb-8">
                Con tecnología de última generación y un equipo médico
                certificado, ofrecemos tratamientos seguros y efectivos que
                transforman tanto tu apariencia como tu confianza.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2b5134] text-[#2b5134] rounded-full font-semibold hover:bg-[#2b5134] hover:text-[#f0ece2] transition-all duration-300"
              >
                Agenda tu cita
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop"
                  alt="Interior del centro Vitalie"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b5134]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold text-[#2b5134]">15+</p>
                <p className="text-sm text-[#5a6b4a]">Años cuidando<br />tu bienestar</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctores" className="py-20 md:py-28 bg-white relative overflow-hidden">
        <LotusDecoration className="-right-5 top-16 w-[160px] md:w-[200px]" />
        <WaterDropsDecoration className="-left-5 bottom-10 w-[120px] md:w-[160px]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b1bdae] font-medium mb-4">
              Nuestro Equipo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2b5134] mb-4">
              Doctores <em className="font-light italic">Especialistas</em>
            </h2>
            <p className="text-[#5a6b4a] max-w-2xl mx-auto text-lg">
              Profesionales certificados y comprometidos con tu salud, belleza y
              bienestar integral.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.name}
                variants={fadeInUp}
                className="group text-center"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b5134]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-bold text-white">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-[#b1bdae]">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agenda con tu Doctor */}
      <section id="agendar" className="py-20 md:py-28 bg-[#2b5134]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#b1bdae] font-medium mb-4">
              Servicio Personalizado
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#f0ece2] mb-4">
              Agenda con <em className="font-light italic">tu Doctor</em>
            </h2>
            <p className="text-[#b1bdae] max-w-2xl mx-auto text-lg">
              Elige al especialista de tu preferencia y agenda directamente con el.
              Tu consulta, tu doctor, tu horario.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {doctors.map((doctor) => (
              <motion.div
                key={`book-${doctor.name}`}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-[#b1bdae]/30">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#f0ece2]">
                      {doctor.name}
                    </h3>
                    <p className="text-base text-[#b1bdae]">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6 px-1">
                  <span className="text-base text-[#b1bdae]">Consulta</span>
                  <span className="text-lg text-[#f0ece2] font-bold">{doctor.consult}</span>
                </div>
                <a
                  href={`https://wa.me/${doctor.phone}?text=${encodeURIComponent(
                    `Hola! Me gustaría agendar una cita con ${doctor.name} en Vitalie. Quedo atenta a su disponibilidad.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#f0ece2] text-[#2b5134] rounded-xl text-lg font-bold hover:bg-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Agendar con {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920&auto=format&fit=crop"
            alt="Spa treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2b5134]/80" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#f0ece2] mb-6">
              Quiérete <em className="font-light italic">Bonito</em>
            </h2>
            <p className="text-xl text-[#b1bdae] mb-8 max-w-2xl mx-auto">
              Tu transformación comienza con una decisión. Agenda tu consulta y
              descubre lo que Vitalie puede hacer por ti.
            </p>
            <a
              href="https://wa.me/18096924071"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#f0ece2] text-[#2b5134] rounded-full text-lg font-bold hover:bg-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              Reserva por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-28 bg-[#f0ece2] relative overflow-hidden">
        <LotusDecoration className="-left-8 top-10 w-[150px] md:w-[200px]" />
        <WaterDropsDecoration className="-right-5 bottom-16 w-[130px] md:w-[160px]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#b1bdae] font-medium mb-4">
                Contacto
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2b5134] mb-8">
                <em className="font-light italic">Visítanos</em>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2b5134] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f0ece2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3d19] mb-1">Ubicación</h3>
                    <p className="text-[#5a6b4a]">
                      Plaza Jenika 3er piso, Av. Gustavo Mejia Ricart
                      <br />
                      esq. Federico Geraldino
                      <br />
                      Santo Domingo, República Dominicana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2b5134] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#f0ece2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3d19] mb-1">Teléfono</h3>
                    <a
                      href="tel:+18096924071"
                      className="text-[#5a6b4a] hover:text-[#2b5134] transition-colors"
                    >
                      +1 (809) 692-4071
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2b5134] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#f0ece2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3d19] mb-1">Horario</h3>
                    <p className="text-[#5a6b4a]">
                      Lunes a Viernes: 8:00 AM - 8:00 PM
                      <br />
                      Sabados: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2b5134] flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-[#f0ece2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2d3d19] mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/vitalierd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5a6b4a] hover:text-[#2b5134] transition-colors"
                    >
                      @vitalierd
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl h-[450px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2!2d-69.94!3d18.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzEyLjAiTiA2OcKwNTYnMjQuMCJX!5e0!3m2!1ses!2sdo!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Vitalie"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3d19] py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#f0ece2] mb-2">
                Vitalie
              </h3>
              <p className="text-[#b1bdae] text-sm">
                Tu Bienestar Tiene Lugar
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#b1bdae] text-sm">
                Plaza Jenika 3er piso, Santo Domingo, RD
              </p>
              <a
                href="tel:+18096924071"
                className="text-[#f0ece2] text-sm hover:text-white transition-colors"
              >
                +1 (809) 692-4071
              </a>
            </div>

            <div className="flex justify-start md:justify-end gap-4">
              <a
                href="https://instagram.com/vitalierd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2b5134] flex items-center justify-center hover:bg-[#f0ece2] hover:text-[#2b5134] text-[#f0ece2] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/18096924071"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2b5134] flex items-center justify-center hover:bg-[#f0ece2] hover:text-[#2b5134] text-[#f0ece2] transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-[#3a4d25] mt-8 pt-8 text-center">
            <p className="text-[#8a9a7a] text-sm">
              &copy; 2026 Vitalie. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
