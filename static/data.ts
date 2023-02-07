export type StatusCode = {
  statusCode: number;
  title: string;
  url: string;
};

const level100Codes: StatusCode[] = [
  { statusCode: 100, title: "Continue", url: "/images/100.png" },
  { statusCode: 101, title: "Switching protocols", url: "/images/101.png" },
  { statusCode: 102, title: "Processing", url: "/images/102.png" },
  { statusCode: 103, title: "Early hints", url: "/images/103.png" },
];

const level200Codes: StatusCode[] = [
  { statusCode: 200, title: "OK", url: "/images/200.png" },
  { statusCode: 201, title: "Created", url: "/images/201.png" },
  { statusCode: 202, title: "Accepted", url: "/images/202.png" },
  {
    statusCode: 203,
    title: "Non-authoritative information",
    url: "/images/203.png",
  },
  { statusCode: 204, title: "No content", url: "/images/204.png" },
  { statusCode: 206, title: "Partial content", url: "/images/206.png" },
  { statusCode: 207, title: "Multi-status", url: "/images/207.png" },
];

const level300Codes: StatusCode[] = [
  { statusCode: 300, title: "Mulitple choices", url: "/images/300.png" },
  { statusCode: 301, title: "Moved permanently", url: "/images/301.png" },
  { statusCode: 302, title: "Found", url: "/images/302.png" },
  { statusCode: 303, title: "See other", url: "/images/303.png" },
  { statusCode: 304, title: "Not modified", url: "/images/304.png" },
  { statusCode: 305, title: "Use proxy", url: "/images/305.png" },
  { statusCode: 307, title: "Temporary redirect", url: "/images/307.png" },
  { statusCode: 308, title: "Permanent redirect", url: "/images/308.png" },
];

const level400Codes: StatusCode[] = [
  { statusCode: 400, title: "Bad request", url: "/images/400.png" },
  { statusCode: 401, title: "Unauthorized", url: "/images/401.png" },
  { statusCode: 402, title: "Payment required", url: "/images/402.png" },
  { statusCode: 403, title: "Forbidden", url: "/images/403.png" },
  { statusCode: 404, title: "Not found", url: "/images/404.png" },
  { statusCode: 405, title: "Method not allowed", url: "/images/405.png" },
  { statusCode: 406, title: "Not acceptable", url: "/images/406.png" },
  {
    statusCode: 407,
    title: "Proxy authentication required",
    url: "/images/407.png",
  },
  { statusCode: 408, title: "Request timeout", url: "/images/408.png" },
  { statusCode: 409, title: "Conflict", url: "/images/409.png" },
  { statusCode: 410, title: "Gone", url: "/images/410.png" },
  { statusCode: 411, title: "Length required", url: "/images/411.png" },
  { statusCode: 412, title: "Precondition failed", url: "/images/412.png" },
  { statusCode: 413, title: "Payload too large", url: "/images/413.png" },
  { statusCode: 414, title: "Request-URI too long", url: "/images/414.png" },
  {
    statusCode: 415,
    title: "Unsupported media type",
    url: "/images/415.png",
  },
  {
    statusCode: 416,
    title: "Request range not satisfiable",
    url: "/images/416.png",
  },
  { statusCode: 417, title: "Expectationio failed", url: "/images/417.png" },
  { statusCode: 418, title: "I'm a teapot", url: "/images/418.png" },
  { statusCode: 420, title: "Enhance your calm", url: "/images/420.png" },
  { statusCode: 421, title: "Misdirected request", url: "/images/421.png" },
  { statusCode: 422, title: "Unprocessable entity", url: "/images/422.png" },
  { statusCode: 423, title: "Locked", url: "/images/423.png" },
  { statusCode: 424, title: "Failed dependency", url: "/images/424.png" },
  { statusCode: 425, title: "Too Early", url: "/images/425.png" },
  { statusCode: 426, title: "Upgrade required", url: "/images/426.png" },
  { statusCode: 429, title: "Too many requests", url: "/images/429.png" },
  {
    statusCode: 431,
    title: "Request header fields too large",
    url: "/images/431.png",
  },
  { statusCode: 444, title: "No response", url: "/images/444.png" },
  {
    statusCode: 450,
    title: "Blocked by windows parental controls",
    url: "/images/450.png",
  },
  {
    statusCode: 451,
    title: "Unavailable for legal reasons",
    url: "/images/451.png",
  },
  {
    statusCode: 497,
    title: "HTTP request sent to HTTPS port",
    url: "/images/497.png",
  },
  { statusCode: 498, title: "Token expird/invalid", url: "/images/498.png" },
  { statusCode: 499, title: "Client closed request", url: "/images/499.png" },
];

const level500Codes: StatusCode[] = [
  { statusCode: 500, title: "Internal server error", url: "/images/500.png" },
  { statusCode: 501, title: "Not implemented", url: "/images/501.png" },
  { statusCode: 502, title: "Bad gateway", url: "/images/502.png" },
  { statusCode: 503, title: "Service unavailable", url: "/images/503.png" },
  { statusCode: 504, title: "Gateway timeout", url: "/images/504.png" },
  {
    statusCode: 506,
    title: "Variant also negotiates",
    url: "/images/506.png",
  },
  { statusCode: 507, title: "Insufficient storage", url: "/images/507.png" },
  { statusCode: 508, title: "Loop detected", url: "/images/508.png" },
  {
    statusCode: 509,
    title: "Bandwadth limit exceeded",
    url: "/images/509.png",
  },
  { statusCode: 510, title: "Not extended", url: "/images/510.png" },
  {
    statusCode: 511,
    title: "Network authentication required",
    url: "/images/511.png",
  },
  { statusCode: 521, title: "Web server is down", url: "/images/521.png" },
  { statusCode: 522, title: "Connection timed out", url: "/images/522.png" },
  { statusCode: 523, title: "Origin is unreachable", url: "/images/523.png" },
  { statusCode: 525, title: "SSL handshake failed", url: "/images/525.png" },
  {
    statusCode: 599,
    title: "Network connect timeout error",
    url: "/images/599.png",
  },
];

const codeLevelList = [1, 2, 3, 4, 5];
