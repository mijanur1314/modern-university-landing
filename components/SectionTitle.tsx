interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <p className="text-indigo-600 font-semibold mb-2 uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}
