import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/footer/logo.png" alt="Logo" className="h-10 mb-4 " />
            <h3 className="text-xl font-bold pb-2">PaintPro</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for premium paints and accessories. Transform your space with quality that lasts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/colors" className="block text-gray-400 hover:text-white transition-colors text-sm">
                See All Colours
              </Link>
              <Link href="/products" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Products
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About US
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Get Support
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About US
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Get Support
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>+94 77 123 4567</p>
              <p>support@paintpro.lk</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 PaintPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
