import Link from "next/link";

function contact() {
  return (
    <div className="bg-black min-h-screen">
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Contact Page</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
          </li>
          <li>
            <Link href="/portofolio" className="text-blue-500 hover:text-blue-700">Portofolio</Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-500 hover:text-blue-700"> Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

export default contact