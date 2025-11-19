import {productImages} from "../assets/productImages.js"

export const products = {
  "splicing-machines": [
    {
      id: 1,
      name: "Aitelong-17T",
      description:
        "A high-precision fusion splicer designed for fast and reliable fiber optic splicing. It features an intuitive touch interface, quick splice time, and excellent alignment accuracy for field or lab use.",
      features: ["Extremely low splice loss", "Battery 7800 mAh (250 splice with single charge)", "Works smoothly even in dusty areas"],
      price: "₹1,40,000",
      images: [`${productImages.SAT_17T_1}`, `${productImages.SAT_17T_2}`]

    },
    {
      id: 2,
      name: "Aitelong-17K",
      description:
        "The Aitelong-17K combines portability with advanced splicing technology, perfect for technicians who need accuracy and endurance in the field.",
      features: ["Extremely low splice loss", "Built in Power meter and VFL", "Battery 5200 mAh (170 splice with single charge)"],
      price: "₹1,00,000",
      images: [`${productImages.SAT_17K_1}`, `${productImages.SAT_17K_2}`]
    },
    {
      id: 3,
      name: "DVP-765",
      description:
        "Delivers stable and efficient core alignment splicing with a compact and rugged design. Ensures consistent splice quality with fast heating and user-friendly operation for professionals.",
      features: ["Excellent in splitter joining", "Extremely powerful motors", "Battery 5200 mAh (170 splice with single charge)"],
      price: "₹1,15,000",
      images: [`${productImages.DVP_765_1}`, `${productImages.DVP_765_2}`]
    },
    {
      id: 4,
      name: "DVP-740D",
      description:
        "A durable and cost-effective splicing solution, this offers precise alignment and quick splice cycles. Ideal for maintenance and installation projects requiring dependable performance",
      features: ["Excellent splitter joining", "Maintenance free operation", "Battery 5200 mAh (170 splice with single charge)"],
      price: "₹90,000",
      images: [`${productImages.DVP_740D_1}`, `${productImages.DVP_740D_2}`]
    },
  ],
  "otdr-device": [
    {
      id: 5,
      name: "TT4500",
      description:
        "Compact and reliable optical testing device designed for accurate fiber link analysis, offering high-resolution trace results, fast measurement speeds, and an easy-to-use interface—ideal.",
      features: ["Highly accurate", "Dynamic Range 26/24 dB", "Distance Range 100 km"],
      price: "₹25,000",
      images: [`${productImages.OTDR_1}`, `${productImages.OTDR_2}`]
    }
  ],
  "power-meters": [
    {
      id: 6,
      name: "Optical Power Meter",
      description:
        "Compact and accurate device for measuring optical signal strength across multiple wavelengths. Ideal for fiber network installation, maintenance, and troubleshooting with reliable performance.",
      features: ["Power Range -50 to +26dbm", "Pencil Battery Operated"],
      price: "₹1,200",
      images: [`${productImages.OPM}`]
    },
    {
      id: 7,
      name: "Visual Fault Locator",
      description:
        "A handy pen-style tool to pinpoint fiber breaks, bends, or faults. Perfect for quick visual inspection and on-the-spot fiber testing in the field.",
      features: ["Power Range -50 to +26dbm", "Range 10km", "Pencil Battery Operated"],
      price: "₹500",
      images: [`${productImages.VFL}`]
    },
    {
      id: 8,
      name: "OPM with built-in VFL",
      description:
        "A versatile 2-in-1 tool combining an Optical Power Meter and Visual Fault Locator for comprehensive fiber testing, ensures efficient measurement and fault detection in a single compact unit.",
      features: ["Power Range -50 to +26dbm", "VFL Range 6km"],
      price: "₹1,600",
      images: [`${productImages.OPM_with_VFL_1}`, `${productImages.OPM_with_VFL_2}`]
    }
  ],
  "cleaving-tool": [
    {
      id: 9,
      description:
        "High-precision fiber optic cleaver designed for effortless and accurate fiber preparation.",
      features: ["Auto Return", "Auto Rotating Blade", "Blade life 48000 cutting"],
      price: "₹4,800",
      images: [`${productImages.Siti_62}`]
    }
  ]
}