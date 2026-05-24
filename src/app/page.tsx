import {
  FileSearch,
  TrendingDown,
  Heart,
  Calendar,
  ClipboardList,
  Sparkles,
  Send,
  Shield,
  CheckCircle2,
  Quote,
  Star,
  ArrowRight,
  BookOpen,
  Wrench,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { CTAButton } from "@/components/cta-button"
import Link from "next/link"

const steps = [
  {
    number: "1",
    title: "Tell us about your bill",
    description:
      "Answer a few questions about your hospital, procedure, and situation. Takes about 3 minutes.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "We write the letter",
    description:
      "Our AI generates a professional negotiation letter citing Medicare rates, your hospital's specific policies, and applicable federal law.",
    icon: Sparkles,
  },
  {
    number: "3",
    title: "Send it. Save money.",
    description:
      "Download your PDF and mail it. Most hospitals respond within 30 days. Average reduction: 40-60%.",
    icon: Send,
  },
]

const otherProducts = [
  {
    name: "Itemized Bill Request",
    price: "$19",
    description:
      "Before you negotiate, find the errors. Hospitals must provide a line-by-line breakdown — and 30-80% contain billing mistakes.",
    icon: FileSearch,
    tip: "Do this first.",
  },
  {
    name: "Financial Hardship Application",
    price: "$49",
    description:
      "Most nonprofit hospitals are legally required to offer free or reduced care under IRS 501(r). You may qualify and not know it.",
    icon: Heart,
    tip: "Could eliminate the bill entirely.",
  },
  {
    name: "Payment Plan Letter",
    price: "$29",
    description:
      "Can't pay it all now? Propose affordable monthly terms. Prevents collections and stops interest from accruing.",
    icon: Calendar,
    tip: "As low as $25/month.",
  },
]

const testimonials = [
  {
    quote:
      "I was billed $12,000 for an ER visit. After sending the negotiation letter, the hospital agreed to $4,800.",
    name: "Sarah T.",
    saved: "$7,200 saved",
  },
  {
    quote:
      "I didn't know my hospital was nonprofit. The hardship application got my entire $8,500 bill eliminated.",
    name: "Marcus R.",
    saved: "$8,500 eliminated",
  },
  {
    quote:
      "The itemized bill request found $3,200 in duplicate charges I never would have caught on my own.",
    name: "Jennifer L.",
    saved: "$3,200 saved",
  },
]

const faqs = [
  {
    question: "Is this legal?",
    answer:
      "Absolutely. You have a legal right to request an itemized bill, negotiate your charges, and apply for financial assistance. Our letters cite real federal and state laws, including the No Surprises Act and IRS 501(r) requirements. You're simply exercising your rights as a patient.",
  },
  {
    question: "Will this actually work?",
    answer:
      "Most hospitals would rather negotiate than send your account to collections. Studies show that patients who formally dispute their bills receive reductions the majority of the time. The key is knowing what to ask for and how to ask — that's what our letters do.",
  },
  {
    question: "What if the hospital ignores my letter?",
    answer:
      "Our letters include specific response deadlines and reference applicable laws. If a hospital ignores a properly documented request, they risk regulatory complaints and legal liability. We also include follow-up letter templates with escalation language.",
  },
  {
    question: "How is this different from a billing advocate?",
    answer:
      "Billing advocates typically charge $100-200 per hour or take 25-35% of your savings. Our documents give you the same professional-quality letters and legal citations at a fraction of the cost — and you keep 100% of your savings.",
  },
  {
    question: "What if my bill is already in collections?",
    answer:
      "You can still negotiate. Many collection agencies will accept a reduced lump sum or payment plan. Our negotiation letter includes language specifically for accounts in collections.",
  },
  {
    question: "How quickly will I get my documents?",
    answer:
      "Your customized documents are generated instantly after you complete the questionnaire. Download your PDFs right away and send them the same day.",
  },
]

const contentLinks = [
  {
    href: "/blog",
    icon: BookOpen,
    title: "The BillDelete Blog",
    description: "Guides on negotiating medical bills, understanding your rights, and saving money on healthcare.",
    cta: "Read the guides",
  },
  {
    href: "/tools",
    icon: Wrench,
    title: "Free Tools",
    description: "Fair price calculator, charity care eligibility checker, and a medical bill error checklist.",
    cta: "Use the tools",
  },
  {
    href: "/rights",
    icon: Shield,
    title: "Know Your Rights",
    description: "Plain-language guide to everything hospitals are legally required to do for you.",
    cta: "Learn your rights",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAFAF7] px-4 pt-20 pb-20 sm:px-6 lg:px-8 lg:pt-32 lg:pb-28">
        {/* Soft bg blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#166534]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-[#D97706]/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          {/* Urgency stat — above headline */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D97706]/10 px-4 py-2 text-sm font-semibold text-[#B45309]">
            <span className="h-2 w-2 rounded-full bg-[#D97706]" />
            80% of medical bills contain errors
          </div>

          {/* Single headline */}
          <h1 className="text-5xl font-bold tracking-tight text-[#1C2B3A] sm:text-6xl lg:text-7xl">
            Fight your medical bill.{" "}
            <span className="text-[#166534]">We'll write the letter.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#4B5563]">
            A professional negotiation letter citing Medicare rates and federal
            law — customized to your hospital, generated in minutes.
          </p>

          {/* ONE CTA */}
          <div className="mt-10">
            <CTAButton href="/fight" variant="accent" size="lg">
              Write My Negotiation Letter — $49
            </CTAButton>
            <p className="mt-3 text-sm text-[#4B5563]">
              Instant download · Money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <section className="border-y border-[#E5E7EB] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 text-sm text-[#4B5563]">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#D97706] text-[#D97706]" />
              ))}
            </div>
            <span className="font-semibold text-[#1C2B3A]">4.9/5</span>
            <span>rating</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#166534]" />
            <span><span className="font-semibold text-[#1C2B3A]">$2M+</span> saved for patients</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#166534]" />
            <span>Money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#166534]" />
            <span>No personal data stored</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-[#FDF8F0] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1C2B3A] sm:text-4xl">
              Three steps to a lower bill
            </h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#166534] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#166534]">
                    Step {step.number}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#1C2B3A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/fight" variant="accent" size="md">
              Get My Letter — $49
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── MORE WAYS WE CAN HELP (other 3 products) ─────────── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">More ways we can help</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1C2B3A] sm:text-4xl">
              Other documents for your situation
            </h2>
            <p className="mt-3 text-[#4B5563]">
              Not everyone needs a negotiation letter. Sometimes a different approach works better.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {otherProducts.map((product) => {
              const Icon = product.icon
              return (
                <Card key={product.name} className="flex flex-col border-[#E5E7EB]">
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#166534]/10">
                      <Icon className="h-5 w-5 text-[#166534]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{product.name}</CardTitle>
                      <span className="text-lg font-bold text-[#1C2B3A]">{product.price}</span>
                    </div>
                    <CardDescription className="mt-1 text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto flex items-center justify-between pt-0">
                    <span className="text-xs font-semibold text-[#D97706]">{product.tip}</span>
                    <Link
                      href="/fight"
                      className="flex items-center gap-1 text-sm font-semibold text-[#166534] hover:underline"
                    >
                      Get started <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
          <div className="mt-8 rounded-xl border border-[#166534]/20 bg-[#166534]/5 px-6 py-5">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <p className="font-semibold text-[#1C2B3A]">
                  Complete Bill Fight Kit — <span className="text-[#166534]">$99</span>{" "}
                  <span className="text-sm font-normal text-[#4B5563] line-through">$147</span>
                </p>
                <p className="text-sm text-[#4B5563]">
                  All four documents + follow-up letter templates. Save $48.
                </p>
              </div>
              <CTAButton href="/fight" variant="primary" size="sm">
                Get the Full Kit
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-[#FDF8F0] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1C2B3A] sm:text-4xl">
              Real results from real patients
            </h2>
            <p className="mt-2 text-sm text-[#4B5563]">
              Illustrative examples based on typical outcomes
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-white">
                <CardContent className="pt-6">
                  <Quote className="mb-3 h-7 w-7 text-[#166534]/20" />
                  <p className="leading-relaxed text-[#1C2B3A]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#1C2B3A]">{t.name}</p>
                    <Badge className="bg-[#FDF3DC] text-[#B45309] hover:bg-[#FDF3DC]">
                      {t.saved}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1C2B3A] sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mt-12">
            <Accordion>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-[#1C2B3A]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed text-[#4B5563]">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CONTENT LINKS ────────────────────────────────────── */}
      <section className="bg-[#FDF8F0] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-[#4B5563]">
            Free resources
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {contentLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#166534]/10">
                    <Icon className="h-5 w-5 text-[#166534]" />
                  </div>
                  <h3 className="font-semibold text-[#1C2B3A]">{link.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{link.description}</p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-[#166534] group-hover:underline">
                    {link.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="bg-[#166534] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Shield className="mx-auto h-10 w-10 text-white/60" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop overpaying for healthcare.
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Your letter is generated instantly. Backed by a money-back guarantee.
            You keep 100% of your savings.
          </p>
          <div className="mt-10">
            <CTAButton href="/fight" variant="accent" size="lg">
              Write My Negotiation Letter — $49
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  )
}
