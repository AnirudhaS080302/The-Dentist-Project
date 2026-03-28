import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "01",
      slug: "root-canal-treatment",
      title: "Root Canal Treatment",
      description: "Precision endodontics designed to save your natural teeth. We utilize state-of-the-art micro-imaging to perform thorough cleaning of the root canals, eliminating infection while maintaining the structural integrity of your tooth with absolute comfort. Our advanced techniques ensure a painless experience, preserving your natural smile for years to come.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN5gho5wQ-9WocdkicWtaB73elWDvP8mumLM34PV5MPoFUrXirkK3vZVYxQ8uCCKuf4zNZs4sYcAgy6KZ5THUvIz44X839cmp63e2dZWP7P4Ow5CemSFr1bzodR6uOyEE5vYxeej8LXn52PO-0na22y1UqjGWhhvhaR1EDCyBtkXFA20Av88BLLQ8dD-fWofnzOXyZtNcFe0WijfVqr9hCDzKaPvD3ap9CLL0nxd6S0FLDQ4Lvlt2cpqB5-6R8vEuG4Pavs1T_USY",
      cta: "Book Appointment"
    },
    {
      id: "02",
      slug: "dental-fillings",
      title: "Dental Fillings",
      description: "Invisible restorations that mimic the natural luminosity of your enamel. Our composite fillings are mercury-free and meticulously color-matched to your surrounding teeth, ensuring a durable and aesthetically flawless result. We use the highest quality materials to prevent future decay and restore the full function of your teeth.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0T9GEiHRKFb8IybxhQZ3XPdyqiqNX_Pt5-tPrKAwQoSRYDpPAzFmNFSFRJ2bEc31hOq_RsGXdH3coa5zQuxi_K7DJYvizIl4Sfsew8lscElkPOl4S6d9cPJUW3iiKy9zkXu6fKgRQcM5Robbi-Mn24q9-s1PgBVdwjrhsOilP6g1U40-n10mStJXdRJ8NLJgXHUFwQPID_wSxg4JhKNyS3IeiNy-bruRzjD_LGNVk6oVcLS9ql5Y3xKsITfoZN1-J36yVrvmYfmA",
      cta: "Book Appointment"
    },
    {
      id: "03",
      slug: "extraction",
      title: "Extraction",
      description: "Compassionate care for complex cases. Whether it's a wisdom tooth removal or a non-restorable tooth, our surgical team focuses on atraumatic techniques that minimize discomfort and accelerate the natural healing process. We provide comprehensive post-operative care instructions to ensure a smooth and speedy recovery.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxEZdq8jiwYv5gsxJFur0OkYDUtPVOxYV4vSSXEdnnsRCI-mGq2RdPigkM6Nj6AtoNIkk2bZLPUCX1agHyj2Haj5FK77Naa8eVO-PlB7AT3thfUAN6kv6ovfZr_HnIuN06C5qvk32zPB8d7qir_78NNeTwtD8Wvc3c-VZ1jlkfSf3LteQV5R2rtkmDrrwquGm6G_zR1FohQ7865gdwJp_mYmhuz0rMNDz5XLPfk5Ezr2DWFFU72G2eH16KmhrnZ0OoHp9wiqmhW1I",
      cta: "Book Appointment"
    },
    {
      id: "04",
      slug: "dentures",
      title: "Dentures",
      description: "Restoring more than just a smile. Our custom-designed dentures are engineered for stability, speech clarity, and a natural appearance. We offer both partial and full prosthetic solutions tailored to the unique contours of your face. Experience renewed confidence and the ability to enjoy your favorite foods with our premium denture options.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2HUngjGeUfKnjKALGie2xdEgFSGqCCSrXH3qlI5tZgDvSI_-ycvalhwo11gSqIBwSxIA7zabDP2sVJtWEIwiPb5rbGnyKEU5aG1o_5_ME7eDC8B6DTd3ft2CJMbXBPr45q_ONQeXI1mxpyzQdnmhGVxNO96qK8PrqjPrZfLfw2gbaM54RcVj7OfZU7ScLpgT_vbupKexcSw3aGDiDzjmmXDJ0WmczECVQms_UDZwMzaKzZRxBKTbBbL9iWBYK2JCjWz4eL5xI93k",
      cta: "Book Appointment"
    },
    {
      id: "05",
      slug: "teeth-whitening",
      title: "Teeth Whitening",
      description: "Professional illumination that transforms your aesthetic. Our chairside whitening treatments provide immediate results by safely lifting deep-seated stains, using enamel-safe formulations that prioritize tooth sensitivity management. Achieve a radiant, youthful smile in just one visit with our advanced light-activated whitening technology.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-LHxwZbnTohzCmSqGRPsw_3Za1uHThe4LRmulqJk8WPrvfru_FZjw-wFQBE2D5w1KokFSPRW7f7VKjC-7TRieCB1hBoriqG4rumdzrmFhghf36XCaMMRxpGbqSmy8NVajB9otJ5VQT4bAwjvfXM9lC-tBBVBxyewEcC9t3rJUncGJdx_TcPmX5KaT5qsFI2c5Ggo7c_89pgGT5Wbe5dRuFzxGIaYiHksarORkIJV7iwHKvBc2u5gbZkvR4peDn7ccjIqPK5-2fqM",
      cta: "Book Appointment"
    },
    {
      id: "06",
      slug: "dental-veneers",
      title: "Dental Veneers",
      description: "The ultimate smile makeover. Using ultra-thin porcelain shells, we correct imperfections in color, shape, and alignment. Each veneer is handcrafted to ensure a luminous, symmetrical, and enduring smile transformation. Our minimally invasive approach preserves your natural tooth structure while delivering stunning, life-changing results.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPrFoECXsbuN-39pHpYpvJtZP6GgH5qyuxOP63duZusdS5MAiz_MrVCUJpFgvMZMBk3d34HqXwN14s88VnR_Hil41f8gllwOSJMCM5lFQIJjSqDVBXDiSLrbpbVvDgowSmQq7XAo-TbbrQ0sZ2vKHeYgkTodVzHoDb7zo4_qtWZkHwsM8_jEKWf7-O7sm9I-NBW37mbAE9BIFo9pb0s8PDyjkbUhLnDjgXfnS9FxqqrpJYAXzuP8jCAXUtvjfHEL4VvOaZ4pAiaDE",
      cta: "Book Appointment"
    },
    {
      id: "07",
      slug: "dental-implants",
      title: "Dental Implants",
      description: "Permanent foundations for a confident life. Our implantology specialists use guided surgery technology to place titanium roots that integrate perfectly with your bone, providing a lifetime solution for missing teeth. Enjoy the look, feel, and function of natural teeth with our comprehensive implant restorations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC-31FuAWst7XKJB3YfgfSulENrfVTM9vNtArCMRFR1VS_7D6V6jCMaGLVSZCV1WJzM2fDc2H03NjVYuxNzmi3LSbZnwGrwZeLolGcry0CkPVFKr7nFpyel-AfgsFvNOf0uQb8p5IRImMhiH-L4VBZtBv4hoGRRzMSS3xcWgwJvkpQQGFtk7weiJxExVCLoDOvSM1cp4Eo1iW58DbaFtzICUrVHx2g7rSvZauHyFAmA5oR8FGEJSYkt-PLyAs55RWDhWotllyrmWY",
      cta: "Book Appointment"
    },
    {
      id: "08",
      slug: "orthodontic-treatment",
      title: "Orthodontic Treatment",
      description: "Aligning for health and harmony. From discreet clear aligners to traditional advanced bracing systems, we tailor orthodontic plans to achieve optimal bite function and aesthetic alignment for patients of all ages. Experience a comfortable and efficient journey to a perfectly straight smile with our personalized care.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC22nsfH849gmXGhR6qzpoueApYIAezix0oYNjufG2f9xNvJEEkMmh5A2Pj1BrcAfqxVTFzT2RCwmKVI5Fv2YlLFag5hCvZf-0TzyMdIN8A3odFUW8z2SiwuzHQsS6cmGCTSbHMcHoJ7MmG60N1yj-kvCJ3CjmQKgwVJke_usRdAsqqQ9HhlEDN8FInG6moEwhygGmbxSkH1GToCRflRZjHTn6MWSynxrmwNHv-_M9KWVemrfrT0KSl1iKFOgwHfRNG01XdGta_gt4",
      cta: "Book Appointment"
    }
  ];

  return (
    <main className="pt-24 pb-24">
      {/* Breadcrumb Title Bar */}
      <header className="bg-surface-container-low py-12 mb-24">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex items-center gap-2 mb-4 text-sm font-medium text-on-surface-variant">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">Our Services</span>
          </nav>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-tight tracking-[-0.03em] max-w-4xl">
              Clinical Excellence in <br />Every Detail.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              Explore our comprehensive suite of dental services, where advanced technology meets artistic precision to restore and enhance your oral health.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Services Zig-Zag Layout */}
      <div className="max-w-7xl mx-auto px-8 space-y-24 md:space-y-40">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={service.id} id={service.slug} className="flex flex-col md:flex-row items-center gap-12 md:gap-20 scroll-mt-32">
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`w-full md:w-[60%] space-y-6 ${isEven ? 'order-2 md:order-1' : 'order-2'}`}
              >
                <span className="text-secondary font-bold text-sm">{service.id}</span>
                <h2 className="text-4xl font-bold text-primary tracking-tight">{service.title}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Link to={`/appointment?service=${service.slug}`} className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 group hover:bg-secondary/90 transition-all">
                    {service.cta} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Image Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full md:w-[40%] ${isEven ? 'order-1 md:order-2' : 'order-1'}`}
              >
                <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-sm">
                  <img 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    src={service.image} 
                  />
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Appointment CTA Section */}
      <section className="mt-40 max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-container rounded-xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden"
        >
          {/* Background texture/gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-40"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Begin your clinical journey today.</h3>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-8">
              Scheduled consultations are available Monday through Saturday. Our coordinators will assist you in mapping out your treatment path.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
              <Link to="/appointment" className="bg-secondary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all inline-block">
                Book Online Appointment
              </Link>
              <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Call Our Clinic
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
