export default function RentIcon({ name, className }) {
  const props = {
    className,
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "ownership":
      return (
        <svg {...props}>
          <path d="M3 11.5L12 4l9 7.5" />
          <path d="M5 10.5V20h14v-9.5" />
          <rect x="9" y="14" width="6" height="6" rx="0.5" />
        </svg>
      );
    case "subscription":
      return (
        <svg {...props}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      );
    case "investment":
      return (
        <svg {...props}>
          <path d="M3 17l6-6 4 4 8-10" />
          <path d="M14 5h7v7" />
        </svg>
      );
    case "vnm":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case "credits":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      );
    case "resco":
      return (
        <svg {...props}>
          <path d="M3 21h18M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "invest":
      return (
        <svg {...props}>
          <path d="M12 2v20M17 7H9.5a3.5 3.5 0 000 7H14a3.5 3.5 0 010 7H6" />
        </svg>
      );
    case "gnm":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "biz":
      return (
        <svg {...props}>
          <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
