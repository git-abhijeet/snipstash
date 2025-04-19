import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Navigation */}
            <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        alt="SnipStash Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <span className="text-2xl font-bold text-blue-600">
                        SnipStash
                    </span>
                </div>
                <div className="space-x-4">
                    <Link
                        href="/auth/signin"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/signup"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign Up Free
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Store, organize, and share code snippets with ease
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            SnipStash is the modern developer&apos;s companion
                            for storing and managing code snippets. Save time by
                            accessing your frequently used code blocks from
                            anywhere.
                        </p>
                        <div className="mt-8 space-x-4 flex">
                            <Link
                                href="/auth/signup"
                                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/auth/signin"
                                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium text-lg"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block bg-white p-6 rounded-lg shadow-xl">
                        <div className="bg-gray-800 rounded-md p-4">
                            <div className="flex mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre className="text-green-400 font-mono text-sm">
                                <code>{`function saveSnippet(code) {
  // Store your code snippet
  SnipStash.save({
    title: "Useful Function",
    language: "javascript",
    code: code,
    tags: ["utility", "helper"]
  });
  
  // Access it anywhere!
  return "Snippet saved!";
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Why use SnipStash?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            Save Time
                        </h3>
                        <p className="text-gray-600">
                            Stop rewriting the same code. Save your snippets
                            once and reuse them across all your projects.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            Stay Organized
                        </h3>
                        <p className="text-gray-600">
                            Categorize and tag your snippets for easy search and
                            retrieval when you need them most.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            Share Easily
                        </h3>
                        <p className="text-gray-600">
                            Collaborate with your team by sharing useful code
                            snippets with colleagues and friends.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-8 max-w-7xl mx-auto">
                <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to organize your code snippets?
                    </h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Join thousands of developers who trust SnipStash for
                        managing their code snippets. Free to start!
                    </p>
                    <Link
                        href="/auth/signup"
                        className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium text-lg inline-block"
                    >
                        Create Your Free Account
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-12 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Image
                                src="/logo.svg"
                                alt="SnipStash Logo"
                                width={30}
                                height={30}
                            />
                            <span className="text-xl font-bold text-blue-600">
                                SnipStash
                            </span>
                        </div>
                        <div className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} SnipStash. All rights
                            reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
