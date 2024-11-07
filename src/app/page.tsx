import { PackagesSection } from "@/components/packages-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Anonymous Chat Consultation
          </h1>
          <p className="text-lg text-gray-600">
            Professional consultation with complete privacy
          </p>
        </div>

        {/* Packages */}
        <PackagesSection />
      </div>
    </main>
  )
}