"use client"

export default function InfoCenterPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Information Center</h1>
          <p className="text-lg text-gray500">Learn more about our policies, guidelines, and customer support</p>
        </div>

        <div className="space-y-12">

          {/* Guides */}
          <section id="guides" className="glass-card">
            <h2 className="text-2xl font-bold text-Orange mb-6">📘 Guides</h2>
            <div className="space-y-4">
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How to shop with us?</summary>
                <p className="text-gray600 mt-2">
                  Explore products by category, add your favorite items to cart, and checkout securely with multiple
                  payment options.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How to find your perfect size?</summary>
                <p className="text-gray600 mt-2">
                  Each product includes a size chart. Measure your foot length and compare it to our sizing guide for the best fit.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Do you have style guides?</summary>
                <p className="text-gray600 mt-2">
                  Yes! We regularly post fashion tips and sneaker styling ideas on our blog and newsletters.
                </p>
              </details>
            </div>
            <div id="terms-sale"></div>
          </section>

          {/* Terms of Sale */}
          <section className="glass-card">
            <h2 className="text-2xl font-bold text-Orange mb-6">🧾 Terms of Sale</h2>
            <div className="space-y-4">
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Order Confirmation</summary>
                <p className="text-gray600 mt-2">
                  Once your order is placed, you'll receive an email confirmation with product details and tracking ID once shipped.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Returns & Refunds</summary>
                <p className="text-gray600 mt-2">
                  You can return items within 30 days in original packaging for a refund or exchange.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Payment Errors</summary>
                <p className="text-gray600 mt-2">
                  In case of failed payments, your account will not be charged. Retry or contact our support team for help.
                </p>
              </details>
            </div>
            <div id="terms-use"></div>
          </section>

          {/* Terms of Use */}
          <section className="glass-card">
            <h2 className="text-2xl font-bold text-Orange mb-6">⚖️ Terms of Use</h2>
            <div className="space-y-4">
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">User Responsibilities</summary>
                <p className="text-gray600 mt-2">
                  Users must provide accurate information and respect others while interacting with our website.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Content Ownership</summary>
                <p className="text-gray600 mt-2">
                  All product images, text, and designs belong to our brand. Unauthorized use is prohibited.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Restricted Activities</summary>
                <p className="text-gray600 mt-2">
                  Spamming, data scraping, or fraudulent activities will lead to account suspension.
                </p>
              </details>
            </div>
            <div id="privacy"></div>
          </section>

          {/* Privacy Policy */}
          <section className="glass-card">
            <h2 className="text-2xl font-bold text-Orange mb-6">🔒 Privacy Policy</h2>
            <div className="space-y-4">
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Data Collection</summary>
                <p className="text-gray600 mt-2">
                  We collect minimal data like your name, email, and shipping address to fulfill orders and provide better service.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Cookie Usage</summary>
                <p className="text-gray600 mt-2">
                  Cookies help us enhance your experience by remembering preferences and improving recommendations.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Data Security</summary>
                <p className="text-gray600 mt-2">
                  All your data is encrypted using industry-standard protocols and never sold to third parties.
                </p>
              </details>
            </div>
            <div  id="help"></div>
          </section>

          {/* Help */}
          <section className="glass-card">
            <h2 className="text-2xl font-bold text-Orange mb-6">🆘 Help & Support</h2>
            <div className="space-y-4">
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How to contact support?</summary>
                <p className="text-gray600 mt-2">
                  You can reach our support team via live chat, email, or call. We’re available 24/7 to help you.
                </p>
              </details>
              <details className="border border-gray300 rounded-lg p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Response Time</summary>
                <p className="text-gray600 mt-2">
                  Our average response time is under 2 hours for most queries.
                </p>
              </details>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card text-center">
            <h2 className="text-2xl font-bold text-Orange mb-6">Frequently Asked Questions</h2>
            <p className="text-gray600 mb-6">
              Get answers to the most common questions related to orders, payments, and returns.
            </p>
            <a
              href="/contact"
              className="bg-Orange hover:bg-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Contact
            </a>
          </section>

        </div>
      </div>
    </div>
  )
}
