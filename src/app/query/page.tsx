"use client";

import axios from "axios";
import React, { useState } from "react";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { AuroraText } from "@/components/magicui/aurora-text";

interface FinancialMetric {
    year: string;
    value: number;
}

interface UFCFCalculation {
    year: string;
    ebit: number;
    tax_rate: number;
    depreciation: number;
    capex: number;
    wc_change: number;
    ufcf: number;
}

interface DCFAnalysis {
    ufcf_calculations: UFCFCalculation[];
    trends: {
        revenue_trend: string;
        profitability_trend: string;
        cash_flow_trend: string;
    };
}

interface Valuation {
    intrinsic_value: number;
    current_price: number;
    upside_potential: number;
    recommendation: string;
}

interface DCFResult {
    executive_summary: string;
    company_overview: string;
    financial_metrics: {
        revenue: FinancialMetric[];
        ebit: FinancialMetric[];
        net_income: FinancialMetric[];
    };
    dcf_analysis: DCFAnalysis;
    valuation: Valuation;
    key_insights: string[];
    data_quality_notes: string;
    methodology: string;
}

const reviews = [
    {
        body: "Analyze Apple Inc for DCF analysis with 5 years of annual data.",
    },
    {
        body: "Calculate DCF metrics for Microsoft Corporation.",
    },
    {
        body: "Perform comprehensive financial analysis on TSLA stock.",
    },
    {
        body: "DCF analysis for Amazon with quarterly data for 3 years.",
    },
    {
        body: "Evaluate Netflix financial performance and intrinsic value.",
    },
    {
        body: "Analyze Google (Alphabet) cash flow projections.",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    body,
    onSelect,
}: {
    body: string;
    onSelect: (text: string) => void;
}) => {
    return (
        <button
            onClick={() => onSelect(body)}
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4"
            )}
        >
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </button>
    );
};

function Page() {
    const [query, setQuery] = useState(
        "Analyze Apple Inc for DCF analysis with 5 years of annual data"
    );
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<DCFResult | null>(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.post(
                "https://stock-analysis-977121587860.asia-south1.run.app/query",
                {
                    query,
                }
            );
            console.log("response is = ", response);

            const raw = response.data.result.raw;
            const jsonStart = raw.indexOf("```json");
            const jsonEnd = raw.lastIndexOf("```");
            const extracted = raw.substring(jsonStart + 7, jsonEnd);
            const parsed = JSON.parse(extracted);
            setResult(parsed);
        } catch (err) {
            setError("Failed to fetch analysis. Please try again.");
            console.log("getting error = ", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <VantaFog />
            <div className="max-w-5xl mx-auto p-6 mt-10">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-primary mb-6">
                    AI-Powered DCF <AuroraText>Stock Analyzer</AuroraText> –
                    Instantly Uncover True Company Value with Data-Driven
                    Insights
                </h1>

                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-4 border mt-10 rounded-md backdrop-blur-2xl"
                    rows={4}
                />
                <RainbowButton
                    variant="outline"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Analyzing..." : "Run DCF Analysis"}
                </RainbowButton>

                <section className="mt-20">
                    <h1 className="text-xl font-bold">
                        <AuroraText>Sample queries</AuroraText> you can use for
                        DCF analysis
                    </h1>
                    <div className="relative mt-5 flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {firstRow.map((review) => (
                                <ReviewCard
                                    key={review.body}
                                    body={review.body}
                                    onSelect={setQuery}
                                />
                            ))}
                        </Marquee>

                        <Marquee
                            reverse
                            pauseOnHover
                            className="[--duration:20s]"
                        >
                            {secondRow.map((review) => (
                                <ReviewCard
                                    key={review.body}
                                    body={review.body}
                                    onSelect={setQuery}
                                />
                            ))}
                        </Marquee>
                    </div>
                </section>

                {error && <p className="text-red-500 font-medium">{error}</p>}

                {result && (
                    <div className="mt-8 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">
                                📌 Executive Summary
                            </h2>
                            <p className="text-gray-800">
                                {result.executive_summary}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-2">
                                🏢 Company Overview
                            </h2>
                            <p className="text-gray-800">
                                {result.company_overview}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">
                                📊 Key Financial Metrics (USD Billions)
                            </h2>
                            <table className="w-full text-left border border-gray-300 rounded-md overflow-hidden text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-2">Year</th>
                                        <th className="p-2">Revenue</th>
                                        <th className="p-2">EBIT</th>
                                        <th className="p-2">Net Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.financial_metrics.revenue.map(
                                        (r: FinancialMetric, i: number) => (
                                            <tr key={i} className="border-t">
                                                <td className="p-2">
                                                    {r.year}
                                                </td>
                                                <td className="p-2">
                                                    ${r.value}
                                                </td>
                                                <td className="p-2">
                                                    $
                                                    {result.financial_metrics
                                                        .ebit[i]?.value ??
                                                        "N/A"}
                                                </td>
                                                <td className="p-2">
                                                    $
                                                    {result.financial_metrics
                                                        .net_income[i]?.value ??
                                                        "N/A"}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">
                                💰 UFCF DCF Calculations
                            </h2>
                            <table className="w-full text-left border border-gray-300 rounded-md overflow-hidden text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-2">Year</th>
                                        <th className="p-2">EBIT</th>
                                        <th className="p-2">Tax %</th>
                                        <th className="p-2">Depreciation</th>
                                        <th className="p-2">CapEx</th>
                                        <th className="p-2">WC Change</th>
                                        <th className="p-2">UFCF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.dcf_analysis.ufcf_calculations.map(
                                        (d, i) => (
                                            <tr key={i} className="border-t">
                                                <td className="p-2">
                                                    {d.year}
                                                </td>
                                                <td className="p-2">
                                                    ${d.ebit}
                                                </td>
                                                <td className="p-2">
                                                    {d.tax_rate}%
                                                </td>
                                                <td className="p-2">
                                                    ${d.depreciation}
                                                </td>
                                                <td className="p-2">
                                                    ${d.capex}
                                                </td>
                                                <td className="p-2">
                                                    ${d.wc_change}
                                                </td>
                                                <td className="p-2 font-semibold">
                                                    ${d.ufcf}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold">
                                📈 Trends
                            </h2>
                            <p>
                                <strong>Revenue Trend:</strong>{" "}
                                {result.dcf_analysis.trends.revenue_trend}
                            </p>
                            <p>
                                <strong>Profitability Trend:</strong>{" "}
                                {result.dcf_analysis.trends.profitability_trend}
                            </p>
                            <p>
                                <strong>Cash Flow Trend:</strong>{" "}
                                {result.dcf_analysis.trends.cash_flow_trend}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold">
                                📉 Valuation Summary
                            </h2>
                            <p>
                                <strong>Intrinsic Value:</strong> $
                                {result.valuation.intrinsic_value}
                            </p>
                            <p>
                                <strong>Current Price:</strong> $
                                {result.valuation.current_price}
                            </p>
                            <p>
                                <strong>Upside Potential:</strong>{" "}
                                {result.valuation.upside_potential}%
                            </p>
                            <p>
                                <strong>Recommendation:</strong>{" "}
                                <span
                                    className={`font-bold ${
                                        result.valuation.recommendation ===
                                        "UNDERVALUED"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {result.valuation.recommendation}
                                </span>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold">
                                🔍 Key Insights
                            </h2>
                            <ul className="list-disc list-inside text-gray-800">
                                {result.key_insights.map(
                                    (insight: string, i: number) => (
                                        <li key={i}>{insight}</li>
                                    )
                                )}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold">
                                📌 Notes & Methodology
                            </h2>
                            <p className="text-gray-600 italic">
                                {result.data_quality_notes}
                            </p>
                            <p className="mt-2">{result.methodology}</p>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
