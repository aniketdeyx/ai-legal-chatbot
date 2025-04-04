import { Layout } from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Your AI Legal Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Get instant legal guidance and answers to your legal questions with our AI-powered chatbot.
                Fast, reliable, and always available.
              </p>
              <Link href="/chat">
                <Button size="lg" className="bg-blue-600 cursor-pointer hover:bg-blue-700">
                  Start Chat
                </Button>
              </Link>
            </div>
            
            {/* Image */}
            <div className="flex-1">
              <div className="relative w-[420px] ml-10 h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/imagge.png"
                  alt="AI Legal Assistant"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Get legal assistance anytime, anywhere. Our AI chatbot is always ready to help.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Responses</h3>
              <p className="text-gray-600">
                Receive immediate answers to your legal questions without waiting.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Confidential</h3>
              <p className="text-gray-600">
                Your conversations are private and secure. We prioritize your confidentiality.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have found quick and reliable legal assistance through our AI chatbot.
          </p>
          <Link href="/chat">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Try Now
            </Button>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
