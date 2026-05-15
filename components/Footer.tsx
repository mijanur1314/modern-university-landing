export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">EduVerse</h2>

          <p className="text-gray-400">
            Modern education platform for future leaders.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Programs</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-400">hello@eduverse.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 EduVerse. All rights reserved.
      </div>
    </footer>
  );
}
