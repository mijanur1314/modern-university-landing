import SectionTitle from "./SectionTitle";
import { programs } from "../data/data";

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Popular Programs" subtitle="Programs" />

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg mb-6" />

              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>

              <p className="text-gray-600 leading-relaxed">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
