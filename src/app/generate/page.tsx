"use client";

import React, { useState } from "react";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

interface Contact {
  full_name: string;
  title: string;
  company: string;
  email: string;
  linkedin_url: string;
}

interface Email {
  name: string;
  email: string;
  subject: string;
  body: string;
}

interface ApiResponse {
  "contacts.json"?: { contacts: Contact[] };
  "emails.json"?: { emails: Email[] };
  message?: string;
}

export default function AnalyzePage() {
  const [form, setForm] = useState({
    company_name: "",
    topic: "",
    niche: "",
    designation: "",
    service: "",
    no_of: "",
    geospatial_area: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [error, setError] = useState("");
  const token = process.env.NEXT_PUBLIC_API_TOKEN || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        "https://lead-agent-977121587860.asia-south1.run.app/lead-agent",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data: ApiResponse = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error submitting lead-gen form:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-6xl mx-auto px-4 md:px-36 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          AI-Powered <AuroraText>Lead Generation</AuroraText> – Scale Your
          Outreach with Precision & Personalization
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {Object.entries(form).map(([key, val]) => (
            <input
              key={key}
              type="text"
              name={key}
              value={val}
              onChange={handleChange}
              placeholder={key
                .replace(/_/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
              className="w-full border-b-[2px] px-4 py-3 border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <RainbowButton
          onClick={handleSubmit}
          disabled={loading}
          variant="outline"
        >
          {loading ? "Generating Leads..." : "Generate Leads"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium mt-4">{error}</p>}

        {result && (
          <div className="mt-10 space-y-10 text-black">
            <div>
              <h2 className="text-2xl font-semibold">📇 Contacts</h2>
              <ul className="list-disc pl-6 space-y-3">
                {result["contacts.json"]?.contacts?.map((c, i) => (
                  <li key={i}>
                    <strong>{c.full_name}</strong> — {c.title} at {c.company}
                    <br />
                    Email: {c.email}
                    <br />
                    LinkedIn: {c.linkedin_url}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">✉️ Emails</h2>
              <ul className="space-y-6">
                {result["emails.json"]?.emails?.map((e, i) => (
                  <li key={i}>
                    <p>
                      <strong>To:</strong> {e.name} ({e.email})
                    </p>
                    <p>
                      <strong>Subject:</strong> {e.subject}
                    </p>
                    <pre className="border-[1px] border-black mt-2 p-3 rounded-md overflow-auto whitespace-pre-wrap text-sm">
                      {e.body}
                    </pre>
                  </li>
                ))}
              </ul>
            </div>

            {result.message && (
              <div className="text-green-600 font-medium">
                ✅ {result.message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
