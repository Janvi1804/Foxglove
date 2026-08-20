// Sticker SVG shapes + draggable behavior

const StickerHeart = ({ color = "#c98a8a" }) => (
  <svg width="88" height="82" viewBox="0 0 88 82" fill="none">
    <path d="M44 74 C 12 52, 4 34, 12 20 C 20 6, 38 6, 44 20 C 50 6, 68 6, 76 20 C 84 34, 76 52, 44 74 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M28 24 Q 32 18, 38 20" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const StickerStar = ({ color = "#e8c66a" }) => (
  <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
    <path d="M44 6 L54 32 L82 34 L60 52 L68 78 L44 62 L20 78 L28 52 L6 34 L34 32 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="34" cy="38" r="2.5" fill="#3a2e26"/>
  </svg>
);

const StickerFlower = ({ color = "#e9c8c4", petalColor = "#c98a8a" }) => (
  <svg width="94" height="94" viewBox="0 0 94 94" fill="none">
    <circle cx="47" cy="18" r="14" fill={color} stroke="#3a2e26" strokeWidth="2.5"/>
    <circle cx="76" cy="47" r="14" fill={color} stroke="#3a2e26" strokeWidth="2.5"/>
    <circle cx="47" cy="76" r="14" fill={color} stroke="#3a2e26" strokeWidth="2.5"/>
    <circle cx="18" cy="47" r="14" fill={color} stroke="#3a2e26" strokeWidth="2.5"/>
    <circle cx="47" cy="47" r="13" fill={petalColor} stroke="#3a2e26" strokeWidth="2.5"/>
    <circle cx="43" cy="44" r="2" fill="#3a2e26"/>
  </svg>
);

const StickerCloud = ({ color = "#f5efe3" }) => (
  <svg width="110" height="70" viewBox="0 0 110 70" fill="none">
    <path d="M20 50 Q 8 50, 8 38 Q 8 26, 22 26 Q 22 12, 40 12 Q 54 12, 58 22 Q 68 16, 78 24 Q 92 22, 96 36 Q 108 38, 104 52 Q 100 62, 84 60 L 26 60 Q 14 60, 20 50 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="38" cy="36" r="2" fill="#3a2e26"/>
    <circle cx="52" cy="36" r="2" fill="#3a2e26"/>
    <path d="M40 44 Q 45 48, 50 44" stroke="#3a2e26" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const StickerLeaf = ({ color = "#8ba888" }) => (
  <svg width="76" height="90" viewBox="0 0 76 90" fill="none">
    <path d="M38 6 C 8 20, 6 60, 20 82 C 40 78, 66 60, 68 30 C 68 16, 56 6, 38 6 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M32 74 Q 40 50, 56 24" stroke="#3a2e26" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
    <path d="M38 60 L 48 52" stroke="#3a2e26" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
    <path d="M38 46 L 50 40" stroke="#3a2e26" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const StickerCoffee = ({ color = "#c98a8a" }) => (
  <svg width="82" height="86" viewBox="0 0 82 86" fill="none">
    <path d="M14 30 L 68 30 L 64 74 Q 62 82, 52 82 L 30 82 Q 20 82, 18 74 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M68 40 Q 78 42, 78 52 Q 78 62, 66 62" stroke="#3a2e26" strokeWidth="2.5" fill="none"/>
    <path d="M30 8 Q 32 16, 30 22" stroke="#3a2e26" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M42 6 Q 44 14, 42 20" stroke="#3a2e26" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M54 8 Q 56 16, 54 22" stroke="#3a2e26" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const StickerFox = ({ color = "#c98a8a" }) => (
  <svg width="94" height="88" viewBox="0 0 94 88" fill="none">
    <path d="M14 20 L 30 40 L 20 66 L 47 74 L 74 66 L 64 40 L 80 20 L 66 30 L 47 24 L 28 30 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M30 40 L 47 44 L 64 40" stroke="#3a2e26" strokeWidth="2" fill="none"/>
    <path d="M40 52 Q 47 58, 54 52" stroke="#3a2e26" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="36" cy="46" r="2.5" fill="#3a2e26"/>
    <circle cx="58" cy="46" r="2.5" fill="#3a2e26"/>
    <path d="M46 60 L 47 66 L 48 60" fill="#3a2e26"/>
  </svg>
);

const StickerTag = ({ color = "#e9c8c4", text = "hi!" }) => (
  <svg width="108" height="68" viewBox="0 0 108 68" fill="none">
    <path d="M8 20 L 30 8 L 100 8 L 100 60 L 30 60 L 8 48 Z"
      fill={color} stroke="#3a2e26" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="24" cy="34" r="4" fill="#3a2e26"/>
    <text x="62" y="42" textAnchor="middle" fontFamily="Shadows Into Light, cursive" fontSize="22" fill="#3a2e26">{text}</text>
  </svg>
);

const STICKER_SET = [
  { Comp: StickerHeart, x: 15, y: 20, rot: -14 },
  { Comp: StickerStar, x: 65, y: 12, rot: 8 },
  { Comp: StickerFlower, x: 40, y: 34, rot: -6 },
  { Comp: StickerLeaf, x: 78, y: 44, rot: 22 },
  { Comp: StickerCoffee, x: 12, y: 55, rot: 12 },
  { Comp: StickerFox, x: 55, y: 62, rot: -8 },
  { Comp: StickerCloud, x: 22, y: 80, rot: -4 },
  { Comp: StickerTag, x: 62, y: 84, rot: 6, props: { text: "xoxo" } },
  { Comp: StickerHeart, x: 82, y: 74, rot: 18, props: { color: "#e8c66a" } },
  { Comp: StickerStar, x: 8, y: 8, rot: -20, props: { color: "#8ba888" } },
  { Comp: StickerFlower, x: 88, y: 22, rot: 10, props: { color: "#e8c66a", petalColor: "#8ba888" } },
  { Comp: StickerTag, x: 30, y: 68, rot: -12, props: { text: "yay", color: "#8ba888" } },
];

function DraggableSticker({ initial, children }) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({
    x: initial.x, y: initial.y, rot: initial.rot, dragging: false, z: 1
  });
  const dragData = React.useRef(null);

  const onPointerDown = (e) => {
    e.preventDefault();
    const el = ref.current;
    const stage = el.parentElement;
    const stageRect = stage.getBoundingClientRect();
    dragData.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: state.x,
      origY: state.y,
      stageW: stageRect.width,
      stageH: stageRect.height,
    };
    el.setPointerCapture(e.pointerId);
    setState(s => ({ ...s, dragging: true, z: 30 }));
  };

  const onPointerMove = (e) => {
    if (!dragData.current) return;
    const dx = ((e.clientX - dragData.current.startX) / dragData.current.stageW) * 100;
    const dy = ((e.clientY - dragData.current.startY) / dragData.current.stageH) * 100;
    setState(s => ({
      ...s,
      x: Math.max(0, Math.min(92, dragData.current.origX + dx)),
      y: Math.max(0, Math.min(92, dragData.current.origY + dy)),
    }));
  };

  const onPointerUp = (e) => {
    if (!dragData.current) return;
    dragData.current = null;
    // wobble on release
    const originalRot = state.rot;
    setState(s => ({ ...s, dragging: false, rot: originalRot + 8 }));
    setTimeout(() => setState(s => ({ ...s, rot: originalRot - 4 })), 100);
    setTimeout(() => setState(s => ({ ...s, rot: originalRot + 2 })), 200);
    setTimeout(() => setState(s => ({ ...s, rot: originalRot, z: 1 })), 300);
    try { ref.current.releasePointerCapture(e.pointerId); } catch(_) {}
  };

  return (
    <div
      ref={ref}
      className={`sticker ${state.dragging ? "dragging" : ""}`}
      style={{
        left: `${state.x}%`,
        top: `${state.y}%`,
        transform: `translate(-50%, -50%) rotate(${state.rot}deg)`,
        transition: state.dragging ? "none" : "transform 0.2s ease",
        zIndex: state.z,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {children}
    </div>
  );
}

function StickerStage({ density = 8 }) {
  const stickers = STICKER_SET.slice(0, density);
  return (
    <div className="sticker-stage">
      {stickers.map((s, i) => (
        <DraggableSticker key={i} initial={{ x: s.x, y: s.y, rot: s.rot }}>
          <s.Comp {...(s.props || {})} />
        </DraggableSticker>
      ))}
    </div>
  );
}

Object.assign(window, { StickerStage, DraggableSticker, STICKER_SET,
  StickerHeart, StickerStar, StickerFlower, StickerCloud, StickerLeaf, StickerCoffee, StickerFox, StickerTag });
