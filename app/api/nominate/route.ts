import { google } from "googleapis";
import { NextResponse } from "next/server";
import type { NominationFormData } from "@/lib/types";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const SHEET_HEADERS = [
  "Submission ID",
  "Timestamp",
  "Nominee First Name",
  "Nominee Last Name",
  "School",
  "Department",
  "Level",
  "School Email Address",
  "Recognition Area(s)",
  "Nomination Reason",
  "Supporting Evidence / Links",
];

const getAuth = () => {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error("Missing Google service account credentials");
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: SCOPES,
  });
};

const generateId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "NOM-";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

const ensureHeaders = async (
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
) => {
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A1:K1",
  });

  if (!existing.data.values || existing.data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Sheet1!A1:K1",
      valueInputOption: "RAW",
      requestBody: { values: [SHEET_HEADERS] },
    });
  }
};

export async function POST(request: Request) {
  try {
    const body: NominationFormData = await request.json();

    // Server-side validation
    const requiredFields: (keyof NominationFormData)[] = [
      "firstName",
      "lastName",
      "school",
      "department",
      "level",
      "email",
      "reason",
    ];

    for (const field of requiredFields) {
      if (
        !body[field] ||
        (typeof body[field] === "string" && !body[field].trim())
      ) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    if (!body.categories || body.categories.length === 0) {
      return NextResponse.json(
        { error: "At least one recognition area is required" },
        { status: 400 },
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Missing GOOGLE_SHEET_ID environment variable");
    }

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure headers exist on first submission
    await ensureHeaders(sheets, spreadsheetId);

    const submissionId = generateId();
    const timestamp = new Date().toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "short",
    });

    const row = [
      submissionId,
      timestamp,
      body.firstName.trim(),
      body.lastName.trim(),
      body.school.trim(),
      body.department.trim(),
      body.level,
      body.email.trim(),
      body.categories.join(", "),
      body.reason.trim(),
      body.evidence?.trim() || "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:K",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true, submissionId });
  } catch (error) {
    console.error("Nomination submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit nomination. Please try again." },
      { status: 500 },
    );
  }
}
