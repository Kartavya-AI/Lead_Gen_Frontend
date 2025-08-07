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
import img1 from "../../public/images/AI.jpg";
import img2 from "../../public/images/Custom.jpg";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ShimmerButton } from "@/components/magicui/shimmer-button";


const steps = [
    {
        title: "Step 1: Enter a Query",
        description:
            "Start by typing your investment question like 'Analyze Apple Inc for DCF analysis with 5 years of annual data'.",
    },
    {
        title: "Step 2: Run Analysis",
        description:
            "Click the 'Run DCF Analysis' button. Our AI will fetch and process real-time financial data instantly.",
    },
    {
        title: "Step 3: Review the Report",
        description:
            "Get a detailed report with financial metrics, DCF calculations, valuation, and expert-level insights—all in human-friendly language.",
    },
    {
        title: "Step 4: Make Informed Decisions",
        description:
            "Use the AI-generated intrinsic value, price comparison, and recommendations to decide whether to buy, hold, or sell.",
    },
    {
        title: "Step 5: Repeat Anytime",
        description:
            "Analyze any company as often as you want. The assistant is live 24/7 with updated market data at your fingertips.",
    },
];

export default function Home() {
    const { theme } = useTheme();

    return (
        <main className=" mx-auto ">
            <VantaFog />
            <section className=" mt-20 px-4 md:px-36 flex flex-col justify-center items-center  text-center">
                <div className="group mb-5 relative  mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
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
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        The #1 AI Assistant for Investors Who Want to Grow
                        Without the Guesswork.
                    </AnimatedGradientText>
                    <ChevronRight
                        className="ml-1 size-4 stroke-neutral-500 transition-transform
                        duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Your 24/7 <AuroraText>AI-Powered</AuroraText> Investment
                    Advisor — Live Stock Insights, Smart Decisions, Anytime,
                    Anywhere.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Track stocks, analyze trends, and get expert-level advice —
                    all in real-time, in English & हिंदी.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link href={"/query"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Run a Query
                            </span>
                        </ShimmerButton>
                    </Link>
                    <Link href={"/analyse"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Analyse
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
                        AI-Powered DCF Analyzer – Instantly reveal a company&apos;s
                        true value with data-driven insights.
                    </h2>
                    <Link href={"/query"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Run a Query
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <Image
                        src={img1}
                        alt="Stock Analysis Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Custom AI DCF Analyzer – Instantly uncover true business
                        value with data-driven insights.
                    </h2>
                    <Link href={"/analyse"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Analyse
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
                    <Image
                        src={img2}
                        alt="Stock Analysis Illustration"
                        className="w-full max-w-md"
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
                                This platform lets you perform an AI-powered
                                Discounted Cash Flow (DCF) analysis for any
                                public company. Simply enter a company name or
                                stock symbol, and our system will generate a
                                detailed report including revenue forecasts,
                                cash flow projections, intrinsic value, and
                                investment recommendations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. How accurate is the analysis?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                The analysis is based on publicly available
                                financial data and intelligent projections using
                                modern DCF methodology. While it&apos;s a powerful
                                estimation tool, results should be used as part
                                of broader due diligence before making
                                investment decisions.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Is it free to use?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes! You can use the DCF analysis features
                                completely free of charge. We may introduce
                                premium features in the future for enhanced
                                forecasting, portfolio management, or data
                                exporting.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. What inputs are required from the user?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                All you need to do is enter a simple prompt like
                                &quot;Analyze Apple Inc for DCF analysis with 5 years
                                of data&quot;. Our AI handles the rest — from
                                fetching the data to generating the final
                                valuation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Which companies can I analyze?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                You can analyze any publicly traded company as
                                long as their financial data is accessible.
                                Popular queries include Apple, Tesla, Google,
                                Microsoft, Netflix, and more.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Is my data secure?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. We do not store any personal data or
                                query history. All analysis is performed
                                securely and on-demand without tracking.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Can I download the analysis report?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Currently, we display the results directly on
                                the platform. In future updates, we plan to
                                allow downloads in PDF or Excel format for
                                professional use.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. How long does it take to generate a report?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Most reports are generated within 5–10 seconds.
                                Complex queries or companies with extensive
                                financial histories may take slightly longer.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
