export const onRequest = async ({ request, env }) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const data = await request.json();

    const { name, email, message, page } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const auth = btoa(`${env.ZOHO_SMTP_USER}:${env.ZOHO_SMTP_PASS}`);

    const res = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          address: "info@coreholdingcorp.com",
          name: "Core Holding Corporation",
        },
        to: [
          {
            email_address: {
              address: "info@coreholdingcorp.com",
            },
          },
        ],
        reply_to: [
          {
            address: email,
            name,
          },
        ],
        subject: `New Contact Form Submission`,
        htmlbody: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Page:</strong> ${page}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(
        JSON.stringify({ error: "Email send failed", detail: text }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
};
