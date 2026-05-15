import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="What Students Say" subtitle="Testimonials" />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.review}”
              </p>

              <h4 className="font-bold text-lg">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
