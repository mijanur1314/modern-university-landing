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
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>

                <p className="text-gray-600 leading-relaxed">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
