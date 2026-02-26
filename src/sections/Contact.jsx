import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";
import GradientSpheres from "../components/GradientSpheres";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-5 py-0 md:py-0"
    >
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="container mx-auto relative z-20">

        <TitleHeader
          title="Start Your Project"
          number="08"
          text="Let’s discuss your goals and build a scalable, production-ready solution tailored to your business."
        />

        {/* Main Container */}
        <div className="mt-12 md:mt-16 bg-black-300 rounded-3xl border border-white/10 p-6 sm:p-8 md:p-14 shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

            {/* CONTACT FORM */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            {/* INFO BLOCK */}
            <div className="md:col-span-5 space-y-8 text-center md:text-left">

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">
                  What You Can Expect
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  <li>• Clear communication & structured milestones</li>
                  <li>• Scalable full-stack architecture</li>
                  <li>• Production-ready deployment</li>
                  <li>• Long-term maintainability</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3 text-gray-400 text-sm md:text-base">
                <p><strong>Availability:</strong> Open to quality freelance projects</p>
                <p><strong>Timezone:</strong> IST (Flexible overlap for global clients)</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>

              <div className="pt-4">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Prefer direct communication?
                </p>
                <a
                  href="mailto:singhsaurav170@gmail.com"
                  className="text-blue-500 hover:text-blue-400 transition font-medium text-sm md:text-base break-all"
                >
                  singhsaurav170@gmail.com →
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;