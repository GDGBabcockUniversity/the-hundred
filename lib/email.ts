export const generateNominationEmailHtml = (firstName: string): string => {
  // WhatsApp Share Message
  // Someone nominated me for Babcock 100, so I’m paying it forward. If you know someone at Babcock doing real work that deserves to be seen, nominate them before June 20. babcock100.com?utm_source=whatsapp&utm_medium=referral&utm_campaign=pay_it_forward
  const shareMessage = `Someone nominated me for Babcock 100, so I’m paying it forward. If you know someone at Babcock doing real work that deserves to be seen, nominate them before June 20. babcock100.com?utm_source=whatsapp&utm_medium=referral&utm_campaign=pay_it_forward`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Someone nominated you for Babcock 100</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 32px 20px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      color: #001e40; /* brand navy */
    }
    p {
      margin-bottom: 16px;
      font-size: 16px;
    }
    .btn {
      display: inline-block;
      background-color: #001e40;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 16px;
      margin: 16px 0;
    }
    .footer {
      margin-top: 48px;
      font-size: 14px;
      color: #666666;
    }
    .note {
      margin-top: 32px;
      padding-top: 16px;
      border-top: 1px solid #eaeaea;
      font-size: 12px;
      color: #888888;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Hey ${firstName},</p>

    <p>Someone put your name forward for Babcock 100 and I wanted to make sure you heard it directly.</p>

    <p>Babcock 100 is the first cross-campus student recognition platform at Babcock. Every year, 100 students will be selected from across every faculty and permanently documented for shaping this university. The Founding Class of 2026 is open for nominations right now and closes June 20.</p>

    <p>I can’t tell you who nominated you, that’s not how this works. What I can tell you is that someone on this campus thought your work was worth putting on record. If you make the shortlist, we’ll reach out directly and ask you to fill in a full profile. Until then, you’re in the mix.</p>

    <p>If this means something to you, pass it on.</p>

    <a href="${whatsappUrl}" class="btn">Pay it Forward</a>

    <p>Nominations are at <a href="https://babcock100.com" style="color: #D39B00; text-decoration: none; font-weight: 600;">babcock100.com</a>.</p>

    <div class="footer">
      <p style="margin-bottom: 4px;"><strong>Neku</strong></p>
      <p style="margin-top: 0;">Founder, Babcock 100</p>
    </div>

    <div class="note">
      Please note: The email address nominations@gdgbabcock.com does not exist, so replies to this email will not be seen.
    </div>
  </div>
</body>
</html>
  `;
};
