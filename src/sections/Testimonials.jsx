import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
  const testimonial = {
    feedback:
      "Professional penetration testing engagement delivered on time. The report was clear, prioritized by risk, and included actionable remediation steps for every finding.",
    name: "Client",
    company: "Security Engagement",
    location: "Confidential",
  };

  return (
    <section
      id="testimonials"
      className="relative py-0 px-5"
    >
      <GradientSpheres
        sphere1Class="testimonial-gradient-sphere testimonial-sphere-1"
        sphere2Class="testimonial-gradient-sphere testimonial-sphere-2"
      />

      <div className="container mx-auto relative z-10">
        <TitleHeader
          title="Client Feedback"
          number="07"
          text="Trusted collaboration and real-world security delivery."
        />

        <div className="mt-20 flex justify-center">
          <div className="max-w-3xl w-full bg-black-300 border border-white/10 rounded-3xl p-10 backdrop-blur-md shadow-lg hover:shadow-xl transition duration-300">

            {/* Quote */}
            <p className="text-gray-300 text-lg leading-relaxed italic">
              &ldquo;{testimonial.feedback}&rdquo;
            </p>

            {/* Divider */}
            <div className="mt-8 h-px bg-white/10 w-full"></div>

            {/* Client Info */}
            <div className="mt-6">
              <h4 className="text-white font-semibold">
                {testimonial.name}
              </h4>
              <p className="text-blue-400 text-sm">
                {testimonial.company}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonial.location}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
