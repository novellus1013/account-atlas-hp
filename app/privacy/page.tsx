import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { headers } from 'next/headers'
import { getEmailUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.appName}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: "/privacy",
  },
}



export default async function PrivacyPage() {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') ?? 'en'
  const locale = acceptLanguage.startsWith('ko') ? 'ko' : 'en'

  const supportEmailUrl = getEmailUrl('support', siteConfig.appName, locale)


  return (
    <>
      <main className="py-16 sm:py-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Effective as of January 22, 2026</p>

          <div className="prose prose-neutral mt-10 max-w-none">
            <section className="mb-10">
              <p className="leading-relaxed text-muted-foreground">
                This privacy policy applies to the {siteConfig.appName} app (hereby referred to as
                &quot;Application&quot;) for mobile devices that was created by novelus (hereby referred to as
                &quot;Service Provider&quot;) as a Free service. This service is intended for use &quot;AS IS&quot;.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Information Collection and Use</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The Application collects information when you download and use it. This information may include
                information such as:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Your device&apos;s Internet Protocol address (e.g. IP address)</li>
                <li>
                  The pages of the Application that you visit, the time and date of your visit, the time spent on those
                  pages
                </li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The Application does not gather precise information about the location of your mobile device.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The Service Provider may use the information you provided to contact you from time to time to provide
                you with important information, required notices and marketing promotions.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                For a better experience, while using the Application, the Service Provider may require you to provide us
                with certain personally identifiable information, including but not limited to Email. The information
                that the Service Provider request will be retained by them and used as described in this privacy policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Third Party Access</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service
                Provider in improving the Application and their service. The Service Provider may share your information
                with third parties in the ways that are described in this privacy statement.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The Service Provider may disclose User Provided and Automatically Collected Information:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>
                  when they believe in good faith that disclosure is necessary to protect their rights, protect your
                  safety or the safety of others, investigate fraud, or respond to a government request;
                </li>
                <li>
                  with their trusted services providers who work on their behalf, do not have an independent use of the
                  information we disclose to them, and have agreed to adhere to the rules set forth in this privacy
                  statement.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Opt-Out Rights</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                You can stop all collection of information by the Application easily by uninstalling it. You may use the
                standard uninstall processes as may be available as part of your mobile device or via the mobile
                application marketplace or network.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Data Retention Policy</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The Service Provider will retain User Provided data for as long as you use the Application and for a
                reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you have provided
                via the Application, please contact them at{" "}
                <a href="mailto:noveluslab@proton.me" className="text-primary underline hover:no-underline">
                  noveluslab@proton.me
                </a>{" "}
                and they will respond in a reasonable time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Children</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The Service Provider does not use the Application to knowingly solicit data from or market to children
                under the age of 13.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The Service Provider does not knowingly collect personally identifiable information from children. The
                Service Provider encourages all children to never submit any personally identifiable information through
                the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor
                their children&apos;s Internet usage and to help enforce this Policy by instructing their children never
                to provide personally identifiable information through the Application and/or Services without their
                permission. If you have reason to believe that a child has provided personally identifiable information
                to the Service Provider through the Application and/or Services, please contact the Service Provider ({" "}
                <a href="mailto:noveluslab@proton.me" className="text-primary underline hover:no-underline">
                  noveluslab@proton.me
                </a>
                ) so that they will be able to take the necessary actions. You must also be at least 16 years of age to
                consent to the processing of your personally identifiable information in your country (in some countries
                we may allow your parent or guardian to do so on your behalf).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Security</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The Service Provider is concerned about safeguarding the confidentiality of your information. The
                Service Provider provides physical, electronic, and procedural safeguards to protect information the
                Service Provider processes and maintains.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Changes</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify
                you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are
                advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of
                all changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Your Consent</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                By using the Application, you are consenting to the processing of your information as set forth in this
                Privacy Policy now and as amended by us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                If you have any questions regarding privacy while using the Application, or have questions about the
                practices, please contact the Service Provider via email at{" "}
                <a href={supportEmailUrl} className="text-primary underline hover:no-underline">
                  {siteConfig.supportEmail}
                </a>
                .
              </p>
            </section>

            <hr />
            <br />
            <p>This privacy policy page was generated by
              <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">
                App Privacy Policy Generator
              </a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}