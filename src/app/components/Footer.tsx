export default function Footer() {
    return (
      <footer className="bg-pink-500 text-white p-4 mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm">© 2024 Sisters in Sync. All rights reserved.</p>
          <ul className="flex gap-4 mt-2 md:mt-0">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  