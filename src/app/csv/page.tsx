"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

interface Email {
  name: string;
  email: string;
  subject: string;
  body: string;
}

interface Profile {
  name: string;
  summary: string;
}

interface APIResponse {
  emails: Email[];
  profiles: Profile[];
  errors: string[];
  message: string;
  processed_count: number;
  processed_names: string[];
}

export default function LeadGenPage() {
  const [file, setFile] = useState<File | null>(null);
  const [profilePrompt, setProfilePrompt] = useState("");
  const [emailPrompt, setEmailPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<APIResponse | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!file || !profilePrompt || !emailPrompt) {
      setError("Please upload a CSV and fill both prompts.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("profile_prompt", profilePrompt);
      formData.append("email_prompt", emailPrompt);

      const response = await axios.post(
        "https://lead-gen-2-977121587860.asia-south1.run.app/process_csv",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          AI-Powered <AuroraText>Lead Generator</AuroraText> – Upload Leads &
          Craft Personalized Outreach
        </h1>

        <div className="space-y-4 mt-8">
          <input
            type="file"
            accept=".csv"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="p-4 border rounded-md w-full"
          />
          <textarea
            value={profilePrompt}
            onChange={(e) => setProfilePrompt(e.target.value)}
            placeholder="Enter profile generation prompt"
            className="p-4 border rounded-md w-full min-h-[100px]"
          />
          <textarea
            value={emailPrompt}
            onChange={(e) => setEmailPrompt(e.target.value)}
            placeholder="Enter email generation prompt"
            className="p-4 border rounded-md w-full min-h-[100px]"
          />
        </div>

        <RainbowButton
          variant="outline"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Emails & Profiles"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {result && (
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">📧 Generated Emails</h2>
            <div className="space-y-4">
              {result.emails.map((email, idx) => (
                <div key={idx} className="bg-zinc-50 p-4 rounded shadow">
                  <p>
                    <strong>To:</strong> {email.name} ({email.email})
                  </p>
                  <p>
                    <strong>Subject:</strong> {email.subject}
                  </p>
                  <p className="whitespace-pre-line mt-2">{email.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold">👤 Generated Profiles</h2>
            <div className="space-y-4">
              {result.profiles.map((profile, idx) => (
                <div key={idx} className="bg-zinc-50 p-4 rounded shadow">
                  <p className="font-bold">{profile.name}</p>
                  <p className="whitespace-pre-line">{profile.summary}</p>
                </div>
              ))}
            </div>

            {result.errors.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-red-600">⚠️ Errors</h2>
                <ul className="list-disc list-inside text-red-500">
                  {result.errors.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
