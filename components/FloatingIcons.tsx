"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type IconConfig = {
  id: string;
  src: string;
  xKeys: number[];
  yKeys: number[];
  delay: number;
  duration: number;           // kenardan kenara süre (s)
  rotationDuration: number;   // kendi etrafında dönüş süresi (s)
  rotateDir: 1 | -1;
  opacity: number;
  vanishAt: number;           // 0..1 arası, ne zaman “ani kaybolsun”
};

const ASSET_DIR = "/assets";
const PLACEHOLDER_PATH = "/assets/placeholder.svg";

const ICON_FILES = [
  "reactjs.png",
  "typescript.png",
  "nextjs.svg",
  "tailwind.png",
  "jest.png",
  "redux.png",
  "python.png",
  "django.png",
];

const rnd = (min: number, max: number) => Math.random() * (max - min) + min;

function pickPerimeterPoint(w: number, h: number, m: number) {
  // 0: top, 1: right, 2: bottom, 3: left
  const side = Math.floor(Math.random() * 4);
  switch (side) {
    case 0: return { x: rnd(0, w), y: -m };
    case 1: return { x: w + m, y: rnd(0, h) };
    case 2: return { x: rnd(0, w), y: h + m };
    default: return { x: -m, y: rnd(0, h) };
  }
}

// Dalgalı (sinüslü) yol için x/y keyframe’leri üret
function wavyKeyframes(
  sx: number, sy: number, ex: number, ey: number,
  segs: number, amp: number, waves: number, phase: number
) {
  const dx = ex - sx, dy = ey - sy;
  const len = Math.hypot(dx, dy) || 1;
  // yön vektörü ve buna dik normal
  const ux = dx / len, uy = dy / len;
  const nx = -uy, ny = ux;

  const xKeys: number[] = [];
  const yKeys: number[] = [];

  for (let k = 0; k <= segs; k++) {
    const t = k / segs; // 0..1
    const bx = sx + dx * t;
    const by = sy + dy * t;
    const offset = Math.sin(phase + t * waves * Math.PI * 2) * amp;
    xKeys.push(bx + nx * offset);
    yKeys.push(by + ny * offset);
  }
  return { xKeys, yKeys };
}

function buildConfigs(
  count: number,
  iconPool: string[],
  viewport: { w: number; h: number }
): IconConfig[] {
  const { w, h } = viewport;
  const margin = Math.round(Math.min(w, h) * 0.12); // ekran dışına pay
  const minDx = w * 0.25; // çaprazlık eşiği
  const minDy = h * 0.25;

  return Array.from({ length: count }, (_, i) => {
    const src = iconPool[Math.floor(Math.random() * iconPool.length)] ?? PLACEHOLDER_PATH;

    // Başlangıç/bitiş: yeterince diagonal olsun
    const start = pickPerimeterPoint(w, h, margin);
    let end = pickPerimeterPoint(w, h, margin);
    let tries = 0;
    while ((Math.abs(end.x - start.x) < minDx || Math.abs(end.y - start.y) < minDy) && tries < 8) {
      end = pickPerimeterPoint(w, h, margin);
      tries++;
    }

    // Dalga parametreleri
    const segs = 6;                         // yol karmaşıklığı (keyframe sayısı)
    const amp = rnd(16, Math.min(w, h) * 0.06); // sapma genliği (px)
    const waves = Math.floor(rnd(1, 3.9));  // 1..3 tam dalga
    const phase = rnd(0, Math.PI * 2);

    const { xKeys, yKeys } = wavyKeyframes(
      start.x, start.y, end.x, end.y, segs, amp, waves, phase
    );

    return {
      id: `${i}-${Math.random().toString(36).slice(2, 8)}`,
      src,
      xKeys,
      yKeys,
      delay: rnd(0, 6),
      duration: rnd(12, 22),          // yavaş akış
      rotationDuration: rnd(6, 14),
      rotateDir: Math.random() < 0.5 ? 1 : -1,
      opacity: rnd(0.14, 0.28),
      vanishAt: rnd(0.35, 0.8),       // rastgele mesafede “ani yok ol”
    };
  });
}

export function FloatingIcons() {
  const [iconCount, setIconCount] = useState(12);
  const [configs, setConfigs] = useState<IconConfig[]>([]);
  const [vp, setVp] = useState({ w: 0, h: 0 });
  const prefersReduced = useReducedMotion();
  const iconPool = useMemo(() => ICON_FILES.map((f) => `${ASSET_DIR}/${f}`), []);

  // viewport ölç
  useEffect(() => {
    const measure = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  // mobilde ikon sayısı
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = (e?: MediaQueryListEvent | MediaQueryList) => {
      const matches = e ? (e as MediaQueryListEvent).matches : mq.matches;
      setIconCount(matches ? 8 : 12);
    };
    update(mq);
    const listener = (e: MediaQueryListEvent) => update(e);
    if (mq.addEventListener) {
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    }
    mq.addListener(listener);
    return () => mq.removeListener(listener);
  }, []);

  // rota üret
  useEffect(() => {
    if (!vp.w || !vp.h) return;
    setConfigs(buildConfigs(iconCount, iconPool.length ? iconPool : [PLACEHOLDER_PATH], vp));
  }, [iconCount, iconPool, vp]);

  if (!configs.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {configs.map((c) => (
        <motion.div
          key={c.id}
          className="absolute"
          initial={{ x: c.xKeys[0], y: c.yKeys[0], opacity: 0, rotate: 0 }}
          animate={
            prefersReduced
              ? { x: c.xKeys[0], y: c.yKeys[0], opacity: c.opacity, rotate: 0 }
              : {
                  x: c.xKeys,
                  y: c.yKeys,
                  rotate: c.rotateDir === 1 ? [0, 360] : [0, -360],
                  // 0 -> görünür -> (vanishAt’te) aniden yok -> görünmez kal
                  opacity: [0, c.opacity, c.opacity, 0, 0],
                }
          }
          transition={
            prefersReduced
              ? { opacity: { duration: 0.6 } }
              : {
                  // dalgalı yol: keyframe sayısına eşit times
                  x: {
                    duration: c.duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: c.delay,
                    times: c.xKeys.map((_, i, arr) => i / (arr.length - 1)),
                  },
                  y: {
                    duration: c.duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: c.delay,
                    times: c.yKeys.map((_, i, arr) => i / (arr.length - 1)),
                  },
                  rotate: {
                    duration: c.rotationDuration,
                    ease: "linear",
                    repeat: Infinity,
                  },
                  // opacity: vanishAt’te ani düşüş
                  opacity: {
                    duration: c.duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: c.delay,
                    times: [0, 0.08, c.vanishAt, Math.min(c.vanishAt + 0.02, 0.98), 1],
                  },
                }
          }
          style={{ willChange: "transform, opacity" }}
        >
          <Image src={c.src} alt="" width={56} height={56} className="h-14 w-14" priority={false} />
        </motion.div>
      ))}
    </div>
  );
}
