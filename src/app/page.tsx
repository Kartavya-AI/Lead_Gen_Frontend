"use client";

import VantaFog from "@/components/VantaFog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import imgLeadGen from '../../public/images/1be899e3-4564-49ea-b2cb-cc19e2711115.jpg'

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const steps = [
    {
        title: "Step 1: Define Your Ideal Lead",
        description:
            "Specify your target criteria such as industry, company size, job titles, and location to start the lead generation process.",
    },
    {
        title: "Step 2: Discover Leads Instantly",
        description:
            "Our AI automatically searches and compiles a list of potential leads that match your business requirements in real-time.",
    },
    {
        title: "Step 3: Qualify and Score Leads",
        description:
            "Each lead is evaluated and scored using AI-driven algorithms based on your custom qualification criteria.",
    },
    {
        title: "Step 4: Launch Personalized Outreach",
        description:
            "Engage leads through automated, tailored emails that adapt to responses and behaviors, increasing conversion chances.",
    },
    {
        title: "Step 5: Track and Optimize",
        description:
            "Monitor open rates, replies, and conversions with performance analytics. Continuously refine your campaigns for better ROI.",
    },
];

export default function Home() {
    const { theme } = useTheme();

    return (
        <main className=" mx-auto ">
            <VantaFog />
            <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    🚀 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        The Ultimate AI Tool to Find, Qualify & Engage Leads at
                        Scale
                    </AnimatedGradientText>
                    <ChevronRight
                        className="ml-1 size-4 stroke-neutral-500 transition-transform
            duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
                    AI-Powered <AuroraText>Lead Generation</AuroraText> Engine —
                    Discover Prospects, Send Smart Emails, Grow Revenue.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Automate lead discovery, qualify with AI, personalize
                    outreach, and track performance — all in one seamless
                    platform.
                </p>

                <div className="">
                    <Link href={"/generate"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Generate Leads
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>
            </section>

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        AI-Powered Lead Generation — Find, Qualify, and Engage
                        Prospects at Scale.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Automate lead discovery, personalize outreach, and
                        supercharge conversions with AI-driven targeting.
                    </p>
                    <Link href={"/generate"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Generate Leads
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <Image
                        src={imgLeadGen} // Replace with your actual image import
                        alt="Lead Generation Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </section>

            <section className="px-4 md:px-36 mt-16">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. What does this platform do?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                This platform helps businesses automate lead
                                generation and outreach. It finds, qualifies,
                                and engages prospects using AI-powered
                                personalization to boost conversions and
                                streamline the sales pipeline.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. How are leads generated?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our system automatically discovers leads based
                                on your business criteria such as industry, job
                                role, location, and more. It also integrates
                                with your CRM for seamless syncing.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. What makes your lead scoring different?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We use AI-driven lead qualification with
                                customizable rules to prioritize leads based on
                                fit, engagement likelihood, and past
                                behavior—ensuring your sales team focuses on the
                                best opportunities.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Is the email outreach personalized?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. Our AI crafts dynamic, personalized emails
                                tailored to each lead&apos;s profile, improving open
                                and reply rates significantly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Who can benefit from this platform?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                B2B companies, agencies, and startups looking to
                                scale client acquisition can benefit. It&apos;s ideal
                                for any business wanting to automate and enhance
                                lead generation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Does it integrate with my CRM?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. We support seamless integration with
                                popular CRMs, ensuring leads, outreach status,
                                and engagement metrics sync in real-time.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Can I track email performance?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. You can monitor open rates, replies,
                                click-throughs, and conversion metrics to
                                evaluate campaign effectiveness and optimize
                                performance.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Is it suitable for large-scale outreach?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Definitely. Our system supports scalable
                                campaigns for hundreds or thousands of leads
                                with smart batching, tracking, and
                                personalization—without sacrificing quality.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
