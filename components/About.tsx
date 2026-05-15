import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
          alt="Campus"
          className="rounded-3xl"
        />

        <div>
          <SectionTitle title="About Our University" subtitle="About" />

          <p className="text-gray-600 leading-relaxed text-lg">
            We provide innovative education with practical learning, global
            exposure, experienced faculty, and modern infrastructure to help
            students become future leaders.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-indigo-600">15K+</h3>

              <p className="text-gray-600 mt-2">Students Enrolled</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-indigo-600">250+</h3>

              <p className="text-gray-600 mt-2">Expert Faculties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
