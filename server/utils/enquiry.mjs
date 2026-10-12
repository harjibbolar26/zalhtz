export const categories = [
  "Network & ICT infrastructure",
  "PABX & communication systems",
  "Repairs & maintenance",
  "Custom software",
  "Systems integration",
  "Technology consulting",
];

export function validateEnquiry(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const result = {};
  for (const [key, min, max] of [
    ["name", 2, 120],
    ["email", 3, 254],
    ["phone", 0, 40],
    ["category", 1, 80],
    ["description", 20, 5000],
  ]) {
    if (typeof body[key] !== "string") return null;
    const value = body[key].trim();
    if (value.length < min || value.length > max || value.includes("\0")) return null;
    result[key] = value;
  }
  if (/[\r\n]/.test(result.name) || !/^[^\s@<>;,]+@[^\s@<>;,]+\.[^\s@<>;,]+$/.test(result.email)) return null;
  if (!categories.includes(result.category)) return null;
  if (body.website !== undefined && body.website !== "") return null;
  return result;
}

export function enquiryMessage(enquiry, sender) {
  return {
    from: { name: "ZALHTZ website", address: sender },
    to: "u2us@zalhtz.com",
    replyTo: { name: enquiry.name, address: enquiry.email },
    subject: "Website enquiry: " + enquiry.category,
    text: "New ZALHTZ website enquiry\n\nName: " + enquiry.name + "\nEmail: " + enquiry.email + "\nPhone: " + (enquiry.phone || "Not supplied") + "\nService: " + enquiry.category + "\n\n" + enquiry.description,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}
