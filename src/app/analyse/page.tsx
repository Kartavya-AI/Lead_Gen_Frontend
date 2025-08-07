"use client";

import axios from "axios";
import React, { useState } from "react";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

interface FinancialMetric {
    year: number;
    value: number;
}

interface UFCFCalculation {
    year: number;
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
    recommendation: "UNDERVALUED" | "OVERVALUED" | "FAIRLY VALUED";
}

interface FinancialMetrics {
    revenue: FinancialMetric[];
    ebit: FinancialMetric[];
    net_income: FinancialMetric[];
}

interface DCFResult {
    executive_summary: string;
    company_overview: string;
    financial_metrics: FinancialMetrics;
    dcf_analysis: DCFAnalysis;
    valuation: Valuation;
    key_insights: string[];
    data_quality_notes: string;
    methodology: string;
}


export default function AnalyzePage() {
    const [company, setCompany] = useState("");
    const [years, setYears] = useState<number | undefined>();
    const [dataType, setDataType] = useState("");
    const [analysisType, setAnalysisType] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<DCFResult | null>(null);

    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.post(
                "https://stock-analysis-977121587860.asia-south1.run.app/analyze",
                {
                    company,
                    years,
                    data_type: dataType,
                    analysis_type: analysisType,
                }
            );

            const raw = response.data.result.raw;
            const jsonStart = raw.indexOf("```json");
            const jsonEnd = raw.lastIndexOf("```");
            const extracted = raw.substring(jsonStart + 7, jsonEnd);
            const parsed = JSON.parse(extracted);
            setResult(parsed);
        } catch (err) {
            setError("Failed to fetch analysis. Please try again.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <VantaFog />
            <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                    Intelligent <AuroraText>Custom DCF Analyzer</AuroraText> –
                    Uncover True Business Value with AI-Powered, Data-Driven
                    Valuation
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="p-4 border rounded-md"
                        placeholder="Company name (e.g., Tata Motors)"
                    />
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="p-4 border rounded-md"
                        placeholder="Years of data"
                    />
                    <select
                        value={dataType}
                        onChange={(e) => setDataType(e.target.value)}
                        className="p-4 border rounded-md"
                    >
                        <option value="annual">Annual</option>
                        <option value="quarterly">Quarterly</option>
                    </select>
                    <select
                        value={analysisType}
                        onChange={(e) => setAnalysisType(e.target.value)}
                        className="p-4 border rounded-md"
                    >
                        <option value="comprehensive">Comprehensive</option>
                        <option value="summary">Summary</option>
                    </select>
                </div>

                <RainbowButton
                    variant="outline"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Analyzing..." : "Run Custom DCF Analysis"}
                </RainbowButton>

                {error && <p className="text-red-500 font-medium">{error}</p>}

                {result && (
                    <div className="mt-10 space-y-6">
                        <h2 className="text-2xl font-semibold">
                            📌 Executive Summary
                        </h2>
                        <p>{result.executive_summary}</p>

                        <h2 className="text-2xl font-semibold">
                            🏢 Company Overview
                        </h2>
                        <p>{result.company_overview}</p>

                        <h2 className="text-2xl font-semibold">
                            📊 Key Financial Metrics
                        </h2>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                            {JSON.stringify(result.financial_metrics, null, 2)}
                        </pre>

                        <h2 className="text-2xl font-semibold">
                            💰 DCF Analysis
                        </h2>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                            {JSON.stringify(result.dcf_analysis, null, 2)}
                        </pre>

                        <h2 className="text-2xl font-semibold">
                            📈 Valuation Summary
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

                        <h2 className="text-2xl font-semibold">
                            🔍 Key Insights
                        </h2>
                        <ul className="list-disc list-inside">
                            {result.key_insights.map(
                                (insight: string, i: number) => (
                                    <li key={i}>{insight}</li>
                                )
                            )}
                        </ul>

                        <h2 className="text-2xl font-semibold">
                            📌 Notes & Methodology
                        </h2>
                        <p className="italic text-gray-600">
                            {result.data_quality_notes}
                        </p>
                        <p>{result.methodology}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
